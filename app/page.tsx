import './home-refresh.css'
import Link from 'next/link'
import { StrainRail } from '@/components/StrainRail'
import { HomeHeroCarousel } from '@/components/HomeHeroCarousel'
import { site } from '@/lib/site'

export default function Home(){
  return <main>
    <HomeHeroCarousel/>

    <section className="trust-ribbon" aria-label="CannaCore principles"><div><span>01</span><strong>Documented lineage</strong><small>Context before hype</small></div><div><span>02</span><strong>Small-batch library</strong><small>A focused genetics studio</small></div><div><span>03</span><strong>Editorial record</strong><small>Research through JJ’s Stash</small></div><div><span>04</span><strong>Direct discovery</strong><small>Browse the collection quickly</small></div></section>

    <section className="section-wrap"><StrainRail/></section>

    <section className="brand-architecture section-wrap">
      <div className="section-heading split">
        <div><p className="eyebrow">One ecosystem · two jobs</p><h2>The seed bank<br/>and the notebook.</h2></div>
        <p>CannaCore is the genetics studio. JJ’s Stash is the editorial record around it. The catalog stays focused on genetics while the research, history, cultivation notes, and culture live inside the broader CannaCore story.</p>
      </div>
      <div className="brand-duo">
        <article><span>01 / Genetics studio</span><h3>CannaCore Seeds</h3><p>Genetic library, breeder releases, collection discovery, pack availability, and the commercial side of the brand.</p><Link href="/genetics">Explore genetics ↗</Link></article>
        <article className="stash-card"><span>02 / Publication</span><h3>JJ’s Stash</h3><p>The public notebook behind the library: genetics research, plant science, cultivation notes, history, and culture.</p><Link href="/about#jj-stash">Explore the story ↗</Link><a href={site.stashUrl} target="_blank" rel="noreferrer">Read the newsletter ↗</a></article>
      </div>
    </section>

    <section className="founder-band"><div><p className="eyebrow">The through-line</p><h2>The genetics and the notebook come from the same obsession: understanding what is actually inside the plant.</h2></div><div><p>CannaCore builds the library. JJ’s Stash documents the thinking around it. The full publication story, selected archive pieces, and culture references now live together on the About page.</p><Link href="/about" className="text-link">Explore CannaCore’s story <span>↗</span></Link></div></section>
  </main>
}
