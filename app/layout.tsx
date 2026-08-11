import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import { SiteHeader } from '@/components/SiteHeader'
import { SiteFooter } from '@/components/SiteFooter'
import { site } from '@/lib/site'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: { default: 'CannaCore Seeds | Genetics with a paper trail', template: '%s | CannaCore Seeds' },
  description: 'Independent cannabis genetics from CannaCore Seeds, paired with JJ’s Stash — an editorial archive covering genetics, plant science, history, and culture.',
  alternates: { canonical: '/' },
  openGraph: { title:'CannaCore Seeds × JJ’s Stash', description:'Genetics with a paper trail.', url:site.domain, siteName:'CannaCore Seeds', type:'website' },
  robots: { index:true, follow:true }
}
export const viewport: Viewport = { themeColor:'#07100b', colorScheme:'dark' }

export default function RootLayout({children}:{children:React.ReactNode}){
  return <html lang="en"><body><SiteHeader/>{children}<SiteFooter/>{process.env.NODE_ENV==='production'&&<Analytics/>}</body></html>
}
