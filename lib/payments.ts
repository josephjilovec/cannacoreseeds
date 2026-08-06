export type PaymentMethod = 'cashapp' | 'zelle' | 'crypto'

export interface PaymentConfig {
  id: PaymentMethod
  label: string
  /** The value the buyer sends payment to (tag, email, or wallet). */
  destination: string
  copyLabel: string
  instructions: string
  /** Label for the verification input the buyer must provide. */
  verifyLabel: string
  verifyPlaceholder: string
}

export const PAYMENT_METHODS: PaymentConfig[] = [
  {
    id: 'cashapp',
    label: 'CashApp',
    destination: '$jjdonate',
    copyLabel: 'Copy Tag',
    instructions:
      'Include your Order # in the CashApp note. Orders ship immediately once payment is confirmed.',
    verifyLabel: 'Your CashApp handle',
    verifyPlaceholder: '$yourhandle',
  },
  {
    id: 'zelle',
    label: 'Zelle',
    destination: 'realjjemail@gmail.com',
    copyLabel: 'Copy Zelle Info',
    instructions: 'Send the total amount via Zelle and put your Order # in the memo.',
    verifyLabel: 'Name on your Zelle account',
    verifyPlaceholder: 'Jordan Reyes',
  },
  {
    id: 'crypto',
    label: 'Crypto (BTC/USDT)',
    destination: '0x32975D317Cae8b712898c91BeC1fb73Ec0857Db6',
    copyLabel: 'Copy Address',
    instructions:
      'Send the exact total to the wallet address above. Paste the transaction ID below so we can match your payment.',
    verifyLabel: 'Transaction ID (TXID)',
    verifyPlaceholder: '0x… or transaction hash',
  },
]

export function getPaymentConfig(id: PaymentMethod): PaymentConfig {
  return PAYMENT_METHODS.find((m) => m.id === id) ?? PAYMENT_METHODS[0]
}
