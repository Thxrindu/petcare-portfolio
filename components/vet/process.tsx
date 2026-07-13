import Image from "next/image"
import { CalendarCheck, ClipboardList, Activity, Smile } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    step: "01",
    title: "Book & Welcome",
    description:
      "Schedule online in seconds. We greet you and your pet with treats, cuddles, and zero stress.",
  },
  {
    icon: ClipboardList,
    step: "02",
    title: "Gentle Assessment",
    description:
      "Our vets perform a calm, thorough exam and listen closely to your concerns.",
  },
  {
    icon: Activity,
    step: "03",
    title: "Personalized Treatment",
    description:
      "We create a tailored care plan and walk you through every option clearly.",
  },
  {
    icon: Smile,
    step: "04",
    title: "Follow-up & Love",
    description:
      "We check in on recovery and keep supporting your pet's long-term wellbeing.",
  },
]

export function Process() {
  return (
    <section id="process" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative order-last lg:order-first">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] shadow-xl shadow-primary/10">
              <Image
                src="/images/clinic.png"
                alt="Warm, modern veterinary clinic interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 90vw, 45vw"
              />
            </div>
            <div className="absolute -bottom-6 left-6 rounded-2xl bg-card px-6 py-4 shadow-lg shadow-primary/10">
              <p className="font-serif text-3xl font-semibold text-primary">15+</p>
              <p className="text-sm font-semibold text-muted-foreground">
                Years caring for pets
              </p>
            </div>
          </div>

          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              How it works
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              A calm, caring treatment process
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              We designed every step to feel reassuring — for pets and their
              humans alike.
            </p>

            <ol className="mt-10 space-y-6">
              {steps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="font-serif text-sm font-bold text-primary">
                        {s.step}
                      </span>
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {s.title}
                      </h3>
                    </div>
                    <p className="mt-1 leading-relaxed text-muted-foreground">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}
