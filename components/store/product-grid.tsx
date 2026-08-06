'use client'

import { ArrowUpRight } from 'lucide-react'
import { STARTING_PRICE, STRAINS, type Strain } from '@/lib/strains'

interface ProductGridProps {
  onSelect: (strain: Strain) => void
  contactRef: React.RefObject<HTMLElement | null>
}

export function ProductGrid({ onSelect, contactRef }: ProductGridProps) {
  return (
    <div>
      {/* Hero */}
      <section className="mx-auto max-w-6xl px-4 pb-10 pt-16 sm:px-6 sm:pt-24">
        <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-primary">
          Independent Seed Breeder
        </p>
        <h1 className="max-w-3xl text-balance text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl">
          Craft Genetics. Direct From The Breeder.
        </h1>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          Hand-selected, stabilized cannabis genetics — bred, tested, and shipped
          by a single independent breeder. No middlemen, no markup.
        </p>
      </section>

      {/* Grid */}
      <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-6 flex items-center justify-between border-b border-border pb-4">
          <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
            The Collection
          </h2>
          <span className="text-sm text-muted-foreground">{STRAINS.length} strains</span>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {STRAINS.map((strain) => (
            <button
              key={strain.id}
              onClick={() => onSelect(strain)}
              className="group flex flex-col overflow-hidden rounded-lg border border-border bg-card text-left transition-colors hover:border-primary/50"
            >
              <div className="relative aspect-square overflow-hidden bg-secondary">
                <img
                  src={strain.image || '/placeholder.svg'}
                  alt={`${strain.name} cannabis seeds`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-lg font-semibold text-foreground">{strain.name}</h3>
                <p className="mt-0.5 text-sm text-muted-foreground">{strain.lineage}</p>
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <span className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Starting at
                    </span>
                    <p className="font-mono text-lg text-foreground">${STARTING_PRICE}</p>
                  </div>
                  <span className="flex items-center gap-1 text-sm font-medium text-primary">
                    View Strain
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* Contact footer */}
      <footer
        ref={contactRef as React.RefObject<HTMLElement>}
        className="border-t border-border bg-card/40"
      >
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:grid-cols-2 sm:px-6">
          <div>
            <h2 className="text-lg font-semibold text-foreground">Contact the Breeder</h2>
            <p className="mt-2 max-w-md text-pretty leading-relaxed text-muted-foreground">
              Questions about a strain, a specific pheno, or your order? Reach out
              directly — you&apos;re always talking to the person who bred the seeds.
            </p>
          </div>
          <div className="grid gap-3 text-sm sm:justify-end sm:text-right">
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
              <p className="text-foreground">realjjemail@gmail.com</p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-wider text-muted-foreground">Hours</p>
              <p className="text-foreground">Mon–Fri, 9am–5pm PT</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs leading-relaxed text-muted-foreground sm:px-6">
            Seeds sold strictly as novelty souvenir genetic preservation items.
          </p>
        </div>
      </footer>
    </div>
  )
}
