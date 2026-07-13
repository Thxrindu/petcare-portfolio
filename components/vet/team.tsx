import Image from "next/image"
import { Award, GraduationCap, Heart } from "lucide-react"

const highlights = [
  { icon: GraduationCap, label: "DVM, Board Certified" },
  { icon: Award, label: "Fear-Free Certified" },
  { icon: Heart, label: "18k+ pets treated" },
]

const team = [
  {
    name: "Dr. Maya Chen",
    role: "Chief Veterinarian",
    image: "/images/doctor.png",
  },
  {
    name: "Dr. Liam Foster",
    role: "Surgery Specialist",
    image: "/images/puppy.png",
  },
  {
    name: "Dr. Aisha Rahman",
    role: "Feline & Exotics",
    image: "/images/rabbit.png",
  },
]

export function Team() {
  return (
    <section id="team" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-[2.5rem] shadow-xl shadow-primary/10">
            <Image
              src="/images/doctor.png"
              alt="Dr. Maya Chen, Chief Veterinarian, holding a cat"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
          </div>
          <div className="absolute -right-4 bottom-8 max-w-[12rem] rounded-2xl bg-card px-5 py-4 shadow-lg shadow-primary/10">
            <div className="flex -space-x-2">
              {team.map((m) => (
                <span
                  key={m.name}
                  className="relative h-9 w-9 overflow-hidden rounded-full border-2 border-card"
                >
                  <Image src={m.image} alt={m.name} fill className="object-cover" />
                </span>
              ))}
            </div>
            <p className="mt-2 text-sm font-semibold text-foreground">
              A team you can trust
            </p>
          </div>
        </div>

        <div>
          <span className="text-sm font-bold uppercase tracking-widest text-primary">
            Meet your vets
          </span>
          <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Compassionate experts who treat pets like family
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Led by Dr. Maya Chen, our doctors combine years of specialized
            training with genuine warmth. We take the time to understand your
            pet&apos;s personality, not just their symptoms.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {highlights.map((h) => (
              <span
                key={h.label}
                className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-secondary-foreground"
              >
                <h.icon className="h-4 w-4 text-primary" />
                {h.label}
              </span>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="relative mx-auto aspect-square w-full overflow-hidden rounded-2xl">
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    className="object-cover"
                    sizes="20vw"
                  />
                </div>
                <p className="mt-3 text-sm font-bold text-foreground">{m.name}</p>
                <p className="text-xs text-muted-foreground">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
