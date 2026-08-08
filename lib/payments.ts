export type PaymentMethod = 'cashapp' | 'zelle' | 'crypto'
export interface PaymentConfig { id:PaymentMethod; label:string; destination:string; copyLabel:string; instructions:string; verifyLabel:string; verifyPlaceholder:string }
export const PAYMENT_METHODS: PaymentConfig[] = [
  { id:'cashapp', label:'CashApp', destination:'$jjdonate', copyLabel:'Copy tag', instructions:'Include your order number in the CashApp note.', verifyLabel:'Your CashApp handle', verifyPlaceholder:'$yourhandle' },
  { id:'zelle', label:'Zelle', destination:'realjjemail@gmail.com', copyLabel:'Copy Zelle info', instructions:'Send the total via Zelle and put your order number in the memo.', verifyLabel:'Name on your Zelle account', verifyPlaceholder:'Name on account' },
  { id:'crypto', label:'Crypto', destination:'0x32975D317Cae8b712898c91BeC1fb73Ec0857Db6', copyLabel:'Copy address', instructions:'Send the exact total and provide the transaction ID so the order can be matched.', verifyLabel:'Transaction ID', verifyPlaceholder:'Transaction hash' }
]
export const getPaymentConfig = (id: PaymentMethod) => PAYMENT_METHODS.find((method)=>method.id===id) ?? PAYMENT_METHODS[0]
