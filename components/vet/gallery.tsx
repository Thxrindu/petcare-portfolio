"use client"

import { useCallback, useRef, useState } from "react"
import Image from "next/image"
import { MoveHorizontal } from "lucide-react"

export function Gallery() {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPosition(Math.min(100, Math.max(0, pct)))
  }, [])

  return (
    <section id="gallery" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Real transformations
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Before &amp; after our care
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Drag the slider to see how the right care brings pets back to their
            happiest, healthiest selves.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl">
          <div
            ref={containerRef}
            className="relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-[2rem] shadow-xl shadow-primary/10"
            onMouseDown={(e) => {
              dragging.current = true
              updateFromClientX(e.clientX)
            }}
            onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
            onMouseUp={() => (dragging.current = false)}
            onMouseLeave={() => (dragging.current = false)}
            onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
            onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
          >
            {/* After (base) */}
            <Image
              src="/images/after-dog.png"
              alt="Pet after treatment, healthy and groomed"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 768px"
            />
            <span className="absolute right-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">
              After
            </span>

            {/* Before (clipped) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
            >
              <Image
                src="/images/before-dog.png"
                alt="Pet before treatment"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 768px"
              />
              <span className="absolute left-4 top-4 rounded-full bg-foreground/80 px-3 py-1 text-xs font-bold text-background">
                Before
              </span>
            </div>

            {/* Handle */}
            <div
              className="absolute inset-y-0 flex items-center"
              style={{ left: `${position}%`, transform: "translateX(-50%)" }}
            >
              <div className="h-full w-1 bg-primary-foreground/90 shadow" />
              <span className="absolute flex h-11 w-11 items-center justify-center rounded-full bg-card text-primary shadow-lg">
                <MoveHorizontal className="h-5 w-5" />
              </span>
            </div>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Reveal before and after images"
            className="mt-6 w-full accent-primary"
          />
        </div>
      </div>
    </section>
  )
}
