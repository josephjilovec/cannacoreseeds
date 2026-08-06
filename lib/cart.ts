import type { PackSize } from './strains'

export interface CartItem {
  lineId: string
  strainId: string
  name: string
  lineage: string
  image: string
  packSize: PackSize
  unitPrice: number
  quantity: number
}

export const SHIPPING_COST = 8

export function cartCount(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.quantity, 0)
}

export function cartSubtotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0)
}
