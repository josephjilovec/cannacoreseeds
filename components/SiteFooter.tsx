import Link from 'next/link'
import { site } from '@/lib/site'
export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid">
      <div><p className="footer-kicker">CannaCore Seeds × JJ’s Stash</p><h2>Genetics with a paper trail.</h2><p className="footer-copy">CannaCore is the genetics studio. JJ’s Stash is the field notebook: breeding, plant science, history, and culture documented in public.</p></div>
      <div><p>Explore</p><Link href="/">Home</Link><Link href="/genetics">Genetics</Link><Link href="/protocols">Grower Protocols</Link><Link href="/about">Culture</Link><Link href="/contact">Contact</Link><Link href="/compliance">Cultivation & Compliance</Link></div>
      <div><p>JJ’s Stash</p><Link href="/about#jj-stash">Publication story</Link><a href={site.stashUrl} target="_blank" rel="noreferrer">Newsletter ↗</a><a href={site.stashArchive} target="_blank" rel="noreferrer">Archive ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} CannaCore Seeds</span><span>JJ’s Stash is the editorial publication of CannaCore Seeds.</span></div>
    <div style={{borderTop:'1px solid rgba(255,255,255,.08)',padding:'1rem clamp(18px,4vw,64px)',fontSize:'.72rem',lineHeight:1.6,color:'rgba(230,238,232,.62)',textAlign:'center'}}><strong style={{color:'#E7C45A'}}>21+ · Lawful jurisdictions only.</strong> Seeds and cultivation materials are intended for lawful personal horticulture, botanical education, and genetic preservation. Check applicable state, local, municipal, and property rules before germination or cultivation. <Link href="/compliance" style={{color:'#E7C45A',fontWeight:700}}>Read the cultivation & jurisdiction notice →</Link></div>
    <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
  </footer>
}
