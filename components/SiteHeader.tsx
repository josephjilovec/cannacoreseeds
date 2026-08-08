'use client'
import Link from 'next/link'
import { useState } from 'react'
import { site } from '@/lib/site'

export function SiteHeader() {
  const [open,setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="brand-lockup" aria-label="CannaCore Seeds home">
        <span className="brand-orbit" aria-hidden="true"><i/><b>CC</b></span>
        <span className="brand-copy"><strong>CannaCore Seeds</strong><small>Genetics · Archive · Culture</small></span>
      </Link>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        <Link href="/genetics" onClick={()=>setOpen(false)}>Genetics</Link>
        <Link href="/stash" onClick={()=>setOpen(false)}>JJ Stash</Link>
        <Link href="/about" onClick={()=>setOpen(false)}>About</Link>
        <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
        <a className="nav-stash" href={site.stashUrl} target="_blank" rel="noreferrer">Read the newsletter ↗</a>
      </nav>
    </div>
  </header>
}
