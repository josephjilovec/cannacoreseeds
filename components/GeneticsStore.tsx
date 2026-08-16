'use client'
import { useMemo, useState } from 'react'
import { PACK_OPTIONS, STRAINS, packPrice, type PackSize, type Strain } from '@/lib/strains'
import { PAYMENT_METHODS, getPaymentConfig, type PaymentMethod } from '@/lib/payments'
import { SHIPPING_COST } from '@/lib/cart'

interface Line { id:string; strain:Strain; packSize:PackSize; quantity:number; unitPrice:number }

type View = 'catalog' | 'detail' | 'checkout' | 'complete'

export function GeneticsStore(){
  const [view,setView] = useState<View>('catalog')
  const [selected,setSelected] = useState<Strain>(STRAINS[0])
  const [packSize,setPackSize] = useState<PackSize>(6)
  const [quantity,setQuantity] = useState(1)
  const [cart,setCart] = useState<Line[]>([])
  const [method,setMethod] = useState<PaymentMethod>('cashapp')
  const [reference,setReference] = useState('')
  const [status,setStatus] = useState('')
  const [busy,setBusy] = useState(false)
  const subtotal = useMemo(()=>cart.reduce((sum,line)=>sum+line.unitPrice*line.quantity,0),[cart])
  const total = subtotal + (cart.length ? SHIPPING_COST : 0)

  function open(strain:Strain){setSelected(strain);setPackSize(6);setQuantity(1);setView('detail');window.scrollTo({top:0,behavior:'smooth'})}
  function add(goCheckout=false){
    const unitPrice=packPrice(packSize)
    setCart(prev=>{
      const match=prev.find(line=>line.strain.id===selected.id && line.packSize===packSize)
      if(match) return prev.map(line=>line.id===match.id?{...line,quantity:line.quantity+quantity}:line)
      return [...prev,{id:`${selected.id}-${packSize}-${Date.now()}`,strain:selected,packSize,quantity,unitPrice}]
    })
    if(goCheckout)setTimeout(()=>setView('checkout'),0)
    else {setStatus('Added to cart');setTimeout(()=>setStatus(''),1400)}
  }
  async function submitOrder(event:React.FormEvent<HTMLFormElement>){
    event.preventDefault();setBusy(true);setStatus('')
    const form=event.currentTarget
    const data=new FormData(form)
    data.append('_subject','CannaCore Seeds — new genetics order')
    data.append('_captcha','false')
    data.append('payment_method',method)
    data.append('payment_reference',reference)
    data.append('order_total',`$${total}`)
    data.append('items',cart.map(line=>`${line.strain.name} — ${line.packSize} seeds × ${line.quantity} — $${line.unitPrice*line.quantity}`).join('\n'))
    try{
      const response=await fetch('https://formsubmit.co/ajax/realjjemail@gmail.com',{method:'POST',headers:{Accept:'application/json'},body:data})
      if(!response.ok)throw new Error('failed')
      setView('complete');setCart([]);window.scrollTo({top:0,behavior:'smooth'})
    }catch{setStatus('The order notice could not send. Please email realjjemail@gmail.com.')}finally{setBusy(false)}
  }

  if(view==='detail') return <section className="store-detail section-wrap">
    <button className="back-link" onClick={()=>setView('catalog')}>← Back to collection</button>
    <div className="detail-grid">
      <div className="detail-image"><img src={selected.image} alt={`${selected.name} CannaCore visual`}/></div>
      <div className="detail-copy"><p className="eyebrow">CannaCore collection</p><h1>{selected.name}</h1><p className="lineage">{selected.lineage}</p><p className="detail-description">{selected.description}</p>
        <div className="spec-row"><span>Flowering window<strong>{selected.floweringTime}</strong></span><span>Format<strong>Feminized seed packs</strong></span></div>
        <p className="form-label">Choose pack</p><div className="pack-grid">{PACK_OPTIONS.map(option=><button key={option.size} onClick={()=>setPackSize(option.size)} className={packSize===option.size?'is-active':''}><span>{option.size} seeds</span><strong>${option.price}</strong>{option.badge&&<small>{option.badge}</small>}</button>)}</div>
        <div className="quantity-row"><div><span className="form-label">Packs</span><div className="stepper"><button onClick={()=>setQuantity(q=>Math.max(1,q-1))}>−</button><strong>{quantity}</strong><button onClick={()=>setQuantity(q=>Math.min(20,q+1))}>+</button></div></div><div className="price-total"><span>Subtotal</span><strong>${packPrice(packSize)*quantity}</strong></div></div>
        <div className="action-grid"><button className="button button-primary" onClick={()=>add(true)}>Proceed to checkout</button><button className="button button-outline" onClick={()=>add(false)}>Add to cart</button></div>{status&&<p className="inline-status">{status}</p>}
        <p className="legal-note"><strong>21+ only.</strong> Seeds are intended for lawful personal horticulture and genetic preservation. Purchase, possession, germination, and cultivation laws vary by jurisdiction. Know the state, local, municipal, and property rules that apply to you. <a href="/compliance">Cultivation & jurisdiction notice ↗</a></p>
      </div>
    </div>
  </section>

  if(view==='checkout'){
    const config=getPaymentConfig(method)
    return <section className="checkout section-wrap"><button className="back-link" onClick={()=>setView('catalog')}>← Continue browsing</button><div className="checkout-grid"><form onSubmit={submitOrder} className="checkout-form"><p className="eyebrow">Order details</p><h1>Complete your request.</h1>
      <div className="field-grid"><label>Full name<input name="name" required/></label><label>Email<input name="email" type="email" required/></label></div><label>Street address<input name="address" required/></label><div className="field-grid triple"><label>City<input name="city" required/></label><label>State<input name="state" required/></label><label>ZIP<input name="zip" required/></label></div>
      <p className="form-label">Manual payment method</p><div className="payment-tabs">{PAYMENT_METHODS.map(item=><button type="button" key={item.id} className={method===item.id?'is-active':''} onClick={()=>{setMethod(item.id);setReference('')}}>{item.label}</button>)}</div>
      <div className="payment-panel"><span>Send payment to</span><strong>{config.destination}</strong><p>{config.instructions}</p><label>{config.verifyLabel}<input value={reference} onChange={event=>setReference(event.target.value)} placeholder={config.verifyPlaceholder} required/></label></div>
      <label className="check-row"><input type="checkbox" name="age_and_jurisdiction_confirmation" value="confirmed" required/><span>I confirm that I am 21 or older and that my purchase, possession, germination, and cultivation, if any, comply with the laws and property rules that apply to me. <a href="/compliance" target="_blank" rel="noreferrer">Read the notice ↗</a></span></label>
      <button disabled={busy||cart.length===0} className="button button-primary" type="submit">{busy?'Sending…':'Submit order notice'}</button>{status&&<p className="inline-status error">{status}</p>}
    </form><aside className="order-summary"><p className="eyebrow">Your selection</p><h2>Order summary</h2>{cart.length===0?<p>Your cart is empty.</p>:<>{cart.map(line=><div className="order-line" key={line.id}><img src={line.strain.image} alt=""/><div><strong>{line.strain.name}</strong><span>{line.packSize} seeds × {line.quantity}</span></div><b>${line.unitPrice*line.quantity}</b><button onClick={()=>setCart(items=>items.filter(item=>item.id!==line.id))}>×</button></div>)}<div className="totals"><span>Subtotal <b>${subtotal}</b></span><span>Shipping <b>${SHIPPING_COST}</b></span><strong>Total <b>${total}</b></strong></div></>}</aside></div></section>
  }

  if(view==='complete') return <section className="complete-state section-wrap"><p className="eyebrow">Order notice sent</p><h1>Your request is in the stash.</h1><p>A confirmation request has been sent to the breeder inbox for manual review and payment matching.</p><button className="button button-primary" onClick={()=>setView('catalog')}>Return to genetics</button></section>

  return <section className="catalog section-wrap"><div className="catalog-intro"><div><p className="eyebrow">CannaCore genetics</p><h1>Small catalog.<br/>Deep attention.</h1></div><p>The collection stays intentionally focused. Each line gets its own visual world, lineage record, and direct path back to the breeder instead of disappearing into a giant marketplace.</p></div><div className="catalog-meta"><span>{STRAINS.length} current lines</span><button onClick={()=>setView('checkout')}>Cart · {cart.reduce((n,line)=>n+line.quantity,0)}</button></div><div className="catalog-grid">{STRAINS.map(strain=><button key={strain.id} onClick={()=>open(strain)} className="strain-card" style={{'--card-accent':strain.accent} as React.CSSProperties}><div className="strain-card-image"><img src={strain.image} alt={`${strain.name} visual`}/></div><div className="strain-card-copy"><span>{strain.floweringTime}</span><h2>{strain.name}</h2><p>{strain.lineage}</p><div><small>Starting at</small><strong>${packPrice(3)}</strong><b>View genetics ↗</b></div></div></button>)}</div></section>
}
