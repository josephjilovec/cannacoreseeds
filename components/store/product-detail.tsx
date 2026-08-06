'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Clock, Dna, Minus, Package, Plus } from 'lucide-react'
import { PACK_OPTIONS, packPrice, type PackSize, type Strain } from '@/lib/strains'

interface ProductDetailProps {
  strain: Strain
  onBack: () => void
  onAddToCart: (packSize: PackSize, unitPrice: number, quantity: number) => void
  onCheckout: (packSize: PackSize, unitPrice: number, quantity: number) => void
}

export function ProductDetail({ strain, onBack, onAddToCart, onCheckout }: ProductDetailProps) {
  const [packSize, setPackSize] = useState<PackSize>(6)
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const unitPrice = packPrice(packSize)
  const total = unitPrice * quantity

  function handleAdd() {
    onAddToCart(packSize, unitPrice, quantity)
    setAdded(true)
    setTimeout(() => setAdded(false), 1600)
  }

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to collection
      </button>

      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Image */}
        <div className="overflow-hidden rounded-lg border border-border bg-secondary">
          <img
            src={strain.image || '/placeholder.svg'}
            alt={`${strain.name} cannabis seeds`}
            className="aspect-square h-full w-full object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            {strain.name}
          </h1>

          <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Dna className="h-4 w-4 text-primary" />
              {strain.lineage}
            </span>
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              {strain.floweringTime}
            </span>
          </div>

          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            {strain.description}
          </p>

          {/* Pack size selector */}
          <div className="mt-8">
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Choose Your Pack
              </span>
              <span className="text-xs text-muted-foreground">Feminized seeds</span>
            </div>
            <div className="grid gap-2.5">
              {PACK_OPTIONS.map((option) => {
                const active = option.size === packSize
                return (
                  <button
                    key={option.size}
                    onClick={() => setPackSize(option.size)}
                    className={`flex items-center justify-between rounded-md border px-4 py-3.5 text-left transition-colors ${
                      active
                        ? 'border-primary bg-primary/10'
                        : 'border-border bg-card hover:border-primary/40'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`grid h-5 w-5 place-items-center rounded-full border ${
                          active ? 'border-primary bg-primary' : 'border-muted-foreground/50'
                        }`}
                      >
                        {active && <Check className="h-3 w-3 text-primary-foreground" />}
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {option.size} Seeds
                      </span>
                      {option.badge && (
                        <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                          {option.badge}
                        </span>
                      )}
                    </span>
                    <span className="font-mono text-base text-foreground">${option.price}</span>
                  </button>
                )
              })}
            </div>
            <p className="mt-3 flex items-center gap-1.5 text-xs leading-relaxed text-muted-foreground">
              <Package className="h-3.5 w-3.5 shrink-0 text-primary" />
              All seeds are shipped in original sealed breeder packaging.
            </p>
          </div>

          {/* Quantity + price */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Packs
              </span>
              <div className="mt-2 flex items-center rounded-md border border-border">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  disabled={quantity <= 1}
                  className="grid h-10 w-10 place-items-center text-foreground transition-colors hover:bg-secondary disabled:opacity-40"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-10 text-center font-mono text-foreground">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => Math.min(99, q + 1))}
                  className="grid h-10 w-10 place-items-center text-foreground transition-colors hover:bg-secondary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            <div className="text-right">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Subtotal
              </span>
              <p className="font-mono text-3xl text-foreground">${total}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 grid gap-3">
            <button
              onClick={() => onCheckout(packSize, unitPrice, quantity)}
              className="w-full rounded-md bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Proceed to Checkout
            </button>
            <button
              onClick={handleAdd}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-border bg-card py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {added ? (
                <>
                  <Check className="h-4 w-4 text-primary" />
                  Added to cart
                </>
              ) : (
                'Add to Cart'
              )}
            </button>
          </div>

          <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
            Seeds sold strictly as novelty souvenir genetic preservation items.
          </p>
        </div>
      </div>
    </div>
  )
}
