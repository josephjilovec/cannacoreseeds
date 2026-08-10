import Link from 'next/link'
import { StrainRail } from '@/components/StrainRail'
import { StashPreview } from '@/components/StashPreview'
import { CultureSpotlight } from '@/components/CultureSpotlight'
import { site } from '@/lib/site'

export default function Home(){
  return <main>
    <section className="home-hero">
      <div className="hero-grid-lines" aria-hidden="true"/>
      <div className="hero-copy"><p className="eyebrow">CannaCore Seeds × JJ Stash</p><h1>Genetics with<br/><em>a paper trail.</em></h1><p>CannaCore builds and curates the genetic library. JJ Stash documents the science, history, selection, and culture around it.</p><div className="hero-actions"><Link className="button button-primary" href="/genetics">Explore genetics</Link><Link className="button button-outline" href="/stash">Enter JJ Stash</Link></div></div>
      <div className="hero-art"><img src="/strains/emerald-haze.png" alt="Emerald Haze by CannaCore Seeds"/><div className="hero-art-label"><span>Current signal</span><strong>Emerald Haze</strong><small>Green Crack × Amnesia Haze</small></div></div>
      <div className="hero-side-note"><span>01</span><p>Genetics studio</p><strong>Small-batch lines, direct breeder context.</strong><span>02</span><p>Editorial archive</p><strong>JJ Stash turns the research and history into public record.</strong></div>
    </section>

    <section className="brand-architecture section-wrap"><div className="section-heading split"><div><p className="eyebrow">One ecosystem · two jobs</p><h2>Keep the names.<br/>Clarify the roles.</h2></div><p>CannaCore should stay the commercial genetics brand you already own. JJ Stash becomes the media identity that can grow beyond products without forcing you to abandon the CannaCore domain.</p></div><div className="brand-duo"><article><span>01 / Company</span><h3>CannaCore Seeds</h3><p>Genetics, strain library, breeder releases, pack availability, customer relationship.</p><Link href="/genetics">Open the genetics studio ↗</Link></article><article className="stash-card"><span>02 / Publication</span><h3>JJ Stash</h3><p>Genetics research, plant science, cultivation notes, history, culture, and the voice behind the brand.</p><a href={site.stashUrl} target="_blank" rel="noreferrer">Read on Beehiiv ↗</a></article></div></section>

    <section className="section-wrap"><StrainRail/></section>
    <CultureSpotlight/>
    <StashPreview/>

    <section className="founder-band"><div><p className="eyebrow">The through-line</p><h2>The seed bank and the notebook come from the same obsession: understanding what is actually inside the plant.</h2></div><div><p>JJ Stash is not a second seed company. It is the editorial voice around CannaCore — a place to document selection, biology, cultivar history, preservation, and the culture that made the genetics matter in the first place.</p><Link href="/about" className="text-link">Read the brand story <span>↗</span></Link></div></section>
  </main>
}