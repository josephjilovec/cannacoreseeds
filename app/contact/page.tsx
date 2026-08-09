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
      <section className="page-hero compact">
        <p className="eyebrow">Direct line</p>
        <h1>Talk to<br/><em>the breeder.</em></h1>
        <p>Questions about genetics, an order, a collaboration, or something you read in JJ Stash.</p>
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
              <option>JJ Stash / editorial</option>
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
          <h2>JJ Stash lives on Beehiiv.</h2>
          <a href="https://jjstash.beehiiv.com/" target="_blank" rel="noreferrer">Newsletter ↗</a>
          <a href="https://jjstash.beehiiv.com/archive" target="_blank" rel="noreferrer">Archive ↗</a>
          <a href="https://jjstash.beehiiv.com/authors" target="_blank" rel="noreferrer">Author page ↗</a>
        </aside>
      </section>
    </main>
  )
}
