import { NextResponse } from 'next/server'

interface OrderLine {
  name: string
  packSize: number
  quantity: number
  unitPrice: number
}

interface OrderPayload {
  orderNumber: string
  customer: {
    name: string
    email: string
    address: string
    city: string
    state: string
    zip: string
  }
  payment: {
    method: string
    reference: string
  }
  items: OrderLine[]
  subtotal: number
  shipping: number
  total: number
}

/**
 * Order submission endpoint.
 *
 * This is stubbed for a real email provider. To go live, install `resend`
 * (or `nodemailer`), set the relevant env vars, and replace the logged
 * section below with the real send calls. Two emails are intended:
 *   1. A receipt to the customer (customer.email)
 *   2. An internal alert to the breeder with the manual-payment reference
 *      so payments can be matched and the order can be shipped.
 */
export async function POST(request: Request) {
  let payload: OrderPayload

  try {
    payload = (await request.json()) as OrderPayload
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400 })
  }

  const { orderNumber, customer, payment, items, total } = payload

  if (!orderNumber || !customer?.email || !payment?.method || !items?.length) {
    return NextResponse.json({ ok: false, error: 'Missing required fields' }, { status: 400 })
  }

  // --- Email integration goes here -----------------------------------------
  //
  // Example with Resend (after `pnpm add resend` and setting RESEND_API_KEY):
  //
  //   import { Resend } from 'resend'
  //   const resend = new Resend(process.env.RESEND_API_KEY)
  //   await resend.emails.send({
  //     from: 'orders@rootstockgenetics.co',
  //     to: customer.email,
  //     subject: `Order ${orderNumber} received`,
  //     text: buildReceipt(payload),
  //   })
  //   await resend.emails.send({
  //     from: 'orders@rootstockgenetics.co',
  //     to: 'breeder@rootstockgenetics.co',
  //     subject: `New order ${orderNumber} — ${payment.method}`,
  //     text: buildInternalAlert(payload),
  //   })
  //
  // --------------------------------------------------------------------------

  console.log('[v0] Order received:', {
    orderNumber,
    email: customer.email,
    method: payment.method,
    reference: payment.reference,
    total,
  })

  return NextResponse.json({ ok: true, orderNumber })
}
