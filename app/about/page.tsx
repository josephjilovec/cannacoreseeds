import type { Metadata } from 'next'
import { CultureSpotlight } from '@/components/CultureSpotlight'
import { stashArticles } from '@/lib/stash'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Culture',
  description: 'JJ’s Stash, CannaCore’s point of view on genetics, and the cannabis culture around the collection.'
}

const ABOUT_IMAGES = {
  hero: 'https://images.pexels.com/photos/10427313/pexels-photo-10427313.jpeg?auto=compress&cs=tinysrgb&w=1800',
  selection: 'https://images.pexels.com/photos/6129873/pexels-photo-6129873.jpeg?auto=compress&cs=tinysrgb&w=1100',
  trichomes: 'https://images.pexels.com/photos/30682036/pexels-photo-30682036.jpeg?auto=compress&cs=tinysrgb&w=1100',
  notebook: 'https://images.pexels.com/photos/18945566/pexels-photo-18945566.jpeg?auto=compress&cs=tinysrgb&w=1100'
} as const

export default function AboutPage(){
  return <main>
    <section id="jj-stash" className="about-stash-hero" aria-label="JJ’s Stash publication introduction">
      <img className="about-story-photo" src={ABOUT_IMAGES.hero} alt="Breeder inspecting a cannabis plant outdoors"/>
      <div className="about-story-shade"/>
      <div className="about-stash-copy">
        <p className="eyebrow">JJ’s Stash · A CannaCore publication</p>
        <h1>The secret stash,<br/><em>made public.</em></h1>
        <p>JJ’s Stash is where I write about the things around cannabis that are worth paying attention to — genetics, plant biology, cultivar history, selection, memorable flower, and the culture that built the community long before CannaCore existed.</p>
        <div className="hero-actions">
          <a className="button button-primary" href={site.stashArchive} target="_blank" rel="noreferrer">Read JJ’s Stash ↗</a>
          <a className="button button-outline" href={site.stashUrl} target="_blank" rel="noreferrer">Sign up for free ↗</a>
        </div>
      </div>
    </section>

    <section className="section-wrap editorial-ledger about-archive-ledger">
      <div className="section-heading split">
        <div><p className="eyebrow">Selected from the archive</p><h2>Science, selection,<br/>history, culture.</h2></div>
        <p>The archive is a running notebook rather than a brand manual. Some pieces go deep into plant science, some look backward at cannabis history, and others are simply about the strains, people, and ideas that make the culture interesting.</p>
      </div>
      {stashArticles.map(article=><a className="ledger-row" href={article.url} target="_blank" rel="noreferrer" key={article.title}>
        <span>{article.index}</span>
        <div><small>{article.tag}</small><h3>{article.title}</h3><p>{article.subtitle}</p></div>
        <b>Open article ↗</b>
      </a>)}
    </section>

    <section className="section-wrap principles about-principles">
      <article>
        <div className="principle-image"><img src={ABOUT_IMAGES.selection} alt="Organized selection vials used for careful seed and specimen sorting"/></div>
        <span>01</span><h2>Good taste comes first.</h2><p>CannaCore starts with a simple point of view: I know what I like. Aroma, flavor, structure, character, and the overall quality of the flower matter more to me than chasing whatever happens to be fashionable that month. People have trusted my taste in cannabis for years, and that same standard guides what earns a place in the CannaCore collection.</p>
      </article>
      <article>
        <div className="principle-image"><img src={ABOUT_IMAGES.trichomes} alt="Macro view of a frost-covered cannabis flower and its trichomes"/></div>
        <span>02</span><h2>Genetics worth keeping.</h2><p>I’m interested in genetics with an identity — lines that have something memorable about them and a reason to keep paying attention. CannaCore is intentionally selective. The goal isn’t to fill a catalog with hundreds of names. It’s to build a tighter collection around genetics I genuinely find interesting.</p>
      </article>
      <article>
        <div className="principle-image"><img src={ABOUT_IMAGES.notebook} alt="Vintage field notebook and pen viewed from above"/></div>
        <span>03</span><h2>The notebook stays open.</h2><p>I came to cannabis through the culture itself, before legal markets made it look like an ordinary retail category. I’ve watched that culture change, and I still think the community, history, growers, breeders, conversations, and shared knowledge matter. JJ’s Stash is where I write about the grows, the strains, the science, and the culture as I see it.</p>
      </article>
    </section>

    <CultureSpotlight/>

    <style>{`
      .about-stash-hero{position:relative;min-height:clamp(650px,78vh,880px);display:flex;align-items:center;overflow:hidden;border-bottom:1px solid var(--line);background:#07100b;scroll-margin-top:90px}
      .about-story-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 50%;filter:saturate(.78) brightness(.58) contrast(1.08)}
      .about-story-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,6,.94) 0%,rgba(3,10,6,.78) 36%,rgba(3,10,6,.38) 66%,rgba(3,10,6,.18) 100%),linear-gradient(0deg,rgba(4,12,7,.48),rgba(4,12,7,.06))}
      .about-stash-copy{position:relative;z-index:2;width:min(760px,calc(100% - 48px));margin-left:max(24px,calc((100vw - var(--max))/2 + 64px));padding:116px 0 104px;color:white}
      .about-stash-copy h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(62px,8vw,118px);line-height:.9;letter-spacing:-.055em;margin:0}
      .about-stash-copy h1 em{color:var(--green2);font-weight:400}
      .about-stash-copy>p:not(.eyebrow){max-width:620px;font-size:18px;line-height:1.75;color:#d5ded7;margin:30px 0 34px}
      .about-archive-ledger{padding-top:96px;padding-bottom:112px}
      .about-principles{gap:0}
      .about-principles article{padding-top:32px}
      .principle-image{position:relative;aspect-ratio:4/3;margin:0 0 34px;border:1px solid rgba(181,240,140,.16);border-radius:20px;overflow:hidden;background:linear-gradient(145deg,#0a120d,#101b13);box-shadow:0 20px 50px rgba(0,0,0,.18),inset 0 1px rgba(255,255,255,.025)}
      .principle-image:after{content:"";position:absolute;inset:0;pointer-events:none;background:linear-gradient(to top,rgba(4,12,7,.28),transparent 52%);box-shadow:inset 0 0 0 1px rgba(255,255,255,.018)}
      .principle-image img{width:100%;height:100%;object-fit:cover;filter:saturate(.72) contrast(1.05) brightness(.78);transition:transform .5s ease,filter .5s ease}
      .about-principles article:hover .principle-image img{transform:scale(1.025);filter:saturate(.88) contrast(1.06) brightness(.86)}
      .about-principles article>span{display:block;margin-top:0}
      .about-principles article h2{margin-top:38px}
      @media(max-width:900px){.principle-image{aspect-ratio:16/10;margin-bottom:26px}.about-principles article h2{margin-top:28px}.about-archive-ledger{padding-top:72px;padding-bottom:88px}}
      @media(max-width:800px){.about-stash-hero{min-height:700px}.about-story-photo{object-position:62% center}.about-story-shade{background:linear-gradient(90deg,rgba(3,10,6,.94),rgba(3,10,6,.72) 68%,rgba(3,10,6,.38))}.about-stash-copy{margin-left:24px;padding:90px 0;width:calc(100% - 48px)}.about-stash-copy h1{font-size:clamp(54px,16vw,72px)}}
    `}</style>
  </main>
}
