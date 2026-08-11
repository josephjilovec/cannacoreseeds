import type { Metadata } from 'next'
import Link from 'next/link'
import { CultureSpotlight } from '@/components/CultureSpotlight'

export const metadata: Metadata = {
  title: 'About',
  description: 'How CannaCore Seeds and JJ’s Stash fit together.'
}

export default function AboutPage(){
  return <main>
    <section className="about-story-hero">
      <img className="about-story-photo" src="/brand/jj-sidewalk.webp" alt="Breeder holding a flowering cannabis plant outdoors"/>
      <div className="about-story-shade"/>
      <div className="about-story-copy">
        <p className="eyebrow">Our story</p>
        <h1>One breeder.<br/><em>Two expressions.</em></h1>
        <p>CannaCore Seeds is where the genetics live. JJ’s Stash is where the story grows — the science, history, cultivation notes, and culture around the work.</p>
        <Link href="/genetics" className="button button-primary">Explore genetics</Link>
      </div>
    </section>

    <section className="section-wrap principles">
      <article><span>01</span><h2>Purpose driven.</h2><p>Every cross should have a reason behind it. CannaCore focuses on structure, expression, lineage, and a documented selection process rather than novelty for its own sake.</p></article>
      <article><span>02</span><h2>Genetics first.</h2><p>The commercial side of the brand stays focused on the library itself: the lines, release context, availability, and direct breeder relationship.</p></article>
      <article><span>03</span><h2>The story stays attached.</h2><p>JJ’s Stash gives the work a public notebook — a place for deeper genetics context, cultivation insight, plant science, history, and the culture around each release.</p></article>
    </section>

    <CultureSpotlight/>

    <section className="founder-band">
      <div><p className="eyebrow">CannaCore × JJ’s Stash</p><h2>The genetics and the notebook come from the same obsession: understanding what is actually inside the plant.</h2></div>
      <div><p>CannaCore is the genetics house. JJ’s Stash is the editorial layer around it. One builds the library; the other documents the thinking, research, and stories that make the library worth following.</p><Link href="/stash" className="text-link">Enter JJ’s Stash <span>↗</span></Link></div>
    </section>

    <style>{`
      .about-story-hero{position:relative;min-height:760px;display:flex;align-items:center;overflow:hidden;border-bottom:1px solid var(--line);background:#07100b}
      .about-story-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;filter:saturate(.82) brightness(.74) contrast(1.04)}
      .about-story-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,6,.94) 0%,rgba(3,10,6,.8) 37%,rgba(3,10,6,.46) 64%,rgba(3,10,6,.22) 100%),linear-gradient(0deg,rgba(4,12,7,.42),rgba(4,12,7,.08))}
      .about-story-copy{position:relative;z-index:2;width:min(760px,calc(100% - 40px));margin-left:max(24px,calc((100vw - var(--max))/2 + 64px));padding:110px 0;color:white}
      .about-story-copy h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(64px,8vw,122px);line-height:.9;letter-spacing:-.055em;margin:0}
      .about-story-copy h1 em{color:var(--green2);font-weight:400}
      .about-story-copy>p:not(.eyebrow){max-width:610px;font-size:18px;line-height:1.75;color:#d5ded7;margin:30px 0 34px}
      @media(max-width:800px){.about-story-hero{min-height:720px}.about-story-photo{object-position:63% center}.about-story-shade{background:linear-gradient(90deg,rgba(3,10,6,.95),rgba(3,10,6,.72) 65%,rgba(3,10,6,.46))}.about-story-copy{margin-left:24px;padding:90px 0;width:calc(100% - 48px)}.about-story-copy h1{font-size:64px}}
    `}</style>
  </main>
}
