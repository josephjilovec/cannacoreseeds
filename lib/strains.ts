export type PackSize = 3 | 6 | 12

export interface Strain {
  id: string
  name: string
  lineage: string
  floweringTime: string
  description: string
  image: string
}

export interface PackOption {
  size: PackSize
  price: number
  badge?: string
}

// Fixed pricing tiers — every strain shares the same pack pricing.
export const PACK_OPTIONS: PackOption[] = [
  { size: 3, price: 40 },
  { size: 6, price: 65, badge: 'Most Popular' },
  { size: 12, price: 100, badge: 'Breeder Pack' },
]

export const PACK_PRICES: Record<PackSize, number> = { 3: 40, 6: 65, 12: 100 }

export const STARTING_PRICE = PACK_PRICES[3]

export function packPrice(size: PackSize): number {
  return PACK_PRICES[size]
}

export const STRAINS: Strain[] = [
  {
    id: 'emerald-haze',
    name: 'Emerald Haze',
    lineage: 'Green Crack × Amnesia Haze',
    floweringTime: '9–10 weeks',
    description:
      'A soaring sativa-dominant hybrid with a bright citrus-pine nose. Vigorous growth and a heavy resin coat make this a breeder favorite.',
    image: '/strains/emerald-haze.png',
  },
  {
    id: 'midnight-kush',
    name: 'Midnight Kush',
    lineage: 'OG Kush × Purple Punch',
    floweringTime: '8–9 weeks',
    description:
      'Deep indica genetics wrapped in violet hues and a grape-gas aroma. Dense, frosted flowers that finish fast and yield heavy.',
    image: '/strains/midnight-kush.png',
  },
  {
    id: 'sonora-diesel',
    name: 'Sonora Diesel',
    lineage: 'Sour Diesel × Chemdawg',
    floweringTime: '9–11 weeks',
    description:
      'A pungent fuel-forward hybrid with old-school potency. Stretchy, resinous, and relentlessly aromatic from seed to jar.',
    image: '/strains/sonora-diesel.png',
  },
  {
    id: 'frostbite',
    name: 'Frostbite',
    lineage: 'Gelato × Girl Scout Cookies',
    floweringTime: '8–9 weeks',
    description:
      'A dessert cross drenched in trichomes with a creamy, cookie-sweet profile. Compact structure ideal for small tents.',
    image: '/strains/frostbite.png',
  },
  {
    id: 'golden-ticket',
    name: 'Golden Ticket',
    lineage: 'Wedding Cake × Zkittlez',
    floweringTime: '8–10 weeks',
    description:
      'Candied fruit terpenes over a rich vanilla base. Colorful, high-yielding phenos that reward a careful selector.',
    image: '/strains/golden-ticket.png',
  },
  {
    id: 'slate-runtz',
    name: 'Slate Runtz',
    lineage: 'Runtz × Blue Dream',
    floweringTime: '9–10 weeks',
    description:
      'A balanced hybrid with a smooth berry-candy finish and cool grey-blue accents. Forgiving to grow and endlessly aromatic.',
    image: '/strains/slate-runtz.png',
  },
]

export function getStrain(id: string): Strain | undefined {
  return STRAINS.find((s) => s.id === id)
}
