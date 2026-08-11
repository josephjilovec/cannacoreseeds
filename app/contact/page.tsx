'use client'

import { useEffect, useState } from 'react'

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    if (params.get('sent') === '1') {
      setSent(true)
      window.history.replaceState({}, '', window.location.pathname)
    }
  }, [])

  return (
    <main>
      <section className="page-hero compact contact-grow-hero">
        <div className="contact-grow-shade"/>
        <div className="contact-mailbox" aria-hidden="true"><span/><i/></div>
        <div className="contact-grow-copy">
          <p className="eyebrow">Direct line</p>
          <h1>Talk to<br/><em>the breeder.</em></h1>
          <p>Questions about genetics, an order, a collaboration, or something you read in JJ’s Stash.</p>
        </div>
      </section>

      <section className="contact-shell section-wrap">
        <form action="https://formsubmit.co/realjjemail@gmail.com" method="POST">
          <input type="hidden" name="_subject" value="CannaCore Seeds website inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://cannacoreseeds.com/contact?sent=1" />
          <input type="hidden" name="_url" value="https://cannacoreseeds.com/contact" />
          <input type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ display: 'none' }} />

          <div className="field-grid">
            <label>Name<input name="name" required/></label>
            <label>Email<input name="email" type="email" required/></label>
          </div>

          <label>Topic
            <select name="topic" defaultValue="Genetics question">
              <option>Genetics question</option>
              <option>Order question</option>
              <option>JJ’s Stash / editorial</option>
              <option>Collaboration</option>
              <option>Other</option>
            </select>
          </label>

          <label>Message<textarea name="message" rows={7} required/></label>
          <button className="button button-primary" type="submit">Send message</button>
          {sent && <p className="inline-status" role="status">Message sent. Thanks — we’ll be in touch.</p>}
        </form>

        <aside>
          <p className="eyebrow">Elsewhere</p>
          <h2>JJ’s Stash lives on Beehiiv.</h2>
          <a href="https://jjstash.beehiiv.com/" target="_blank" rel="noreferrer">Newsletter ↗</a>
          <a href="https://jjstash.beehiiv.com/archive" target="_blank" rel="noreferrer">Archive ↗</a>
          <a href="https://jjstash.beehiiv.com/authors" target="_blank" rel="noreferrer">Author page ↗</a>
        </aside>
      </section>

      <style jsx>{`
        .contact-grow-hero{position:relative;isolation:isolate;overflow:hidden;max-width:none;padding-left:max(clamp(18px,4vw,64px),calc((100vw - 1440px)/2 + 64px));background:#07100b url('https://static.wixstatic.com/media/3452ad_cde9928f071c4ed18b037aca2c1b8bb6~mv2.jpg/v1/fill/w_1920,h_1080,al_c,q_88/3452ad_cde9928f071c4ed18b037aca2c1b8bb6~mv2.jpg') center 54%/cover no-repeat;min-height:610px}
        .contact-grow-shade{position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,rgba(4,10,6,.94) 0%,rgba(4,10,6,.72) 42%,rgba(4,10,6,.24) 72%,rgba(4,10,6,.5) 100%),linear-gradient(0deg,rgba(7,16,11,.72),transparent 55%)}
        .contact-grow-copy{position:relative;z-index:2;max-width:760px}.contact-grow-copy>p:last-child{max-width:650px;color:#d0d9d1;font-size:18px;line-height:1.75;margin:30px 0}
        .contact-mailbox{position:absolute;right:9vw;bottom:56px;width:175px;height:105px;border-radius:12px 42px 12px 12px;background:linear-gradient(145deg,#171b18,#070908);border:1px solid rgba(255,255,255,.22);box-shadow:0 24px 55px rgba(0,0,0,.45);opacity:.92}.contact-mailbox:after{content:'';position:absolute;width:15px;height:120px;background:#30291f;left:78px;top:102px}.contact-mailbox span{position:absolute;width:52px;height:4px;background:#8ca778;left:20px;top:50px}.contact-mailbox i{position:absolute;width:3px;height:46px;background:#a33d31;right:24px;top:-18px}.contact-mailbox i:after{content:'';position:absolute;width:28px;height:17px;background:#a33d31;left:0;top:0}
        @media(max-width:760px){.contact-grow-hero{min-height:560px;background-position:62% center}.contact-grow-shade{background:linear-gradient(90deg,rgba(4,10,6,.92),rgba(4,10,6,.5)),linear-gradient(0deg,rgba(7,16,11,.85),transparent)}.contact-mailbox{right:25px;bottom:32px;transform:scale(.72);transform-origin:bottom right}}
      `}</style>
    </main>
  )
}
