'use client'
import Link from 'next/link'
import { useState } from 'react'
import { STRAINS } from '@/lib/strains'

export function StrainRail(){
  const [active,setActive] = useState(0)
  const strain = STRAINS[active]
  return <div className="strain-rail" style={{'--active-accent':strain.accent} as React.CSSProperties}>
    <div className="strain-display">
      <img src={strain.image} alt={`${strain.name} CannaCore visual`} />
      <div className="strain-display-overlay"><span>{String(active+1).padStart(2,'0')} / {String(STRAINS.length).padStart(2,'0')}</span><h3>{strain.name}</h3><p>{strain.lineage}</p></div>
    </div>
    <div className="strain-selector">
      <p className="eyebrow">The current collection</p>
      <h2>Six genetic worlds.<br/>One house.</h2>
      <div className="strain-buttons">
        {STRAINS.map((item,index)=><button key={item.id} className={index===active?'is-active':''} onClick={()=>setActive(index)}><i style={{background:item.accent}}/><span>{item.name}</span><small>{item.floweringTime}</small></button>)}
      </div>
      <Link href="/genetics" className="text-link">Explore the genetics <span>↗</span></Link>
    </div>
  </div>
}
