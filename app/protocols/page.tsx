import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grower Protocols',
  description: 'CannaCore cultivation references for nutrient-program organization, coco and hydroponic grow-room records, canopy management, and manufacturer feed-chart access.'
}

const GH_FEED_CHARTS = 'https://generalhydroponics.com/pages/feedcharts/feed-charts-hub'
const GH_FLORA_3 = 'https://generalhydroponics.com/pages/feed-program/flora-series-3-part'

const phases = [
  ['01','Propagation / establishment','Root establishment, water-quality baseline, gentle nutrition, first observations.'],
  ['02','Early growth','Build structure and vigor while recording plant response and root-zone trends.'],
  ['03','Late growth','Prepare architecture for transition; verify consistency before increasing demand.'],
  ['04','Transition','Watch stretch, irrigation response, and nutrient balance as morphology changes.'],
  ['05','Flower development','Maintain a stable program, compare expression between plants, and document deviations.'],
  ['06','Late cycle','Taper according to the current manufacturer program and the response of the actual crop.']
]

const canopy = [
  ['Apical control','Use intentional branching strategy to keep height, spacing, and light distribution predictable across the canopy.'],
  ['Horizontal training','Guide branches outward to build an even footprint and make phenotype-to-phenotype comparison easier.'],
  ['Support architecture','Use stakes, trellis, or other support systems when plant structure or floral weight requires it.'],
  ['Selective cleanup','Remove only what interferes with airflow, access, or useful observation; record meaningful structural decisions.']
]

export default function ProtocolsPage(){
  return <main className="protocol-page">
    <section className="protocol-hero">
      <div className="protocol-grid" aria-hidden="true"/>
      <div className="protocol-hero-copy">
        <p className="protocol-kicker">CannaCore field manual · cultivation reference</p>
        <h1>Grower<br/><em>Protocols.</em></h1>
        <p className="protocol-lede">A practical reference layer for the genetics library: nutrient-program organization, coco and hydroponic recordkeeping, canopy architecture, and repeatable observations that make a phenotype hunt more useful.</p>
        <div className="protocol-actions">
          <a href="#nutrition" className="protocol-button primary">Nutrient framework ↓</a>
          <a href="#canopy" className="protocol-button secondary">Canopy guide ↓</a>
        </div>
      </div>
      <aside className="protocol-signal">
        <span>Protocol stack</span>
        <strong>Observe.<br/>Record.<br/>Compare.</strong>
        <p>The guide is organized around repeatability rather than one-size-fits-all recipes.</p>
      </aside>
    </section>

    <section className="protocol-shell protocol-index">
      <div className="protocol-section-heading">
        <p>01 / System overview</p>
        <h2>A cultivation guide built like a lab notebook.</h2>
        <span>The goal is not to turn CannaCore into a generic grow blog. Each section is structured around the decisions and records that help a grower understand how a genetic line actually behaves.</span>
      </div>
      <div className="index-grid">
        <article><b>01</b><small>NUTRITION</small><h3>Feed-program integration</h3><p>FloraSeries references, CALiMAGic context, medium notes, and direct access to the manufacturer’s live schedules.</p></article>
        <article><b>02</b><small>ROOT ZONE</small><h3>Coco / hydro records</h3><p>Track source water, reservoir changes, root-zone observations, runoff trends, and plant response in one consistent format.</p></article>
        <article><b>03</b><small>CANOPY</small><h3>Architecture guide</h3><p>Training concepts are organized by objective so growers can match structure to space, phenotype, and observation goals.</p></article>
        <article><b>04</b><small>HUNT LOG</small><h3>Phenotype notes</h3><p>Use the same observation categories across plants so standout expressions are easier to compare later.</p></article>
      </div>
    </section>

    <section id="nutrition" className="protocol-band">
      <div className="protocol-shell">
        <div className="protocol-section-heading split">
          <div><p>02 / Nutrient program integration</p><h2>Use a current feed program, then document the response.</h2></div>
          <span>CannaCore should not freeze manufacturer dosing into static website copy. General Hydroponics maintains live FloraSeries programs with week-by-week tables, EC/PPM targets, and reservoir calculators, so this guide links to those current references and focuses the CannaCore layer on observation and adaptation.</span>
        </div>

        <div className="nutrition-layout">
          <div className="program-card">
            <div className="program-card-top"><span>Foundation system</span><b>GH / FloraSeries</b></div>
            <h3>FloraMicro + FloraGro + FloraBloom</h3>
            <p>Use the current manufacturer program for exact rates. Treat FloraSeries as the base reference, then record the cultivar’s response rather than assuming every line wants the same intensity.</p>
            <div className="program-tags"><span>Three-part base</span><span>Stage-based</span><span>Manufacturer controlled</span></div>
            <a href={GH_FLORA_3} target="_blank" rel="noreferrer">Open current FloraSeries 3-part program ↗</a>
          </div>
          <div className="program-card accent">
            <div className="program-card-top"><span>Secondary reference</span><b>Ca / Mg</b></div>
            <h3>CALiMAGic + coco context</h3>
            <p>Calcium and magnesium management depends on source water, medium preparation, cultivar demand, and the rest of the nutrient program. Use the product label and current feed chart as the dosing authority.</p>
            <div className="program-tags"><span>Water dependent</span><span>Medium dependent</span><span>Log changes</span></div>
            <a href={GH_FEED_CHARTS} target="_blank" rel="noreferrer">Open General Hydroponics feed-chart hub ↗</a>
          </div>
        </div>

        <div className="phase-table" role="table" aria-label="Cultivation phase framework">
          <div className="phase-head" role="row"><span>Phase</span><span>Stage</span><span>CannaCore observation focus</span></div>
          {phases.map(([n,title,copy])=><div className="phase-row" role="row" key={n}><b>{n}</b><strong>{title}</strong><p>{copy}</p></div>)}
        </div>

        <div className="manufacturer-note">
          <span>Manufacturer authority</span>
          <p>Exact nutrient rates, product compatibility, and current feed schedules should come from the latest product label and manufacturer program. CannaCore’s guide is the observation and recordkeeping layer around that program.</p>
          <a href={GH_FEED_CHARTS} target="_blank" rel="noreferrer">View current GH feed programs ↗</a>
        </div>
      </div>
    </section>

    <section className="protocol-shell root-zone">
      <div className="protocol-section-heading split">
        <div><p>03 / Coco + hydro reference</p><h2>Track the root zone, not just the bottle.</h2></div>
        <span>In inert media, a useful record captures what went in, what came back out, and what the plant looked like at the same time. That creates context for changes instead of turning every symptom into a guess.</span>
      </div>
      <div className="root-grid">
        <article><span>WATER</span><h3>Source baseline</h3><p>Record source-water profile, treatment method, and meaningful changes before interpreting nutrient response.</p></article>
        <article><span>RESERVOIR</span><h3>Mix record</h3><p>Log the program used, batch date, additions, and any intentional deviation from the manufacturer reference.</p></article>
        <article><span>ROOT ZONE</span><h3>Trend record</h3><p>Track root-zone and runoff trends consistently rather than reacting to a single isolated reading.</p></article>
        <article><span>PLANT</span><h3>Response notes</h3><p>Pair numbers with visible response: vigor, color, posture, leaf condition, structure, and rate of development.</p></article>
      </div>
    </section>

    <section id="canopy" className="canopy-section">
      <div className="protocol-shell">
        <div className="protocol-section-heading split">
          <div><p>04 / Canopy architecture</p><h2>Shape for observation, access, and consistency.</h2></div>
          <span>A phenotype hunt is easier to read when the canopy is intentional. The goal is not one rigid training recipe; it is a repeatable structure that makes differences between plants easier to see.</span>
        </div>
        <div className="canopy-grid">{canopy.map(([title,copy],i)=><article key={title}><b>{String(i+1).padStart(2,'0')}</b><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </div>
    </section>

    <section className="protocol-shell hunt-log">
      <div className="protocol-section-heading">
        <p>05 / Phenotype hunt log</p>
        <h2>One scorecard for every plant.</h2>
        <span>Consistency in the notes matters more than volume. Use the same fields throughout the run so final selections can be compared against the same record.</span>
      </div>
      <div className="log-grid">
        {['Plant ID + lineage','Vigor + structure','Aroma development','Leaf / color response','Internodal character','Stress response','Flower morphology','Resin / surface expression','Harvest notes','Keep / revisit / release'].map((item,i)=><div key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span></div>)}
      </div>
    </section>

    <section className="protocol-disclaimer">
      <div className="protocol-shell disclaimer-inner">
        <span>Reference note</span>
        <p>Use this material only where cultivation is lawful. Follow local rules, product labels, facility SOPs, and manufacturer instructions. Cultivar response, water chemistry, environment, medium, and equipment can materially change what a crop needs.</p>
      </div>
    </section>

    <style>{`
      .protocol-page{--forest:#143D2B;--earth:#4A3E3D;--amber:#EAB308;--cream:#EEE9DB;--deep:#07100b;background:#07100b;color:var(--text)}
      .protocol-hero{min-height:760px;position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) 300px;align-items:end;padding:110px max(24px,calc((100vw - var(--max))/2 + 64px)) 90px;background:radial-gradient(circle at 72% 30%,rgba(234,179,8,.13),transparent 26%),linear-gradient(135deg,#0a1b12 0%,#143d2b 54%,#0b1610 100%);border-bottom:1px solid rgba(255,255,255,.1)}
      .protocol-grid{position:absolute;inset:0;opacity:.16;background-image:linear-gradient(rgba(255,255,255,.11) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.11) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to right,#000 20%,transparent 95%)}
      .protocol-hero-copy,.protocol-signal{position:relative;z-index:2}.protocol-kicker,.protocol-section-heading>p{color:var(--amber);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}.protocol-hero h1{font:400 clamp(72px,8vw,126px)/.86 Georgia,serif;letter-spacing:-.06em;margin:16px 0 28px}.protocol-hero h1 em{color:#f0c638;font-weight:400}.protocol-lede{max-width:760px;color:#d3ddd5;font-size:19px;line-height:1.7}.protocol-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:32px}.protocol-button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;border:1px solid rgba(255,255,255,.22)}.protocol-button.primary{background:var(--amber);color:#171507;border-color:var(--amber)}.protocol-button.secondary{background:rgba(255,255,255,.035)}
      .protocol-signal{border-left:1px solid rgba(255,255,255,.16);padding:30px 0 5px 28px}.protocol-signal>span{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#d8bd52}.protocol-signal strong{display:block;font:400 36px/1.08 Georgia,serif;margin:20px 0}.protocol-signal p{color:#aebcaf;font-size:12px;line-height:1.7}
      .protocol-shell{max-width:var(--max);margin:auto;padding:105px clamp(18px,4vw,64px)}.protocol-section-heading{max-width:900px;margin-bottom:50px}.protocol-section-heading.split{max-width:none;display:grid;grid-template-columns:1fr .7fr;gap:80px;align-items:end}.protocol-section-heading h2{font:400 clamp(42px,5vw,74px)/.98 Georgia,serif;letter-spacing:-.045em;margin:12px 0 0}.protocol-section-heading>span,.protocol-section-heading.split>span{color:var(--muted);line-height:1.8}
      .index-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:26px;overflow:hidden}.index-grid article{padding:34px 28px;min-height:300px;background:linear-gradient(160deg,rgba(20,61,43,.16),transparent)}.index-grid article+article{border-left:1px solid var(--line)}.index-grid b{font:400 28px Georgia,serif;color:var(--amber)}.index-grid small{display:block;color:#9cae9f;letter-spacing:.16em;font-size:8px;margin:38px 0 12px}.index-grid h3{font:400 28px/1.05 Georgia,serif;margin:0 0 16px}.index-grid p{color:var(--muted);font-size:13px;line-height:1.7}
      .protocol-band{background:linear-gradient(180deg,rgba(74,62,61,.34),rgba(20,61,43,.12));border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.nutrition-layout{display:grid;grid-template-columns:1fr 1fr;gap:16px}.program-card{border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:36px;background:rgba(7,16,11,.55)}.program-card.accent{background:linear-gradient(145deg,rgba(74,62,61,.58),rgba(7,16,11,.62))}.program-card-top{display:flex;justify-content:space-between;gap:20px;color:#aab9ad;font-size:9px;text-transform:uppercase;letter-spacing:.14em}.program-card-top b{color:var(--amber)}.program-card h3{font:400 37px/1.08 Georgia,serif;margin:48px 0 16px}.program-card p{color:var(--muted);line-height:1.75}.program-tags{display:flex;gap:7px;flex-wrap:wrap;margin:26px 0}.program-tags span{padding:7px 10px;border:1px solid rgba(234,179,8,.22);border-radius:999px;color:#c7d1c8;font-size:8px;text-transform:uppercase;letter-spacing:.1em}.program-card>a,.manufacturer-note>a{color:#f0c638;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
      .phase-table{margin-top:28px;border:1px solid var(--line);border-radius:22px;overflow:hidden}.phase-head,.phase-row{display:grid;grid-template-columns:90px 260px 1fr;align-items:center}.phase-head{background:#143d2b;color:#e8eee9;padding:14px 22px;font-size:8px;text-transform:uppercase;letter-spacing:.14em}.phase-row{padding:22px;border-top:1px solid var(--line)}.phase-row b{color:var(--amber);font:400 19px Georgia,serif}.phase-row strong{font:400 20px Georgia,serif}.phase-row p{color:var(--muted);margin:0;line-height:1.65;font-size:13px}.manufacturer-note{margin-top:20px;border-left:3px solid var(--amber);padding:25px 28px;background:rgba(234,179,8,.055);display:grid;grid-template-columns:160px 1fr auto;gap:25px;align-items:center}.manufacturer-note>span{font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase;color:#e9c84f}.manufacturer-note p{margin:0;color:#b0beb2;font-size:13px;line-height:1.7}
      .root-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.root-grid article{min-height:260px;border:1px solid var(--line);border-radius:20px;padding:28px;background:linear-gradient(145deg,rgba(20,61,43,.15),rgba(74,62,61,.08))}.root-grid span{color:var(--amber);font-size:8px;letter-spacing:.16em}.root-grid h3{font:400 28px Georgia,serif;margin:55px 0 14px}.root-grid p{color:var(--muted);font-size:13px;line-height:1.7}
      .canopy-section{background:var(--cream);color:#171b18}.canopy-section .protocol-section-heading>p{color:#7f6510}.canopy-section .protocol-section-heading.split>span{color:#5e675f}.canopy-grid{border-top:1px solid rgba(20,61,43,.22)}.canopy-grid article{display:grid;grid-template-columns:80px 1fr;gap:28px;padding:30px 0;border-bottom:1px solid rgba(20,61,43,.22)}.canopy-grid b{color:#8d7219;font:400 23px Georgia,serif}.canopy-grid h3{font:400 32px Georgia,serif;margin:0 0 8px}.canopy-grid p{max-width:760px;color:#5b635d;margin:0;line-height:1.7}
      .log-grid{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--line);border-radius:24px;overflow:hidden}.log-grid>div{padding:24px 20px;min-height:130px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between}.log-grid>div:nth-child(5n){border-right:0}.log-grid>div:nth-child(n+6){border-bottom:0}.log-grid b{font:400 18px Georgia,serif;color:var(--amber)}.log-grid span{font-size:11px;color:#bdc9bf}
      .protocol-disclaimer{border-top:1px solid var(--line);background:#0a120d}.disclaimer-inner{padding-top:35px;padding-bottom:35px;display:grid;grid-template-columns:150px 1fr;gap:28px}.disclaimer-inner span{color:var(--amber);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.14em}.disclaimer-inner p{margin:0;color:#8fa094;font-size:12px;line-height:1.65}
      @media(max-width:1050px){.protocol-hero{grid-template-columns:1fr}.protocol-signal{display:none}.protocol-section-heading.split{grid-template-columns:1fr;gap:28px}.index-grid,.root-grid{grid-template-columns:1fr 1fr}.index-grid article:nth-child(3){border-left:0;border-top:1px solid var(--line)}.index-grid article:nth-child(4){border-top:1px solid var(--line)}.nutrition-layout{grid-template-columns:1fr}.manufacturer-note{grid-template-columns:1fr}.log-grid{grid-template-columns:1fr 1fr}.log-grid>div{border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important}.log-grid>div:nth-child(even){border-right:0!important}.log-grid>div:last-child,.log-grid>div:nth-last-child(2){border-bottom:0!important}}
      @media(max-width:760px){.protocol-hero{min-height:680px;padding:85px 22px 65px}.protocol-hero h1{font-size:clamp(58px,18vw,82px)}.protocol-lede{font-size:16px}.protocol-shell{padding-top:78px;padding-bottom:78px}.index-grid,.root-grid,.log-grid{grid-template-columns:1fr}.index-grid article+article,.index-grid article:nth-child(3){border-left:0;border-top:1px solid var(--line)}.root-grid{gap:10px}.phase-head{display:none}.phase-row{grid-template-columns:45px 1fr}.phase-row p{grid-column:2;margin-top:8px}.canopy-grid article{grid-template-columns:45px 1fr}.log-grid>div{border-right:0!important;border-bottom:1px solid var(--line)!important}.log-grid>div:last-child{border-bottom:0!important}.disclaimer-inner{grid-template-columns:1fr}}
    `}</style>
  </main>
}
