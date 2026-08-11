import type { Metadata } from 'next'
import { CultureSpotlight } from '@/components/CultureSpotlight'
import { site } from '@/lib/site'

export const metadata: Metadata = { title:'JJ’s Stash', description:'The editorial publication of CannaCore Seeds: genetics, plant science, cultivation, history, and culture.' }

export default function StashPage(){return <main>
  <CultureSpotlight/>
  <section className="author-panel section-wrap"><div className="author-visual stash-grow-photo"><img src="https://klghayqvmrglvysbcqob.supabase.co/storage/v1/object/public/blog-images/post-121.webp" alt="Cultivation journal beside cannabis plants"/><span>Field notes / cultivation record</span></div><div><p className="eyebrow">About the publication</p><h2>Written from inside the grow.</h2><p>JJ’s Stash describes itself as a repository for cannabis genetics, breeding history, cultivation insight, and plant culture. That makes it a natural editorial layer for CannaCore rather than a competing brand.</p><a className="text-link" href={site.stashAuthors} target="_blank" rel="noreferrer">Read the Beehiiv author page <span>↗</span></a></div></section>
  <style>{`.stash-grow-photo{position:relative;display:block!important;overflow:hidden;padding:0;background:#0b1710}.stash-grow-photo img{width:100%;height:100%;min-height:500px;object-fit:cover;filter:saturate(.82) contrast(1.05)}.stash-grow-photo:after{content:'';position:absolute;inset:0;background:linear-gradient(to top,rgba(5,12,7,.78),transparent 45%);pointer-events:none}.stash-grow-photo span{position:absolute;z-index:2;left:24px;bottom:20px;font-size:9px;letter-spacing:.16em;text-transform:uppercase;color:#d7e0d8}`}</style>
</main>}
