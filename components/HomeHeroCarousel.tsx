'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

const slides = [
  {image:'https://images.pexels.com/photos/5810703/pexels-photo-5810703.jpeg?auto=compress&cs=tinysrgb&w=2200', eyebrow:'CannaCore Seeds × JJ Stash', title:'Genetics with', emphasis:'a paper trail.', copy:'A genetics studio built around documented lineage, deliberate selection, and a public notebook that explains what sits behind every release.', primary:'/genetics', primaryLabel:'Explore genetics', secondary:'/stash', secondaryLabel:'Enter JJ Stash', label:'Cultivation / greenhouse', detail:'Controlled environment'},
  {image:'https://images.pexels.com/photos/35873797/pexels-photo-35873797.jpeg?auto=compress&cs=tinysrgb&w=2200', eyebrow:'THE CULTIVATION ROOM', title:'Built through', emphasis:'observation.', copy:'CannaCore treats genetics as an ongoing selection process shaped by structure, vigor, expression, and the record behind each line.', primary:'/genetics', primaryLabel:'Browse genetics', secondary:'/about', secondaryLabel:'Our approach', label:'Cultivation / canopy', detail:'Vegetative development'},
  {image:'https://images.pexels.com/photos/36339968/pexels-photo-36339968.jpeg?auto=compress&cs=tinysrgb&w=2200', eyebrow:'GENETICS STUDIO', title:'Selection before', emphasis:'spectacle.', copy:'The storefront is built for quick discovery while the deeper pages carry lineage, release notes, documentation, and the story behind the library.', primary:'/genetics', primaryLabel:'Find a line', secondary:'/stash', secondaryLabel:'Read the archive', label:'Cultivation / flower', detail:'Expression under light'},
  {image:'https://images.pexels.com/photos/35873805/pexels-photo-35873805.jpeg?auto=compress&cs=tinysrgb&w=2200', eyebrow:'JJ STASH / EDITORIAL', title:'The catalog has', emphasis:'a notebook.', copy:'Research, cultivar history, plant science, preservation, and culture live beside the commercial genetics instead of being buried in a generic blog.', primary:'/stash', primaryLabel:'Open JJ Stash', secondary:'/genetics', secondaryLabel:'View genetics', label:'Cultivation / late cycle', detail:'Documented finish'}
]

export function HomeHeroCarousel(){
  const [active,setActive]=useState(0)
  useEffect(()=>{const id=window.setInterval(()=>setActive(v=>(v+1)%slides.length),5500);return()=>window.clearInterval(id)},[])
  const s=slides[active]
  return <section className="campaign-hero" aria-roledescription="carousel">
    <div className="campaign-slides" aria-live="polite">{slides.map((slide,i)=><div key={slide.label} className={`campaign-slide ${i===active?'is-active':''}`} aria-hidden={i!==active}><img src={slide.image} alt=""/><div className="campaign-shade"/></div>)}</div>
    <div className="campaign-copy"><p className="eyebrow">{s.eyebrow}</p><h1>{s.title}<br/><em>{s.emphasis}</em></h1><p>{s.copy}</p><div className="hero-actions"><Link className="button button-primary" href={s.primary}>{s.primaryLabel}</Link><Link className="button button-outline" href={s.secondary}>{s.secondaryLabel}</Link></div></div>
    <div className="campaign-caption"><span>Grow-room signal</span><strong>{s.label}</strong><small>{s.detail}</small></div>
    <div className="campaign-controls">{slides.map((slide,i)=><button key={slide.label} onClick={()=>setActive(i)} className={i===active?'is-active':''} aria-label={`Show ${slide.label}`}><span>{String(i+1).padStart(2,'0')}</span><i/></button>)}</div>
  </section>
}
