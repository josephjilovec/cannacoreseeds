'use client'

import { useRef, useState } from 'react'
import { Header } from '@/components/store/header'
import { ProductGrid } from '@/components/store/product-grid'
import { ProductDetail } from '@/components/store/product-detail'
import { Checkout, type CustomerInfo, type PaymentInfo } from '@/components/store/checkout'
import { Confirmation } from '@/components/store/confirmation'
import { cartCount, type CartItem } from '@/lib/cart'
import type { PackSize, Strain } from '@/lib/strains'

type View = 'shop' | 'detail' | 'checkout' | 'confirmation'

export default function Page() {
  const [view, setView] = useState<View>('shop')
  const [selected, setSelected] = useState<Strain | null>(null)
  const [cart, setCart] = useState<CartItem[]>([])
  const [customer, setCustomer] = useState<CustomerInfo | null>(null)
  const [payment, setPayment] = useState<PaymentInfo | null>(null)
  const [orderNumber, setOrderNumber] = useState('')

  const contactRef = useRef<HTMLElement>(null)

  function goTop() {
    window.scrollTo({ top: 0 })
  }

  function openStrain(strain: Strain) {
    setSelected(strain)
    setView('detail')
    goTop()
  }

  function addItem(strain: Strain, packSize: PackSize, unitPrice: number, quantity: number) {
    setCart((prev) => {
      const existing = prev.find((i) => i.strainId === strain.id && i.packSize === packSize)
      if (existing) {
        return prev.map((i) =>
          i.lineId === existing.lineId ? { ...i, quantity: i.quantity + quantity } : i,
        )
      }
      return [
        ...prev,
        {
          lineId: `${strain.id}-${packSize}-${Date.now()}`,
          strainId: strain.id,
          name: strain.name,
          lineage: strain.lineage,
          image: strain.image,
          packSize,
          unitPrice,
          quantity,
        },
      ]
    })
  }

  function handleCheckoutFromDetail(packSize: PackSize, unitPrice: number, quantity: number) {
    if (selected) addItem(selected, packSize, unitPrice, quantity)
    setView('checkout')
    goTop()
  }

  function completeOrder(info: CustomerInfo, paymentInfo: PaymentInfo) {
    setCustomer(info)
    setPayment(paymentInfo)
    setOrderNumber(`#GEN-${Math.floor(1000 + Math.random() * 9000)}`)
    setView('confirmation')
    goTop()
  }

  function resetToShop() {
    setCart([])
    setCustomer(null)
    setPayment(null)
    setView('shop')
    goTop()
  }

  function goShop() {
    setView('shop')
    goTop()
  }

  function goContact() {
    setView('shop')
    // wait for shop view to render before scrolling
    requestAnimationFrame(() => {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Header
        cartCount={cartCount(cart)}
        onShop={goShop}
        onContact={goContact}
        onCart={() => {
          setView('checkout')
          goTop()
        }}
      />

      {view === 'shop' && <ProductGrid onSelect={openStrain} contactRef={contactRef} />}

      {view === 'detail' && selected && (
        <ProductDetail
          strain={selected}
          onBack={goShop}
          onAddToCart={(packSize, unitPrice, quantity) =>
            addItem(selected, packSize, unitPrice, quantity)
          }
          onCheckout={handleCheckoutFromDetail}
        />
      )}

      {view === 'checkout' && (
        <Checkout
          items={cart}
          onBack={goShop}
          onRemove={(lineId) => setCart((prev) => prev.filter((i) => i.lineId !== lineId))}
          onComplete={completeOrder}
        />
      )}

      {view === 'confirmation' && customer && payment && (
        <Confirmation
          orderNumber={orderNumber}
          items={cart}
          customer={customer}
          payment={payment}
          onContinue={resetToShop}
        />
      )}
    </main>
  )
}
