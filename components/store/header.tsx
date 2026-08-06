'use client'

import { ShoppingCart, Sprout } from 'lucide-react'

interface HeaderProps {
  cartCount: number
  onShop: () => void
  onContact: () => void
  onCart: () => void
}

export function Header({ cartCount, onShop, onContact, onCart }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <button
          onClick={onShop}
          className="flex items-center gap-2 text-left"
          aria-label="Rootstock Genetics home"
        >
          <Sprout className="h-5 w-5 text-primary" aria-hidden="true" />
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
            JJ Stash
          </span>
        </button>

        <nav className="flex items-center gap-1 sm:gap-2">
          <button
            onClick={onShop}
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Shop
          </button>
          <button
            onClick={onContact}
            className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </button>
          <button
            onClick={onCart}
            className="relative ml-1 rounded-md p-2 text-foreground transition-colors hover:bg-secondary"
            aria-label={`Cart, ${cartCount} item${cartCount === 1 ? '' : 's'}`}
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
                {cartCount}
              </span>
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}
