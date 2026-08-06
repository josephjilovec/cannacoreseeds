'use client'

import { CheckCircle2, Mail, Wallet } from 'lucide-react'
import { cartSubtotal, SHIPPING_COST, type CartItem } from '@/lib/cart'
import { getPaymentConfig } from '@/lib/payments'
import type { CustomerInfo, PaymentInfo } from './checkout'

interface ConfirmationProps {
  orderNumber: string
  items: CartItem[]
  customer: CustomerInfo
  payment: PaymentInfo
  onContinue: () => void
}

export function Confirmation({
  orderNumber,
  items,
  customer,
  payment,
  onContinue,
}: ConfirmationProps) {
  const subtotal = cartSubtotal(items)
  const total = subtotal + SHIPPING_COST
  const config = getPaymentConfig(payment.method)

  return (
    <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <CheckCircle2 className="h-14 w-14 text-primary" />
        <h1 className="mt-5 text-3xl font-semibold tracking-tight text-foreground">
          Order Received!
        </h1>
        <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
          Thank you for supporting an independent breeder.
        </p>
        <span className="mt-4 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 font-mono text-sm text-foreground">
          {orderNumber}
        </span>
      </div>

      {/* Payment instructions recap */}
      <div className="mt-8 rounded-lg border border-primary/40 bg-primary/5 p-4">
        <h2 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <Wallet className="h-4 w-4 text-primary" />
          Complete Your {config.label} Payment
        </h2>
        <div className="mt-3 grid gap-1 text-sm">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-muted-foreground">Send</span>
            <span className="font-mono font-semibold text-foreground">${total}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-muted-foreground">To</span>
            <span className="break-all font-mono text-foreground">{config.destination}</span>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-muted-foreground">Reference in note</span>
            <span className="font-mono text-foreground">{orderNumber}</span>
          </div>
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{config.instructions}</p>
      </div>

      {/* Email notification */}
      <div className="mt-6 flex items-start gap-3 rounded-lg border border-border bg-card p-4">
        <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          A receipt has been sent to{' '}
          <span className="font-medium text-foreground">{customer.email}</span>. You will receive a
          tracking link as soon as your package ships.
        </p>
      </div>

      {/* Shipping summary */}
      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Shipping To
          </h2>
          <address className="text-sm not-italic leading-relaxed text-foreground">
            {customer.name}
            <br />
            {customer.address}
            <br />
            {customer.city}, {customer.state} {customer.zip}
          </address>
        </div>

        <div className="rounded-lg border border-border bg-card p-5">
          <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Status
          </h2>
          <p className="text-sm text-foreground">Awaiting payment confirmation</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Ships within 1 business day of confirmation
          </p>
        </div>
      </div>

      {/* Order breakdown */}
      <div className="mt-6 rounded-lg border border-border bg-card p-5">
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Order Summary
        </h2>
        <ul className="divide-y divide-border">
          {items.map((item) => (
            <li key={item.lineId} className="flex items-center justify-between py-3 text-sm">
              <div>
                <p className="font-medium text-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.packSize}-seed pack × {item.quantity}
                </p>
              </div>
              <span className="font-mono text-foreground">${item.unitPrice * item.quantity}</span>
            </li>
          ))}
        </ul>
        <div className="mt-3 space-y-2 border-t border-border pt-3 text-sm">
          <div className="flex justify-between text-muted-foreground">
            <span>Subtotal</span>
            <span className="font-mono text-foreground">${subtotal}</span>
          </div>
          <div className="flex justify-between text-muted-foreground">
            <span>Shipping</span>
            <span className="font-mono text-foreground">${SHIPPING_COST}</span>
          </div>
          <div className="flex justify-between border-t border-border pt-2 text-base font-semibold text-foreground">
            <span>Total Due</span>
            <span className="font-mono">${total}</span>
          </div>
        </div>
      </div>

      <button
        onClick={onContinue}
        className="mt-8 w-full rounded-md border border-border bg-card py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
      >
        Back to Collection
      </button>
    </div>
  )
}
