import Link from 'next/link'
import { site } from '@/lib/site'
export function SiteFooter(){
  return <footer className="site-footer">
    <div className="footer-grid">
      <div><p className="footer-kicker">CannaCore Seeds × JJ’s Stash</p><h2>Genetics with a paper trail.</h2><p className="footer-copy">CannaCore is the genetics studio. JJ’s Stash is the field notebook: breeding, plant science, history, and culture documented in public.</p></div>
      <div><p>Explore</p><Link href="/">Home</Link><Link href="/genetics">Genetics</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
      <div><p>JJ’s Stash</p><Link href="/about#jj-stash">Publication story</Link><a href={site.stashUrl} target="_blank" rel="noreferrer">Newsletter ↗</a><a href={site.stashArchive} target="_blank" rel="noreferrer">Archive ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} CannaCore Seeds</span><span>JJ’s Stash is the editorial publication of CannaCore Seeds.</span></div>
    <div className="jj-venture-nav" style={{borderTop:'1px solid rgba(255,255,255,.10)',padding:'1rem 1.25rem 1.15rem',textAlign:'center',fontSize:'.78rem',letterSpacing:'.045em'}}><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:700}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{color:'#E7C45A',margin:'0 .65rem',opacity:.7}}>•</span><a href="https://www.josephjilovec.com/ventures" style={{color:'#E7C45A',textDecoration:'none',fontWeight:800}}>Explore the Venture Studio →</a></div>
  </footer>
}
