import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cultivation & Jurisdiction Notice',
  description: 'CannaCore Seeds age, jurisdiction, lawful cultivation, educational-use, and personal horticulture notice.'
}

export default function CompliancePage(){
  return <main className="compliance-page">
    <section className="compliance-hero">
      <p className="eyebrow">21+ · lawful personal horticulture</p>
      <h1>Cultivation &<br/><em>jurisdiction notice.</em></h1>
      <p>CannaCore Seeds and the Grower Protocols are intended for adults age 21 and older who are purchasing, possessing, germinating, or cultivating only where those activities are lawful.</p>
    </section>

    <section className="compliance-shell">
      <div className="notice-grid">
        <article><span>01</span><h2>Know your jurisdiction.</h2><p>Laws governing cannabis seeds, germination, plant counts, cultivation, possession, and transfer vary by location. Check the state, provincial, territorial, municipal, and other rules that apply to you before purchasing seed or beginning a grow.</p></article>
        <article><span>02</span><h2>Keep cultivation secure and private.</h2><p>Where required by law, cultivation should take place in an enclosed or secured area, remain inaccessible to minors, and stay out of public view. Follow any additional security, visibility, plant-count, or residence requirements in your jurisdiction.</p></article>
        <article><span>03</span><h2>Property rules still matter.</h2><p>Home-cultivation laws do not necessarily override leases, rental agreements, property-owner restrictions, homeowners-association rules, building requirements, or other lawful property controls. Check the rules attached to the place where you intend to cultivate.</p></article>
        <article><span>04</span><h2>Botanical education.</h2><p>The Grower Protocols are educational horticultural references for lawful personal cultivation, phenotype observation, genetic preservation, and cultivation-method comparison. They are not a direction to cultivate where cultivation is prohibited.</p></article>
      </div>

      <div className="compliance-callout">
        <div><span>Before germination</span><h2>Check first. Grow only where lawful.</h2></div>
        <p>Confirm your age eligibility, plant-count limits, residence requirements, local ordinances, visibility and security rules, and any property restrictions that apply to you. CannaCore does not provide legal advice and cannot determine whether a particular activity is lawful in your location.</p>
      </div>

      <div className="compliance-actions"><Link className="button button-primary" href="/protocols">Open Grower Protocols</Link><Link className="button button-outline" href="/genetics">Browse genetics</Link></div>
    </section>

    <style>{`
      .compliance-page{background:#07100b;color:var(--text);min-height:70vh}.compliance-hero{max-width:var(--max);margin:auto;padding:130px clamp(24px,5vw,72px) 80px;border-bottom:1px solid var(--line)}.compliance-hero h1{font:400 clamp(58px,7vw,104px)/.9 Georgia,serif;letter-spacing:-.055em;margin:14px 0 28px}.compliance-hero h1 em{color:#eab308;font-weight:400}.compliance-hero>p:not(.eyebrow){max-width:760px;color:#c6d1c8;font-size:18px;line-height:1.75}.compliance-shell{max-width:var(--max);margin:auto;padding:80px clamp(24px,5vw,72px) 110px}.notice-grid{display:grid;grid-template-columns:1fr 1fr;border:1px solid var(--line);border-radius:24px;overflow:hidden}.notice-grid article{padding:38px;min-height:310px;background:linear-gradient(145deg,rgba(20,61,43,.18),rgba(74,62,61,.08))}.notice-grid article:nth-child(even){border-left:1px solid var(--line)}.notice-grid article:nth-child(n+3){border-top:1px solid var(--line)}.notice-grid span{color:#eab308;font:400 24px Georgia,serif}.notice-grid h2{font:400 34px/1.05 Georgia,serif;margin:52px 0 14px}.notice-grid p{color:var(--muted);line-height:1.75;margin:0}.compliance-callout{margin-top:28px;padding:34px;border-left:3px solid #eab308;background:rgba(234,179,8,.055);display:grid;grid-template-columns:.8fr 1.2fr;gap:48px;align-items:center}.compliance-callout span{color:#eab308;font-size:9px;font-weight:800;letter-spacing:.15em;text-transform:uppercase}.compliance-callout h2{font:400 34px/1.05 Georgia,serif;margin:10px 0 0}.compliance-callout p{color:#aebcaf;line-height:1.75;margin:0}.compliance-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:34px}@media(max-width:800px){.compliance-hero{padding-top:95px}.notice-grid{grid-template-columns:1fr}.notice-grid article:nth-child(even){border-left:0}.notice-grid article+article{border-top:1px solid var(--line)}.compliance-callout{grid-template-columns:1fr;gap:20px}}
    `}</style>
  </main>
}
