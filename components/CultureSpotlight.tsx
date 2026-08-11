export function CultureSpotlight(){
  const media = [
    { name:'HIGH TIMES', note:'Cannabis culture since 1974', href:'https://hightimes.com/', icon:'https://www.google.com/s2/favicons?domain=hightimes.com&sz=128' },
    { name:'LEAFLY', note:'Strains · education · discovery', href:'https://www.leafly.com/', icon:'https://www.google.com/s2/favicons?domain=leafly.com&sz=128' },
    { name:'WEEDMAPS', note:'Legal-market discovery', href:'https://weedmaps.com/', icon:'https://www.google.com/s2/favicons?domain=weedmaps.com&sz=128' },
    { name:'MJBIZDAILY', note:'Cannabis business journalism', href:'https://mjbizdaily.com/', icon:'https://www.google.com/s2/favicons?domain=mjbizdaily.com&sz=128' },
    { name:'STRAIN SHOW PATREON', note:'Bonus videos · community · support', href:'https://www.patreon.com/cw/StrainShow', icon:'https://www.google.com/s2/favicons?domain=patreon.com&sz=128' }
  ]
  return <section className="culture-spotlight section-wrap" aria-labelledby="culture-title">
    <div className="culture-feature">
      <div className="culture-feature-art">
        <img src="https://realdgc.com/wp-content/uploads/2026/07/RealDGC-versions2-rqbe6rc7vkdwxba2actyypsf0byi7q07z32h5v5eag.jpg" alt="Real DGC" />
      </div>
      <div className="culture-feature-copy">
        <p className="eyebrow">Community spotlight</p>
        <h2 id="culture-title">Real DGC</h2>
        <strong>Official home of the Dude Grows Crew.</strong>
        <p>Real DGC is a grower-focused community built around profiles, groups, cultivation conversation, exclusive content, contests, and a place for growers to share their work without relying entirely on mainstream social platforms.</p>
        <a className="button button-primary" href="https://realdgc.com/" target="_blank" rel="noreferrer">Visit Real DGC ↗</a>
      </div>
    </div>
    <div className="culture-ledger">
      <div className="culture-ledger-head"><div><p className="eyebrow">Culture · media · community</p><h3>Worth knowing.</h3></div><p>Independent outbound links to cannabis publications, grower communities, education platforms, and industry resources. Inclusion does not imply sponsorship, endorsement, or affiliation.</p></div>
      <div className="culture-links">
        {media.map(item=><a href={item.href} target="_blank" rel="noreferrer" key={item.name}><img src={item.icon} alt=""/><div><strong>{item.name}</strong><span>{item.note}</span></div><b>↗</b></a>)}
      </div>
    </div>
    <style>{`
      .culture-spotlight{padding-top:28px;padding-bottom:110px}.culture-feature{display:grid;grid-template-columns:minmax(320px,.76fr) minmax(0,1.24fr);min-height:420px;border:1px solid var(--line);border-radius:30px;overflow:hidden;background:linear-gradient(135deg,#0b1710,#101d15)}.culture-feature-art{position:relative;min-height:420px;background:#080d09}.culture-feature-art img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}.culture-feature-art:after{content:"";position:absolute;inset:0;background:linear-gradient(90deg,transparent 55%,rgba(7,16,11,.76)),linear-gradient(0deg,rgba(7,16,11,.35),transparent 50%)}.culture-feature-copy{padding:58px clamp(30px,5vw,74px);align-self:center}.culture-feature-copy h2{font-family:Georgia,serif;font-size:clamp(52px,6vw,88px);font-weight:400;letter-spacing:-.05em;line-height:.95;margin:0 0 14px}.culture-feature-copy>strong{display:block;color:var(--gold);font-size:11px;text-transform:uppercase;letter-spacing:.14em}.culture-feature-copy>p:not(.eyebrow){max-width:700px;color:var(--muted);line-height:1.8;margin:22px 0 30px}.culture-ledger{margin-top:14px;border:1px solid var(--line);border-radius:24px;overflow:hidden}.culture-ledger-head{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:end;padding:34px 38px;border-bottom:1px solid var(--line)}.culture-ledger-head .eyebrow{margin-bottom:8px}.culture-ledger-head h3{font-family:Georgia,serif;font-size:36px;font-weight:400;margin:0}.culture-ledger-head>p{margin:0;color:var(--muted);font-size:12px;line-height:1.7;max-width:720px}.culture-links{display:grid;grid-template-columns:repeat(5,1fr)}.culture-links a{min-height:132px;padding:24px;display:grid;grid-template-columns:42px 1fr auto;gap:14px;align-items:center;border-right:1px solid var(--line);transition:.2s ease}.culture-links a:last-child{border-right:0}.culture-links a:hover{background:rgba(119,226,143,.045)}.culture-links img{width:36px;height:36px;border-radius:9px;background:#fff;padding:5px;object-fit:contain}.culture-links strong{display:block;font-family:Georgia,serif;font-size:19px;font-weight:400}.culture-links span{display:block;margin-top:5px;color:var(--muted);font-size:9px;letter-spacing:.05em;text-transform:uppercase;line-height:1.45}.culture-links b{color:var(--green);font-weight:400}.culture-feature .button{width:max-content}@media(max-width:1100px){.culture-links{grid-template-columns:1fr 1fr}.culture-links a{border-right:1px solid var(--line);border-bottom:1px solid var(--line)}.culture-links a:nth-child(2n){border-right:0}.culture-links a:last-child{border-bottom:0}}@media(max-width:900px){.culture-feature{grid-template-columns:1fr}.culture-feature-art{min-height:330px}.culture-feature-copy{padding:42px 28px}.culture-ledger-head{grid-template-columns:1fr;gap:12px}}@media(max-width:560px){.culture-links{grid-template-columns:1fr}.culture-links a{border-right:0!important;border-bottom:1px solid var(--line)!important}.culture-links a:last-child{border-bottom:0!important}.culture-feature-art{min-height:260px}}
    `}</style>
  </section>
}