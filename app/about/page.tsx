import type { Metadata } from 'next'
import Link from 'next/link'
import { CultureSpotlight } from '@/components/CultureSpotlight'

export const metadata: Metadata = {
  title: 'About',
  description: 'How CannaCore Seeds and JJ’s Stash fit together.'
}

function PotOfNugsGraphic(){
  return <div className="pot-nugs-card" aria-label="CannaCore pot of premium cannabis nugs illustration">
    <div className="pot-nugs-orbit"/>
    <svg className="pot-nugs-art" viewBox="0 0 760 430" role="img" aria-hidden="true">
      <defs>
        <linearGradient id="potBody" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#17231b"/>
          <stop offset=".5" stopColor="#090d0a"/>
          <stop offset="1" stopColor="#1b231d"/>
        </linearGradient>
        <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#8f7134"/>
          <stop offset=".5" stopColor="#e0c272"/>
          <stop offset="1" stopColor="#80612d"/>
        </linearGradient>
        <radialGradient id="budGreen" cx="40%" cy="30%" r="70%">
          <stop offset="0" stopColor="#bdf19c"/>
          <stop offset=".38" stopColor="#6ea961"/>
          <stop offset="1" stopColor="#203b27"/>
        </radialGradient>
        <radialGradient id="budPurple" cx="40%" cy="35%" r="70%">
          <stop offset="0" stopColor="#d0b5e4"/>
          <stop offset=".42" stopColor="#6d5a85"/>
          <stop offset="1" stopColor="#29332c"/>
        </radialGradient>
        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <ellipse cx="380" cy="382" rx="235" ry="22" fill="rgba(0,0,0,.34)"/>
      <circle cx="380" cy="186" r="150" fill="none" stroke="rgba(119,226,143,.11)" strokeWidth="1"/>
      <circle cx="380" cy="186" r="122" fill="none" stroke="rgba(213,184,108,.13)" strokeWidth="1" strokeDasharray="6 10"/>

      <g opacity=".92">
        <path d="M230 136c-37-41-73-56-108-44 32 8 56 28 72 58-32-21-60-25-84-12 33 6 62 22 88 49" fill="none" stroke="#4e7e55" strokeWidth="10" strokeLinecap="round"/>
        <path d="M530 136c37-41 73-56 108-44-32 8-56 28-72 58 32-21 60-25 84-12-33 6-62 22-88 49" fill="none" stroke="#4e7e55" strokeWidth="10" strokeLinecap="round"/>
      </g>

      <g filter="url(#softGlow)">
        {[
          [278,128,46,'green'],[332,105,52,'purple'],[386,120,58,'green'],[442,98,48,'green'],[489,132,43,'purple'],
          [305,170,52,'green'],[365,162,60,'green'],[428,160,54,'purple'],[472,177,42,'green']
        ].map(([x,y,r,t],i)=><g key={i} transform={`translate(${x} ${y})`}>
          <circle r={r as number} fill={t==='purple'?'url(#budPurple)':'url(#budGreen)'}/>
          <circle r={(r as number)*.72} fill="none" stroke="rgba(235,245,221,.5)" strokeWidth="3" strokeDasharray="3 6"/>
          <circle cx={-(r as number)*.18} cy={-(r as number)*.17} r={(r as number)*.12} fill="#e5f2d6" opacity=".6"/>
          <circle cx={(r as number)*.2} cy={(r as number)*.09} r={(r as number)*.09} fill="#d7c177" opacity=".55"/>
        </g>)}
      </g>

      <path d="M244 218h272l-18 108c-6 35-38 61-75 61h-86c-37 0-69-26-75-61z" fill="url(#potBody)" stroke="#334139" strokeWidth="2"/>
      <rect x="232" y="206" width="296" height="34" rx="17" fill="#0a0e0b" stroke="url(#brass)" strokeWidth="4"/>
      <path d="M232 252c-36-4-61 11-69 43 13 29 41 42 74 34" fill="none" stroke="url(#brass)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M528 252c36-4 61 11 69 43-13 29-41 42-74 34" fill="none" stroke="url(#brass)" strokeWidth="8" strokeLinecap="round"/>

      <circle cx="380" cy="298" r="58" fill="#0c120e" stroke="url(#brass)" strokeWidth="3"/>
      <circle cx="380" cy="298" r="45" fill="none" stroke="rgba(213,184,108,.38)"/>
      <path d="M380 270c-10 18-14 33-13 48m13-48c10 18 14 33 13 48m-13-29c-17-10-30-13-40-8m40 8c17-10 30-13 40-8m-40 8c-8 10-12 21-12 33m12-33c8 10 12 21 12 33" fill="none" stroke="#9fd57f" strokeWidth="3" strokeLinecap="round"/>
      <text x="380" y="349" textAnchor="middle" fill="#d5b86c" fontSize="12" fontFamily="Arial, sans-serif" letterSpacing="4">CANNACORE</text>
    </svg>
    <div className="pot-nugs-caption"><span>THE STASH</span><strong>Worth more than gold.</strong></div>
  </div>
}

export default function AboutPage(){
  return <main>
    <section className="about-story-hero">
      <img className="about-story-photo" src="/brand/jj-sidewalk.webp" alt="Breeder holding a flowering cannabis plant outdoors"/>
      <div className="about-story-shade"/>
      <div className="about-story-copy">
        <p className="eyebrow">Our story</p>
        <h1>One breeder.<br/><em>Two expressions.</em></h1>
        <p>CannaCore Seeds is where the genetics live. JJ’s Stash is where the story grows — the science, history, cultivation notes, and culture around the work.</p>
        <Link href="/genetics" className="button button-primary">Explore genetics</Link>
      </div>
    </section>

    <section className="section-wrap principles">
      <article><span>01</span><h2>Purpose driven.</h2><p>Every cross should have a reason behind it. CannaCore focuses on structure, expression, lineage, and a documented selection process rather than novelty for its own sake.</p></article>
      <article><span>02</span><h2>Genetics first.</h2><p>The commercial side of the brand stays focused on the library itself: the lines, release context, availability, and direct breeder relationship.</p></article>
      <article><span>03</span><h2>The story stays attached.</h2><p>JJ’s Stash gives the work a public notebook — a place for deeper genetics context, cultivation insight, plant science, history, and the culture around each release.</p></article>
    </section>

    <CultureSpotlight/>

    <section className="founder-band founder-band-with-art">
      <div className="founder-band-main">
        <PotOfNugsGraphic/>
        <p className="eyebrow">CannaCore × JJ’s Stash</p>
        <h2>The genetics and the notebook come from the same obsession: understanding what is actually inside the plant.</h2>
      </div>
      <div><p>CannaCore is the genetics house. JJ’s Stash is the editorial layer around it. One builds the library; the other documents the thinking, research, and stories that make the library worth following.</p><Link href="/stash" className="text-link">Enter JJ’s Stash <span>↗</span></Link></div>
    </section>

    <style>{`
      .about-story-hero{position:relative;min-height:760px;display:flex;align-items:center;overflow:hidden;border-bottom:1px solid var(--line);background:#07100b}
      .about-story-photo{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 42%;filter:saturate(.82) brightness(.74) contrast(1.04)}
      .about-story-shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(3,10,6,.94) 0%,rgba(3,10,6,.8) 37%,rgba(3,10,6,.46) 64%,rgba(3,10,6,.22) 100%),linear-gradient(0deg,rgba(4,12,7,.42),rgba(4,12,7,.08))}
      .about-story-copy{position:relative;z-index:2;width:min(760px,calc(100% - 40px));margin-left:max(24px,calc((100vw - var(--max))/2 + 64px));padding:110px 0;color:white}
      .about-story-copy h1{font-family:Georgia,'Times New Roman',serif;font-weight:400;font-size:clamp(64px,8vw,122px);line-height:.9;letter-spacing:-.055em;margin:0}
      .about-story-copy h1 em{color:var(--green2);font-weight:400}
      .about-story-copy>p:not(.eyebrow){max-width:610px;font-size:18px;line-height:1.75;color:#d5ded7;margin:30px 0 34px}
      .founder-band-with-art{align-items:end}.founder-band-main{min-width:0}.pot-nugs-card{position:relative;min-height:330px;margin:0 0 48px;border:1px solid rgba(213,184,108,.22);border-radius:28px;overflow:hidden;background:radial-gradient(circle at 50% 30%,rgba(119,226,143,.09),transparent 35%),linear-gradient(145deg,#0a120d,#101b13 62%,#09100c);box-shadow:inset 0 1px rgba(255,255,255,.025)}
      .pot-nugs-card:before{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.025) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.025) 1px,transparent 1px);background-size:34px 34px;mask-image:linear-gradient(to bottom,#000,transparent 85%)}
      .pot-nugs-orbit{position:absolute;width:230px;height:230px;border:1px dashed rgba(181,240,140,.14);border-radius:50%;left:50%;top:44%;transform:translate(-50%,-50%)}
      .pot-nugs-orbit:before,.pot-nugs-orbit:after{content:"";position:absolute;border-radius:50%;border:1px solid rgba(213,184,108,.1)}.pot-nugs-orbit:before{inset:28px}.pot-nugs-orbit:after{inset:-30px}
      .pot-nugs-art{position:relative;z-index:2;width:100%;height:auto;display:block;max-height:320px;margin:auto}.pot-nugs-caption{position:absolute;z-index:3;left:28px;bottom:24px;display:flex;flex-direction:column;gap:4px}.pot-nugs-caption span{font-size:8px;letter-spacing:.2em;color:var(--gold);font-weight:700}.pot-nugs-caption strong{font-family:Georgia,serif;font-size:21px;font-weight:400;color:#edf3ec}
      @media(max-width:800px){.about-story-hero{min-height:720px}.about-story-photo{object-position:63% center}.about-story-shade{background:linear-gradient(90deg,rgba(3,10,6,.95),rgba(3,10,6,.72) 65%,rgba(3,10,6,.46))}.about-story-copy{margin-left:24px;padding:90px 0;width:calc(100% - 48px)}.about-story-copy h1{font-size:64px}.pot-nugs-card{min-height:280px;margin-bottom:34px}.pot-nugs-art{max-height:270px}.pot-nugs-caption{left:20px;bottom:18px}.pot-nugs-caption strong{font-size:18px}}
    `}</style>
  </main>
}
