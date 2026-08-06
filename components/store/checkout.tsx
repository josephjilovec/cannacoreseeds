'use client'

import { useState } from 'react'
import { ArrowLeft, Check, Copy, ShieldCheck, Trash2 } from 'lucide-react'
import { cartSubtotal, SHIPPING_COST, type CartItem } from '@/lib/cart'
import { PAYMENT_METHODS, getPaymentConfig, type PaymentMethod } from '@/lib/payments'

export interface CustomerInfo {
  name: string
  email: string
  address: string
  city: string
  state: string
  zip: string
}

export interface PaymentInfo {
  method: PaymentMethod
  reference: string
}

interface CheckoutProps {
  items: CartItem[]
  onBack: () => void
  onRemove: (lineId: string) => void
  onComplete: (customer: CustomerInfo, payment: PaymentInfo) => void
}

const FIELD =
  'w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-1 focus:ring-ring'

export function Checkout({ items, onBack, onRemove, onComplete }: CheckoutProps) {
  const [form, setForm] = useState<CustomerInfo>({
    name: '',
    email: '',
    address: '',
    city: '',
    state: '',
    zip: '',
  })
  const [method, setMethod] = useState<PaymentMethod>('cashapp')
  const [reference, setReference] = useState('')
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const config = getPaymentConfig(method)
  const subtotal = cartSubtotal(items)
  const shipping = items.length > 0 ? SHIPPING_COST : 0
  const total = subtotal + shipping

  function update(key: keyof CustomerInfo, value: string) {
    setForm((f) => ({ ...f, [key]: value }))
  }

  function selectMethod(next: PaymentMethod) {
    setMethod(next)
    setReference('')
    setCopied(false)
  }

  async function copyDestination() {
    try {
      await navigator.clipboard.writeText(config.destination)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      setCopied(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    // Fire-and-forget email stub; UI advances regardless of provider status.
    try {
      await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderNumber: 'pending',
          customer: form,
          payment: { method, reference },
          items: items.map((i) => ({
            name: i.name,
            packSize: i.packSize,
            quantity: i.quantity,
            unitPrice: i.unitPrice,
          })),
          subtotal,
          shipping,
          total,
        }),
      })
    } catch {
      // Non-blocking in the demo; the order still completes locally.
    }
    setSubmitting(false)
    onComplete(form, { method, reference })
  }

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <h1 className="text-2xl font-semibold text-foreground">Your cart is empty</h1>
        <p className="mt-2 text-muted-foreground">Add a strain to get started.</p>
        <button
          onClick={onBack}
          className="mt-6 inline-flex items-center gap-1.5 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
        >
          Browse strains
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 sm:py-12">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Continue shopping
      </button>

      <h1 className="mb-8 text-3xl font-semibold tracking-tight text-foreground">Checkout</h1>

      <form onSubmit={handleSubmit} className="grid gap-8 lg:grid-cols-[1fr_360px]">
        {/* Left: forms */}
        <div className="space-y-8">
          {/* Shipping */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
                1
              </span>
              Shipping Information
            </h2>
            <div className="grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  className={FIELD}
                  placeholder="Full name"
                  required
                  value={form.name}
                  onChange={(e) => update('name', e.target.value)}
                />
                <input
                  className={FIELD}
                  type="email"
                  placeholder="Email address"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
              </div>
              <input
                className={FIELD}
                placeholder="Street address"
                required
                value={form.address}
                onChange={(e) => update('address', e.target.value)}
              />
              <div className="grid gap-3 sm:grid-cols-[1fr_120px_120px]">
                <input
                  className={FIELD}
                  placeholder="City"
                  required
                  value={form.city}
                  onChange={(e) => update('city', e.target.value)}
                />
                <input
                  className={FIELD}
                  placeholder="State"
                  required
                  value={form.state}
                  onChange={(e) => update('state', e.target.value)}
                />
                <input
                  className={FIELD}
                  placeholder="ZIP"
                  required
                  inputMode="numeric"
                  value={form.zip}
                  onChange={(e) => update('zip', e.target.value)}
                />
              </div>
            </div>
          </section>

          {/* Payment */}
          <section>
            <h2 className="mb-4 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
              <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-xs text-primary-foreground">
                2
              </span>
              Manual Payment
            </h2>

            {/* Tabs */}
            <div
              role="tablist"
              aria-label="Payment method"
              className="grid grid-cols-3 gap-1 rounded-md border border-border bg-card p-1"
            >
              {PAYMENT_METHODS.map((m) => {
                const active = m.id === method
                return (
                  <button
                    key={m.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => selectMethod(m.id)}
                    className={`rounded px-2 py-2 text-xs font-medium transition-colors sm:text-sm ${
                      active
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {m.label}
                  </button>
                )
              })}
            </div>

            {/* Active method panel */}
            <div className="mt-3 rounded-lg border border-border bg-card p-4">
              <div className="flex items-center gap-4">
                {method === 'crypto' && (
                  <div
                    aria-hidden
                    className="grid h-20 w-20 shrink-0 place-items-center rounded-md border border-border bg-background p-2"
                  >
                    <div
                      className="h-full w-full opacity-80"
                      style={{
                        backgroundImage:
                          'repeating-conic-gradient(var(--color-foreground) 0% 25%, transparent 0% 50%)',
                        backgroundSize: '10px 10px',
                      }}
                    />
                  </div>
                )}
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                    {method === 'crypto' ? 'Wallet Address' : 'Send Payment To'}
                  </p>
                  <p className="mt-1 break-all font-mono text-sm text-foreground">
                    {config.destination}
                  </p>
                  <button
                    type="button"
                    onClick={copyDestination}
                    className="mt-2 inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
                  >
                    {copied ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-primary" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        {config.copyLabel}
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="mt-3 rounded-md bg-secondary/60 p-3 text-xs leading-relaxed text-muted-foreground">
                {config.instructions}
              </p>

              {/* Verification */}
              <div className="mt-4">
                <label
                  htmlFor="payment-reference"
                  className="mb-1.5 block text-xs font-medium text-foreground"
                >
                  {config.verifyLabel}
                </label>
                <input
                  id="payment-reference"
                  className={FIELD}
                  placeholder={config.verifyPlaceholder}
                  required
                  value={reference}
                  onChange={(e) => setReference(e.target.value)}
                />
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  We use this to match your payment to your order.
                </p>
              </div>
            </div>
          </section>

          {/* Legal badge */}
          <div className="flex items-start gap-3 rounded-lg border border-border bg-card/50 p-4">
            <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            <p className="text-xs leading-relaxed text-muted-foreground">
              Seeds sold strictly as novelty souvenir genetic preservation items. By completing this
              order you confirm compliance with the laws of your jurisdiction.
            </p>
          </div>
        </div>

        {/* Right: order summary */}
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-5">
            <h2 className="mb-4 text-sm font-semibold uppercase tracking-wider text-foreground">
              Order Summary
            </h2>
            <ul className="divide-y divide-border">
              {items.map((item) => (
                <li key={item.lineId} className="flex gap-3 py-3">
                  <img
                    src={item.image || '/placeholder.svg'}
                    alt={item.name}
                    className="h-14 w-14 shrink-0 rounded-md object-cover"
                  />
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="truncate text-sm font-medium text-foreground">
                      {item.name}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {item.packSize}-seed pack × {item.quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => onRemove(item.lineId)}
                      className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-destructive"
                    >
                      <Trash2 className="h-3 w-3" />
                      Remove
                    </button>
                  </div>
                  <span className="font-mono text-sm text-foreground">
                    ${item.unitPrice * item.quantity}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between text-muted-foreground">
                <span>Subtotal</span>
                <span className="font-mono text-foreground">${subtotal}</span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Discreet shipping</span>
                <span className="font-mono text-foreground">${shipping}</span>
              </div>
              <div className="flex justify-between border-t border-border pt-2 text-base font-semibold text-foreground">
                <span>Total</span>
                <span className="font-mono">${total}</span>
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-5 w-full rounded-md bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? 'Placing Order…' : 'Complete Order'}
            </button>
            <p className="mt-2 text-center text-[11px] text-muted-foreground">
              Ships as soon as your payment is confirmed.
            </p>
          </div>
        </aside>
      </form>
    </div>
  )
}
