'use client'
import Link from 'next/link'
import { useState } from 'react'

export function SiteHeader() {
  const [open,setOpen] = useState(false)
  return <header className="site-header">
    <div className="nav-shell">
      <Link href="/" className="brand-lockup" aria-label="CannaCore Seeds home" onClick={()=>setOpen(false)}>
        <span className="brand-orbit" aria-hidden="true"><i/><b>CC</b></span>
        <span className="brand-copy"><strong>CannaCore Seeds</strong><small>Genetics · Protocols · Culture</small></span>
      </Link>
      <button className="menu-toggle" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/></button>
      <nav className={open ? 'nav-links is-open' : 'nav-links'}>
        <Link href="/" onClick={()=>setOpen(false)}>Home</Link>
        <Link href="/genetics" onClick={()=>setOpen(false)}>Genetics</Link>
        <Link href="/protocols" onClick={()=>setOpen(false)}>Protocols</Link>
        <Link href="/about" onClick={()=>setOpen(false)}>Culture</Link>
        <Link href="/contact" onClick={()=>setOpen(false)}>Contact</Link>
      </nav>
    </div>
  </header>
}
