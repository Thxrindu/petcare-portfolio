import {
  Stethoscope,
  Syringe,
  Scissors,
  Bone,
  HeartPulse,
  Microscope,
} from "lucide-react"

const services = [
  {
    icon: Stethoscope,
    title: "Wellness Exams",
    description:
      "Comprehensive head-to-tail check-ups to keep your companion thriving at every life stage.",
  },
  {
    icon: Syringe,
    title: "Vaccinations",
    description:
      "Personalized vaccine schedules that protect against common and seasonal illnesses.",
  },
  {
    icon: HeartPulse,
    title: "Surgery & Dental",
    description:
      "Safe, modern surgical suites and gentle dental care with advanced monitoring.",
  },
  {
    icon: Microscope,
    title: "Diagnostics & Lab",
    description:
      "In-house bloodwork, digital X-rays, and ultrasound for fast, accurate answers.",
  },
  {
    icon: Scissors,
    title: "Grooming & Spa",
    description:
      "Relaxing baths, trims, and nail care that leave pets fresh, fluffy, and happy.",
  },
  {
    icon: Bone,
    title: "Nutrition Coaching",
    description:
      "Custom diet plans and weight management guided by our veterinary nutritionists.",
  },
]

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-bold uppercase tracking-widest text-primary">
          What we offer
        </span>
        <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Complete care under one warm roof
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          Everything your pet needs to live a long, joyful, healthy life —
          delivered by a team that genuinely loves animals.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="group rounded-3xl border border-border bg-card p-8 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <service.icon className="h-7 w-7" />
            </span>
            <h3 className="mt-6 font-serif text-xl font-semibold text-foreground">
              {service.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
