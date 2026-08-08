import type { Metadata } from 'next'
import { GeneticsStore } from '@/components/GeneticsStore'
export const metadata: Metadata = { title:'Genetics', description:'Explore the current CannaCore Seeds genetics collection.' }
export default function GeneticsPage(){return <main><GeneticsStore/></main>}
