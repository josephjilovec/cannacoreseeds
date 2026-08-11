import Link from 'next/link'
import { StrainRail } from '@/components/StrainRail'
import { StashPreview } from '@/components/StashPreview'
import { CultureSpotlight } from '@/components/CultureSpotlight'
import { HomeHeroCarousel } from '@/components/HomeHeroCarousel'
import { site } from '@/lib/site'

export default function Home(){
  return <main>
    <HomeHeroCarousel/>

    <section className="trust-ribbon" aria-label="CannaCore principles"><div><span>01</span><strong>Documented lineage</strong><small>Context before hype</small></div><div><span>02</span><strong>Small-batch library</strong><small>A focused genetics studio</small></div><div><span>03</span><strong>Editorial record</strong><small>Research through JJ Stash</small></div><div><span>04</span><strong>Direct discovery</strong><small>Browse the collection quickly</small></div></section>

    <section className="quick-discovery section-wrap"><div className="section-heading split"><div><p className="eyebrow">Start with the library</p><h2>Four signals.<br/>Four ways in.</h2></div><p>A stronger seed storefront should help people move from the homepage into the genetics quickly. These collection gateways give CannaCore the browse-first rhythm of a mature retail site without turning the brand into a crowded marketplace.</p></div><div className="discovery-grid"><Link href="/genetics"><img src="/strains/emerald-haze.png" alt="Emerald Haze collection"/><span>Haze / bright profiles</span><strong>Emerald Haze</strong></Link><Link href="/genetics"><img src="/strains/midnight-kush.png" alt="Midnight Kush collection"/><span>Kush / darker profiles</span><strong>Midnight Kush</strong></Link><Link href="/genetics"><img src="/strains/sonora-diesel.png" alt="Sonora Diesel collection"/><span>Diesel / sharp profiles</span><strong>Sonora Diesel</strong></Link><Link href="/genetics"><img src="/strains/frostbite.png" alt="Frostbite collection"/><span>Limited library</span><strong>Frostbite</strong></Link></div></section>

    <section className="section-wrap"><StrainRail/></section>

    <section className="brand-architecture section-wrap"><div className="section-heading split"><div><p className="eyebrow">One ecosystem · two jobs</p><h2>The seed bank<br/>and the notebook.</h2></div><p>CannaCore is the genetics studio. JJ Stash is the editorial record around it. Keeping those roles distinct gives the commercial catalog a focused identity while letting the research, history, and culture become a deeper destination of their own.</p></div><div className="brand-duo"><article><span>01 / Genetics studio</span><h3>CannaCore Seeds</h3><p>Genetic library, breeder releases, collection discovery, pack availability, and the commercial side of the brand.</p><Link href="/genetics">Explore genetics ↗</Link></article><article className="stash-card"><span>02 / Publication</span><h3>JJ Stash</h3><p>Genetics research, plant science, cultivation notes, history, culture, and the public notebook behind the library.</p><a href={site.stashUrl} target="_blank" rel="noreferrer">Read on Beehiiv ↗</a></article></div></section>

    <CultureSpotlight/>
    <StashPreview/>

    <section className="founder-band"><div><p className="eyebrow">The through-line</p><h2>The seed bank and the notebook come from the same obsession: understanding what is actually inside the plant.</h2></div><div><p>JJ Stash is not a second seed company. It is the editorial voice around CannaCore — a place to document selection, biology, cultivar history, preservation, and the culture that made the genetics matter in the first place.</p><Link href="/about" className="text-link">Read the brand story <span>↗</span></Link></div></section>
  </main>
}