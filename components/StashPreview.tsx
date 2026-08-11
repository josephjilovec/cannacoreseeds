import { stashArticles } from '@/lib/stash'
import { site } from '@/lib/site'
export function StashPreview(){
  return <section className="stash-preview section-wrap">
    <div className="section-heading split"><div><p className="eyebrow">JJ’s Stash · Editorial layer</p><h2>The research notebook behind the genetics.</h2></div><p>JJ’s Stash lives on Beehiiv so the publication can grow independently. CannaCore brings the strongest genetics, cultivation, and history pieces back into the brand experience.</p></div>
    <div className="article-grid">
      {stashArticles.map((article)=><a className="article-card" href={article.url} target="_blank" rel="noreferrer" key={article.title}>
        <span className="article-index">{article.index}</span><div><p>{article.tag}</p><h3>{article.title}</h3><h4>{article.subtitle}</h4><span>{article.description}</span></div><b>Read on JJ’s Stash ↗</b>
      </a>)}
    </div>
    <div className="archive-band"><div><span>Full publication</span><strong>Every issue stays where it belongs: in the JJ’s Stash archive.</strong></div><a href={site.stashArchive} target="_blank" rel="noreferrer" className="button button-light">Open the archive ↗</a></div>
  </section>
}
