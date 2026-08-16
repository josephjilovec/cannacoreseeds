import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Grower Protocols',
  description: 'CannaCore cultivation references for coco and hydroponic feeding, soil cultivation, irrigation, canopy management, and phenotype observation.'
}

const GH_FEED_CHARTS = 'https://generalhydroponics.com/pages/feedcharts/feed-charts-hub'
const GH_FLORA_3 = 'https://generalhydroponics.com/pages/flora-series-3-part-feed-program'
const GH_CALIMAGIC = 'https://generalhydroponics.com/products/gh-calimagic'
const FOXFARM_OCEAN_FOREST = 'https://foxfarm.com/product/ocean-forest-potting-soil/'
const FOXFARM_FEEDING = 'https://foxfarm.com/feeding-schedules/'

const cocoSteps = [
  ['01','Start with the water','Know the source-water baseline before changing the feed. Record anything meaningful about treatment, hardness, or filtration.'],
  ['02','Mix in sequence','Add FloraMicro to fresh water first, mix thoroughly, then FloraGro, then FloraBloom. Add CALiMAGic after the base nutrients when it is part of the chosen program. Mix between every addition and adjust pH last.'],
  ['03','Keep coco consistently irrigated','Treat coco as a frequently irrigated medium rather than soil. Fully wet the medium, allow drainage, and adjust frequency to container size, plant size, environment, and observed dryback.'],
  ['04','Automate when useful','Drip irrigation can reduce hand-watering once delivery is calibrated. Verify that emitters apply evenly and revisit timing as plant demand changes.'],
  ['05','Record the response','Track the feed program, irrigation pattern, runoff/root-zone trends, vigor, leaf condition, structure, and any intentional changes.']
]

const soilSteps = [
  ['01','Plant into Ocean Forest','Use FoxFarm Ocean Forest as the ready-to-use container medium. Avoid adding unnecessary fertilizer immediately after transplanting.'],
  ['02','Water, then allow a soil dryback','Water thoroughly and let excess drain. Water again when the upper profile has dried and the container has noticeably lightened rather than maintaining coco-style constant moisture.'],
  ['03','Let the soil carry the early run','Ocean Forest is designed to provide early nutrition on its own. Keep the first weeks simple and judge the plant before adding more inputs.'],
  ['04','Refresh at the transition','For established containers, FoxFarm supports top-dressing with fresh Ocean Forest. Work it gently into the surface and water it in rather than disturbing the root zone.'],
  ['05','Add nutrition deliberately','If additional liquid nutrition or a tea is used, keep it measured and documented. Use the current FoxFarm soil schedule or the product directions as the reference and avoid stacking multiple inputs blindly.'],
  ['06','Watch the plant, not the calendar','Use vigor, color, posture, dryback speed, and flower development to decide whether the soil track needs adjustment.']
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
        <p className="protocol-lede">Two practical cultivation tracks for the genetics library: a coco / hydro approach built around General Hydroponics FloraSeries, and a simpler soil approach built around FoxFarm Ocean Forest, controlled drybacks, and observation.</p>
        <div className="protocol-actions">
          <a href="#coco" className="protocol-button primary">Coco / hydro ↓</a>
          <a href="#soil" className="protocol-button secondary">Soil method ↓</a>
        </div>
      </div>
      <aside className="protocol-signal">
        <span>Protocol stack</span>
        <strong>Choose.<br/>Observe.<br/>Adjust.</strong>
        <p>Pick a medium, follow a repeatable process, and keep enough notes to understand what the plant is telling you.</p>
      </aside>
    </section>

    <section className="protocol-shell protocol-index">
      <div className="protocol-section-heading">
        <p>01 / System overview</p>
        <h2>Two straightforward ways to run the garden.</h2>
        <span>Coco gives the grower more control over the nutrient solution and irrigation frequency. Soil is simpler and more buffered. Both work best when the grower keeps the method consistent long enough to learn it.</span>
      </div>
      <div className="method-grid">
        <article className="method-card coco-card">
          <span>TRACK A</span><h3>Coco + FloraSeries</h3>
          <p>Frequent irrigation, direct control over the nutrient program, and easy access to General Hydroponics’ current feed charts and reservoir calculators.</p>
          <div><b>Best fit</b><small>Growers who want a repeatable liquid-feed system and are comfortable monitoring irrigation and plant response.</small></div>
          <a href="#coco">Open coco / hydro protocol ↓</a>
        </article>
        <article className="method-card soil-card">
          <span>TRACK B</span><h3>FoxFarm soil</h3>
          <p>Ocean Forest straight from the bag, thorough watering followed by soil drybacks, optional later top-dressing, and a lighter-touch feeding approach.</p>
          <div><b>Best fit</b><small>Growers who want a simpler container method with more buffering and less frequent irrigation.</small></div>
          <a href="#soil">Open soil protocol ↓</a>
        </article>
      </div>
      <div className="index-grid">
        <article><b>01</b><small>OVERVIEW</small><h3>Choose a system</h3><p>Coco / hydro or soil. Keep the method internally consistent instead of mixing two different watering philosophies.</p></article>
        <article><b>02</b><small>COCO + HYDRO</small><h3>Nutrient integration</h3><p>FloraSeries, CALiMAGic context, correct mixing sequence, irrigation, and direct access to current GH programs.</p></article>
        <article><b>03</b><small>SOIL</small><h3>Ocean Forest method</h3><p>Ready-to-use soil, soil drybacks, top-dressing, optional additional feeding, and direct FoxFarm references.</p></article>
        <article><b>04</b><small>OBSERVATION</small><h3>Canopy + hunt log</h3><p>Shape the plant consistently and use the same observation categories across every phenotype.</p></article>
      </div>
    </section>

    <section id="coco" className="protocol-band">
      <div className="protocol-shell">
        <div className="protocol-section-heading split">
          <div><p>02 / Coco + hydro protocol</p><h2>FloraSeries, mixed correctly and adjusted by observation.</h2></div>
          <span>Use General Hydroponics’ current feed program for the stage-specific rates and EC / PPM targets. The CannaCore protocol adds the part that often gets skipped: correct mixing sequence, irrigation context, and a consistent record of how the plant responds.</span>
        </div>

        <div className="nutrition-layout">
          <div className="program-card">
            <div className="program-card-top"><span>Foundation system</span><b>GH / FloraSeries</b></div>
            <h3>FloraMicro + FloraGro + FloraBloom</h3>
            <p>Use the current GH program for exact rates. Choose the appropriate feed intensity, use the reservoir calculator, and keep the same reference program long enough to recognize how a cultivar responds.</p>
            <div className="program-tags"><span>Three-part base</span><span>Stage-based</span><span>Live feed chart</span></div>
            <a href={GH_FLORA_3} target="_blank" rel="noreferrer">Open current FloraSeries 3-part program ↗</a>
          </div>
          <div className="program-card accent">
            <div className="program-card-top"><span>Supplement reference</span><b>Ca / Mg</b></div>
            <h3>CALiMAGic</h3>
            <p>CALiMAGic can be useful when the chosen program, water source, or medium calls for additional calcium and magnesium. Use the current GH program and product page rather than treating it as an automatic fixed dose.</p>
            <div className="program-tags"><span>Water dependent</span><span>Medium dependent</span><span>Mix after base</span></div>
            <a href={GH_CALIMAGIC} target="_blank" rel="noreferrer">Open CALiMAGic reference ↗</a>
          </div>
        </div>

        <div className="mix-order">
          <div className="mix-title"><span>Mixing order</span><h3>Never pour the concentrates together.</h3><p>Each component should be diluted into the water and mixed thoroughly before the next one is added.</p></div>
          <ol>
            <li><b>01</b><span><strong>Fresh water</strong><small>Start with the full water volume.</small></span></li>
            <li><b>02</b><span><strong>FloraMicro</strong><small>Add first and mix thoroughly.</small></span></li>
            <li><b>03</b><span><strong>FloraGro</strong><small>Add to the diluted reservoir and mix again.</small></span></li>
            <li><b>04</b><span><strong>FloraBloom</strong><small>Add next and mix thoroughly.</small></span></li>
            <li><b>05</b><span><strong>CALiMAGic / compatible supplements</strong><small>Add only when the selected program calls for them; mix between additions.</small></span></li>
            <li><b>06</b><span><strong>Check EC / PPM, then pH</strong><small>Make final solution adjustments after the nutrient mix is complete.</small></span></li>
          </ol>
        </div>

        <div className="phase-table" role="table" aria-label="Coco and hydro protocol steps">
          <div className="phase-head" role="row"><span>Step</span><span>Practice</span><span>CannaCore note</span></div>
          {cocoSteps.map(([n,title,copy])=><div className="phase-row" role="row" key={n}><b>{n}</b><strong>{title}</strong><p>{copy}</p></div>)}
        </div>

        <div className="irrigation-card">
          <div><span>Optional automation</span><h3>Drip irrigation can make coco much more hands-off.</h3></div>
          <p>Calibrate the system rather than assuming one timer setting works forever. Check that every emitter delivers evenly, watch how quickly the medium dries between events, and adjust timing as the plant and environment change.</p>
          <a href={GH_FEED_CHARTS} target="_blank" rel="noreferrer">Open GH feed-program hub ↗</a>
        </div>
      </div>
    </section>

    <section id="soil" className="soil-section">
      <div className="protocol-shell">
        <div className="protocol-section-heading split">
          <div><p>03 / Soil protocol</p><h2>Ocean Forest, water, dryback, repeat.</h2></div>
          <span>This is the simpler track. Start with a complete bagged soil, avoid turning the first weeks into a complicated nutrient program, and let the watering rhythm be driven by the moisture in the container rather than by a fixed daily schedule.</span>
        </div>

        <div className="soil-feature">
          <div className="soil-mark">FF</div>
          <div><span>Foundation medium</span><h3>FoxFarm Ocean Forest</h3><p>Ocean Forest is designed for container growing and is ready to use directly from the bag. FoxFarm says it can carry the early run on its own before additional feeding is introduced.</p></div>
          <div className="soil-links"><a href={FOXFARM_OCEAN_FOREST} target="_blank" rel="noreferrer">Ocean Forest product guide ↗</a><a href={FOXFARM_FEEDING} target="_blank" rel="noreferrer">FoxFarm soil feeding schedules ↗</a></div>
        </div>

        <div className="soil-table" role="table" aria-label="Soil cultivation protocol steps">
          {soilSteps.map(([n,title,copy])=><div className="soil-row" role="row" key={n}><b>{n}</b><div><strong>{title}</strong><p>{copy}</p></div></div>)}
        </div>

        <div className="soil-callouts">
          <article><span>WATERING</span><h3>Do not water soil like coco.</h3><p>Water thoroughly, allow drainage, then wait for a meaningful dryback before watering again. FoxFarm’s general container guidance uses the upper few inches of dry media as a practical cue.</p></article>
          <article><span>TOP DRESS</span><h3>Refresh the upper soil layer.</h3><p>FoxFarm specifically supports top-dressing established containers with fresh Ocean Forest. This gives the soil track a simple mid-run refresh without replacing the whole medium.</p></article>
          <article><span>OPTIONAL TEA</span><h3>Keep biological inputs simple.</h3><p>If you use a compost or plant-food tea, treat it as an optional supplement rather than an excuse to stack every product at once. Keep the input consistent enough to know whether it actually helped.</p></article>
        </div>
      </div>
    </section>

    <section id="canopy" className="canopy-section">
      <div className="protocol-shell">
        <div className="protocol-section-heading split">
          <div><p>04 / Canopy + observation</p><h2>Shape for access, airflow, and comparison.</h2></div>
          <span>Whichever medium you choose, the canopy should make the plant easier to read. A consistent structure makes phenotype differences more obvious and makes irrigation, inspection, and support easier.</span>
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
        {['Plant ID + lineage','Vigor + structure','Aroma development','Leaf / color response','Internodal character','Irrigation response','Flower morphology','Resin / surface expression','Harvest notes','Keep / revisit / release'].map((item,i)=><div key={item}><b>{String(i+1).padStart(2,'0')}</b><span>{item}</span></div>)}
      </div>
    </section>

    <section className="protocol-disclaimer">
      <div className="protocol-shell disclaimer-inner">
        <span>Reference note</span>
        <p>Use this material only where cultivation is lawful. Follow local rules, product labels, facility SOPs, and manufacturer instructions. Plant response, water chemistry, environment, medium, and equipment can materially change what a crop needs.</p>
      </div>
    </section>

    <style>{`
      .protocol-page{--forest:#143D2B;--earth:#4A3E3D;--amber:#EAB308;--cream:#EEE9DB;--deep:#07100b;background:#07100b;color:var(--text)}
      .protocol-hero{min-height:760px;position:relative;overflow:hidden;display:grid;grid-template-columns:minmax(0,1fr) 300px;align-items:end;padding:110px max(24px,calc((100vw - var(--max))/2 + 64px)) 90px;background:radial-gradient(circle at 72% 30%,rgba(234,179,8,.13),transparent 26%),linear-gradient(135deg,#0a1b12 0%,#143d2b 54%,#0b1610 100%);border-bottom:1px solid rgba(255,255,255,.1)}
      .protocol-grid{position:absolute;inset:0;opacity:.16;background-image:linear-gradient(rgba(255,255,255,.11) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.11) 1px,transparent 1px);background-size:70px 70px;mask-image:linear-gradient(to right,#000 20%,transparent 95%)}
      .protocol-hero-copy,.protocol-signal{position:relative;z-index:2}.protocol-kicker,.protocol-section-heading>p{color:var(--amber);font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase}.protocol-hero h1{font:400 clamp(72px,8vw,126px)/.86 Georgia,serif;letter-spacing:-.06em;margin:16px 0 28px}.protocol-hero h1 em{color:#f0c638;font-weight:400}.protocol-lede{max-width:780px;color:#d3ddd5;font-size:19px;line-height:1.7}.protocol-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:32px}.protocol-button{display:inline-flex;align-items:center;justify-content:center;min-height:50px;padding:0 22px;border-radius:999px;font-size:10px;font-weight:800;letter-spacing:.13em;text-transform:uppercase;border:1px solid rgba(255,255,255,.22)}.protocol-button.primary{background:var(--amber);color:#171507;border-color:var(--amber)}.protocol-button.secondary{background:rgba(255,255,255,.035)}
      .protocol-signal{border-left:1px solid rgba(255,255,255,.16);padding:30px 0 5px 28px}.protocol-signal>span{font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:#d8bd52}.protocol-signal strong{display:block;font:400 36px/1.08 Georgia,serif;margin:20px 0}.protocol-signal p{color:#aebcaf;font-size:12px;line-height:1.7}
      .protocol-shell{max-width:var(--max);margin:auto;padding:105px clamp(18px,4vw,64px)}.protocol-section-heading{max-width:900px;margin-bottom:50px}.protocol-section-heading.split{max-width:none;display:grid;grid-template-columns:1fr .7fr;gap:80px;align-items:end}.protocol-section-heading h2{font:400 clamp(42px,5vw,74px)/.98 Georgia,serif;letter-spacing:-.045em;margin:12px 0 0}.protocol-section-heading>span,.protocol-section-heading.split>span{color:var(--muted);line-height:1.8}
      .method-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px}.method-card{min-height:380px;border:1px solid var(--line);border-radius:26px;padding:38px;display:flex;flex-direction:column}.method-card.coco-card{background:linear-gradient(145deg,rgba(20,61,43,.42),rgba(7,16,11,.45))}.method-card.soil-card{background:linear-gradient(145deg,rgba(74,62,61,.62),rgba(7,16,11,.45))}.method-card>span{color:var(--amber);font-size:9px;letter-spacing:.16em}.method-card h3{font:400 42px/1 Georgia,serif;margin:50px 0 15px}.method-card>p{color:#b6c2b8;line-height:1.75;max-width:600px}.method-card>div{margin-top:auto;border-top:1px solid var(--line);padding-top:20px;display:grid;grid-template-columns:90px 1fr;gap:20px}.method-card>div b{color:#d6bd55;font-size:9px;text-transform:uppercase;letter-spacing:.12em}.method-card>div small{color:var(--muted);font-size:12px;line-height:1.6}.method-card>a{margin-top:22px;color:#f0c638;font-size:10px;font-weight:800;text-transform:uppercase;letter-spacing:.12em}
      .index-grid{display:grid;grid-template-columns:repeat(4,1fr);border:1px solid var(--line);border-radius:26px;overflow:hidden}.index-grid article{padding:34px 28px;min-height:300px;background:linear-gradient(160deg,rgba(20,61,43,.16),transparent)}.index-grid article+article{border-left:1px solid var(--line)}.index-grid b{font:400 28px Georgia,serif;color:var(--amber)}.index-grid small{display:block;color:#9cae9f;letter-spacing:.16em;font-size:8px;margin:38px 0 12px}.index-grid h3{font:400 28px/1.05 Georgia,serif;margin:0 0 16px}.index-grid p{color:var(--muted);font-size:13px;line-height:1.7}
      .protocol-band{background:linear-gradient(180deg,rgba(74,62,61,.34),rgba(20,61,43,.12));border-top:1px solid var(--line);border-bottom:1px solid var(--line)}.nutrition-layout{display:grid;grid-template-columns:1fr 1fr;gap:16px}.program-card{border:1px solid rgba(255,255,255,.13);border-radius:24px;padding:36px;background:rgba(7,16,11,.55)}.program-card.accent{background:linear-gradient(145deg,rgba(74,62,61,.58),rgba(7,16,11,.62))}.program-card-top{display:flex;justify-content:space-between;gap:20px;color:#aab9ad;font-size:9px;text-transform:uppercase;letter-spacing:.14em}.program-card-top b{color:var(--amber)}.program-card h3{font:400 37px/1.08 Georgia,serif;margin:48px 0 16px}.program-card p{color:var(--muted);line-height:1.75}.program-tags{display:flex;gap:7px;flex-wrap:wrap;margin:26px 0}.program-tags span{padding:7px 10px;border:1px solid rgba(234,179,8,.22);border-radius:999px;color:#c7d1c8;font-size:8px;text-transform:uppercase;letter-spacing:.1em}.program-card>a,.irrigation-card>a{color:#f0c638;font-size:10px;font-weight:800;letter-spacing:.12em;text-transform:uppercase}
      .mix-order{margin-top:20px;border:1px solid var(--line);border-radius:24px;padding:34px;background:#0a1510;display:grid;grid-template-columns:.7fr 1.3fr;gap:55px}.mix-title>span{color:var(--amber);font-size:9px;text-transform:uppercase;letter-spacing:.16em}.mix-title h3{font:400 35px/1.05 Georgia,serif;margin:18px 0}.mix-title p{color:var(--muted);line-height:1.7}.mix-order ol{list-style:none;margin:0;padding:0;border-top:1px solid var(--line)}.mix-order li{display:grid;grid-template-columns:40px 1fr;gap:16px;padding:15px 0;border-bottom:1px solid var(--line)}.mix-order li>b{color:var(--amber);font:400 16px Georgia,serif}.mix-order li span{display:grid;grid-template-columns:170px 1fr;gap:14px}.mix-order li strong{font:400 17px Georgia,serif}.mix-order li small{color:var(--muted);line-height:1.5}
      .phase-table{margin-top:28px;border:1px solid var(--line);border-radius:22px;overflow:hidden}.phase-head,.phase-row{display:grid;grid-template-columns:90px 280px 1fr;align-items:center}.phase-head{background:#143d2b;color:#e8eee9;padding:14px 22px;font-size:8px;text-transform:uppercase;letter-spacing:.14em}.phase-row{padding:22px;border-top:1px solid var(--line)}.phase-row b{color:var(--amber);font:400 19px Georgia,serif}.phase-row strong{font:400 20px Georgia,serif}.phase-row p{color:var(--muted);margin:0;line-height:1.65;font-size:13px}.irrigation-card{margin-top:20px;border-left:3px solid var(--amber);padding:28px 30px;background:rgba(234,179,8,.055);display:grid;grid-template-columns:.8fr 1.2fr auto;gap:30px;align-items:center}.irrigation-card span{color:var(--amber);font-size:9px;font-weight:800;letter-spacing:.14em;text-transform:uppercase}.irrigation-card h3{font:400 25px/1.1 Georgia,serif;margin:8px 0 0}.irrigation-card p{margin:0;color:#b0beb2;font-size:13px;line-height:1.7}
      .soil-section{background:linear-gradient(180deg,#211d1c,#312a29 58%,#171715);border-bottom:1px solid rgba(255,255,255,.1)}.soil-feature{display:grid;grid-template-columns:90px 1fr auto;gap:30px;align-items:center;border:1px solid rgba(255,255,255,.14);border-radius:24px;padding:32px;background:rgba(7,10,8,.26)}.soil-mark{width:72px;height:72px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(234,179,8,.35);font:400 24px Georgia,serif;color:var(--amber)}.soil-feature span{font-size:9px;color:#d4b84f;letter-spacing:.14em;text-transform:uppercase}.soil-feature h3{font:400 35px Georgia,serif;margin:6px 0 8px}.soil-feature p{margin:0;color:#c1bab7;line-height:1.7;max-width:720px}.soil-links{display:flex;flex-direction:column;gap:10px}.soil-links a{color:#efc94a;font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.1em}
      .soil-table{margin-top:24px;border-top:1px solid rgba(255,255,255,.14)}.soil-row{display:grid;grid-template-columns:80px 1fr;gap:24px;padding:25px 0;border-bottom:1px solid rgba(255,255,255,.14)}.soil-row>b{color:var(--amber);font:400 21px Georgia,serif}.soil-row strong{font:400 24px Georgia,serif}.soil-row p{max-width:850px;color:#b9b1ae;line-height:1.7;margin:6px 0 0}.soil-callouts{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:26px}.soil-callouts article{border:1px solid rgba(255,255,255,.13);border-radius:20px;padding:28px;background:rgba(8,10,8,.22);min-height:260px}.soil-callouts span{color:var(--amber);font-size:8px;letter-spacing:.15em}.soil-callouts h3{font:400 27px/1.05 Georgia,serif;margin:48px 0 12px}.soil-callouts p{color:#b9b1ae;line-height:1.7;font-size:13px}
      .canopy-section{background:var(--cream);color:#171b18}.canopy-section .protocol-section-heading>p{color:#7f6510}.canopy-section .protocol-section-heading.split>span{color:#5e675f}.canopy-grid{border-top:1px solid rgba(20,61,43,.22)}.canopy-grid article{display:grid;grid-template-columns:80px 1fr;gap:28px;padding:30px 0;border-bottom:1px solid rgba(20,61,43,.22)}.canopy-grid b{color:#8d7219;font:400 23px Georgia,serif}.canopy-grid h3{font:400 32px Georgia,serif;margin:0 0 8px}.canopy-grid p{max-width:760px;color:#5b635d;margin:0;line-height:1.7}
      .log-grid{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--line);border-radius:24px;overflow:hidden}.log-grid>div{padding:24px 20px;min-height:130px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);display:flex;flex-direction:column;justify-content:space-between}.log-grid>div:nth-child(5n){border-right:0}.log-grid>div:nth-child(n+6){border-bottom:0}.log-grid b{font:400 18px Georgia,serif;color:var(--amber)}.log-grid span{font-size:11px;color:#bdc9bf}
      .protocol-disclaimer{border-top:1px solid var(--line);background:#0a120d}.disclaimer-inner{padding-top:35px;padding-bottom:35px;display:grid;grid-template-columns:150px 1fr;gap:28px}.disclaimer-inner span{color:var(--amber);font-size:9px;font-weight:800;text-transform:uppercase;letter-spacing:.14em}.disclaimer-inner p{margin:0;color:#8fa094;font-size:12px;line-height:1.65}
      @media(max-width:1050px){.protocol-hero{grid-template-columns:1fr}.protocol-signal{display:none}.protocol-section-heading.split{grid-template-columns:1fr;gap:28px}.method-grid,.nutrition-layout{grid-template-columns:1fr}.index-grid{grid-template-columns:1fr 1fr}.index-grid article:nth-child(3){border-left:0;border-top:1px solid var(--line)}.index-grid article:nth-child(4){border-top:1px solid var(--line)}.mix-order{grid-template-columns:1fr}.irrigation-card,.soil-feature{grid-template-columns:1fr}.soil-callouts{grid-template-columns:1fr}.log-grid{grid-template-columns:1fr 1fr}.log-grid>div{border-right:1px solid var(--line)!important;border-bottom:1px solid var(--line)!important}.log-grid>div:nth-child(even){border-right:0!important}.log-grid>div:last-child,.log-grid>div:nth-last-child(2){border-bottom:0!important}}
      @media(max-width:760px){.protocol-hero{min-height:680px;padding:85px 22px 65px}.protocol-hero h1{font-size:clamp(58px,18vw,82px)}.protocol-lede{font-size:16px}.protocol-shell{padding-top:78px;padding-bottom:78px}.index-grid,.log-grid{grid-template-columns:1fr}.index-grid article+article,.index-grid article:nth-child(3){border-left:0;border-top:1px solid var(--line)}.method-card{padding:30px}.mix-order{padding:26px;gap:28px}.mix-order li span{grid-template-columns:1fr}.phase-head{display:none}.phase-row{grid-template-columns:45px 1fr}.phase-row p{grid-column:2;margin-top:8px}.soil-feature{padding:26px}.soil-row{grid-template-columns:45px 1fr}.canopy-grid article{grid-template-columns:45px 1fr}.log-grid>div{border-right:0!important;border-bottom:1px solid var(--line)!important}.log-grid>div:last-child{border-bottom:0!important}.disclaimer-inner{grid-template-columns:1fr}}
    `}</style>
  </main>
}
