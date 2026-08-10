import Link from 'next/link'
import { site } from '@/lib/site'
export function SiteFooter(){
  return <footer className="site-footer">
<div className="jj-venture-nav" style={{margin:'0 auto 1.5rem',padding:'1rem 0',textAlign:'center',fontSize:'.78rem',letterSpacing:'.04em',opacity:.78}}><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none'}}>A Joseph Jilovec Venture</a><span aria-hidden="true" style={{margin:'0 .6rem'}}>·</span><a href="https://www.josephjilovec.com/ventures" style={{color:'inherit',textDecoration:'none',fontWeight:600}}>Explore the Venture Studio →</a></div>

    <div className="footer-grid">
      <div><p className="footer-kicker">CannaCore Seeds × JJ Stash</p><h2>Genetics with a paper trail.</h2><p className="footer-copy">CannaCore is the genetics studio. JJ Stash is the field notebook: breeding, plant science, history, and culture documented in public.</p></div>
      <div><p>Explore</p><Link href="/genetics">Genetics</Link><Link href="/stash">JJ Stash</Link><Link href="/about">Brand story</Link><Link href="/contact">Contact</Link></div>
      <div><p>JJ Stash</p><a href={site.stashUrl} target="_blank" rel="noreferrer">Newsletter ↗</a><a href={site.stashArchive} target="_blank" rel="noreferrer">Archive ↗</a><a href={site.stashAuthors} target="_blank" rel="noreferrer">About the author ↗</a></div>
    </div>
    <div className="footer-bottom"><span>© {new Date().getFullYear()} CannaCore Seeds</span><span>JJ Stash is the editorial publication of CannaCore Seeds.</span></div>
  </footer>
}
