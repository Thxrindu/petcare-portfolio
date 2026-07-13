import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "The team at Pawgress saved my senior lab's life during an emergency at 2am. Forever grateful for their calm, expert care.",
    name: "Sofia Alvarez",
    pet: "Owner of Biscuit",
    initials: "SA",
  },
  {
    quote:
      "They treat my anxious rescue cat with so much patience. He actually purrs at the vet now — I never thought that was possible!",
    name: "James Whitfield",
    pet: "Owner of Momo",
    initials: "JW",
  },
  {
    quote:
      "Clean, warm, and genuinely caring. Dr. Chen explained everything clearly and never rushed us. The best clinic in town.",
    name: "Priya Nair",
    pet: "Owner of Luna",
    initials: "PN",
  },
]

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          Loved by pet parents
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Stories from our happy families
        </h2>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <figure
            key={t.name}
            className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm"
          >
            <Quote className="h-8 w-8 text-primary/30" />
            <div className="mt-4 flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <blockquote className="mt-4 flex-1 leading-relaxed text-foreground">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-sm font-bold text-primary">
                {t.initials}
              </span>
              <div>
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.pet}</p>
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
