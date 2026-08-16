import Link from 'next/link'

export default function ProtocolsLayout({children}:{children:React.ReactNode}){
  return <>
    <aside className="protocol-lawful-notice" aria-label="Cultivation jurisdiction notice">
      <div>
        <strong>21+ · Lawful cultivation only</strong>
        <span>CannaCore Grower Protocols are botanical education and phenotype-preservation references for adults in jurisdictions where personal cultivation is lawful. Check applicable state, local, municipal, and property rules before germination or cultivation.</span>
        <Link href="/compliance">Cultivation & jurisdiction notice ↗</Link>
      </div>
    </aside>
    {children}
    <style>{`
      .protocol-lawful-notice{background:#111812;border-bottom:1px solid rgba(234,179,8,.22);color:#d7dfd8}.protocol-lawful-notice>div{max-width:var(--max);margin:auto;padding:13px clamp(18px,4vw,64px);display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:22px}.protocol-lawful-notice strong{color:#eab308;font-size:9px;letter-spacing:.13em;text-transform:uppercase;white-space:nowrap}.protocol-lawful-notice span{font-size:10px;line-height:1.55;color:#aebcaf}.protocol-lawful-notice a{font-size:9px;font-weight:800;letter-spacing:.1em;text-transform:uppercase;color:#e7c45a;white-space:nowrap}@media(max-width:900px){.protocol-lawful-notice>div{grid-template-columns:1fr;gap:7px;padding-top:15px;padding-bottom:15px}.protocol-lawful-notice strong,.protocol-lawful-notice a{white-space:normal}}
    `}</style>
  </>
}
