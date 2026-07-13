"use client"

import { useState } from "react"
import { PawPrint, Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Our Team", href: "#team" },
  { label: "Results", href: "#gallery" },
  { label: "Reviews", href: "#testimonials" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <PawPrint className="h-5 w-5" />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
            Pawgress
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#emergency"
            className="flex items-center gap-2 text-sm font-bold text-primary"
          >
            <Phone className="h-4 w-4" />
            (555) 123-PAWS
          </a>
          <Button
            nativeButton={false}
            className="rounded-full"
            render={<a href="#appointment">Book Visit</a>}
          />
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary text-secondary-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-foreground hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}
            <Button
              nativeButton={false}
              className="mt-2 rounded-full"
              render={
                <a href="#appointment" onClick={() => setOpen(false)}>
                  Book a Visit
                </a>
              }
            />
          </nav>
        </div>
      )}
    </header>
  )
}
