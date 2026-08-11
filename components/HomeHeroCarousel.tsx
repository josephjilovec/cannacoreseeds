'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  {image:'/strains/emerald-haze.png', eyebrow:'CannaCore Seeds × JJ Stash', title:'Genetics with', emphasis:'a paper trail.', copy:'A genetics studio built around documented lineage, deliberate selection, and a public notebook that explains what sits behind every release.', primary:'/genetics', primaryLabel:'Explore genetics', secondary:'/stash', secondaryLabel:'Enter JJ Stash', label:'Emerald Haze', detail:'Green Crack × Amnesia Haze'},
  {image:'/strains/midnight-kush.png', eyebrow:'THE MASTER MEDALLION SERIES', title:'Small-batch lines.', emphasis:'Distinct identities.', copy:'Move through the current CannaCore library as a collection rather than a wall of products. Each release gets its own visual world, lineage, and record.', primary:'/genetics', primaryLabel:'Browse the collection', secondary:'/about', secondaryLabel:'Our approach', label:'Midnight Kush', detail:'Collection signal / 02'},
  {image:'/strains/sonora-diesel.png', eyebrow:'GENETICS STUDIO', title:'Selection before', emphasis:'spectacle.', copy:'The storefront should make discovery fast while the deeper pages carry the context: lineage, release notes, documentation, and the story behind the library.', primary:'/genetics', primaryLabel:'Find a line', secondary:'/stash', secondaryLabel:'Read the archive', label:'Sonora Diesel', detail:'Collection signal / 03'},
  {image:'/strains/frostbite.png', eyebrow:'JJ STASH / EDITORIAL', title:'The catalog has', emphasis:'a notebook.', copy:'Research, cultivar history, plant science, preservation, and culture live beside the commercial genetics instead of being buried in a generic blog.', primary:'/stash', primaryLabel:'Open JJ Stash', secondary:'/genetics', secondaryLabel:'View genetics', label:'Frostbite', detail:'Collection signal / 04'}
]

export function HomeHeroCarousel(){
  const [active,setActive]=useState(0)
  useEffect(()=>{const id=window.setInterval(()=>setActive(v=>(v+1)%slides.length),5500);return()=>window.clearInterval(id)},[])
  const s=slides[active]
  return <section className="campaign-hero" aria-roledescription="carousel">
    <div className="campaign-slides" aria-live="polite">{slides.map((slide,i)=><div key={slide.label} className={`campaign-slide ${i===active?'is-active':''}`} aria-hidden={i!==active}><img src={slide.image} alt=""/><div className="campaign-shade"/></div>)}</div>
    <div className="campaign-copy"><p className="eyebrow">{s.eyebrow}</p><h1>{s.title}<br/><em>{s.emphasis}</em></h1><p>{s.copy}</p><div className="hero-actions"><Link className="button button-primary" href={s.primary}>{s.primaryLabel}</Link><Link className="button button-outline" href={s.secondary}>{s.secondaryLabel}</Link></div></div>
    <div className="campaign-caption"><span>Featured signal</span><strong>{s.label}</strong><small>{s.detail}</small></div>
    <div className="campaign-controls">{slides.map((slide,i)=><button key={slide.label} onClick={()=>setActive(i)} className={i===active?'is-active':''} aria-label={`Show ${slide.label}`}><span>{String(i+1).padStart(2,'0')}</span><i/></button>)}</div>
  </section>
}
