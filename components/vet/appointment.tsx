"use client"

import { useState } from "react"
import { CalendarCheck, CheckCircle2, PawPrint } from "lucide-react"
import { Button } from "@/components/ui/button"

const services = [
  "Wellness Exam",
  "Vaccination",
  "Surgery / Dental",
  "Diagnostics & Lab",
  "Grooming & Spa",
  "Emergency Care",
]

const perks = [
  "Same-week availability",
  "Friendly reminders by text",
  "Transparent, upfront pricing",
  "Fear-free handling for anxious pets",
]

export function Appointment() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="appointment" className="bg-secondary/40 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-bold uppercase tracking-widest text-primary">
              Book a visit
            </span>
            <h2 className="mt-3 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Schedule your pet&apos;s appointment
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Tell us a little about your companion and pick a time that works.
              We&apos;ll confirm within the hour.
            </p>

            <ul className="mt-8 space-y-3">
              {perks.map((perk) => (
                <li key={perk} className="flex items-center gap-3 text-foreground">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <span className="font-medium">{perk}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-border bg-card p-6 shadow-xl shadow-primary/10 sm:p-8">
            {submitted ? (
              <div className="flex flex-col items-center py-12 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <CheckCircle2 className="h-8 w-8" />
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-foreground">
                  Request received!
                </h3>
                <p className="mt-2 max-w-sm text-muted-foreground">
                  Thanks for trusting Pawgress. Our team will reach out shortly
                  to confirm your appointment.
                </p>
                <Button
                  onClick={() => setSubmitted(false)}
                  variant="outline"
                  className="mt-6 rounded-full bg-transparent"
                >
                  Book another visit
                </Button>
              </div>
            ) : (
              <form
                className="space-y-5"
                onSubmit={(e) => {
                  e.preventDefault()
                  setSubmitted(true)
                }}
              >
                <div className="flex items-center gap-2 text-primary">
                  <PawPrint className="h-5 w-5" />
                  <span className="font-serif text-lg font-semibold text-foreground">
                    Appointment details
                  </span>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Your name">
                    <input
                      required
                      type="text"
                      placeholder="Jane Doe"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Pet's name">
                    <input
                      required
                      type="text"
                      placeholder="Biscuit"
                      className="input-base"
                    />
                  </Field>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Phone">
                    <input
                      required
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="input-base"
                    />
                  </Field>
                  <Field label="Preferred date">
                    <input required type="date" className="input-base" />
                  </Field>
                </div>

                <Field label="Service needed">
                  <select required defaultValue="" className="input-base">
                    <option value="" disabled>
                      Select a service
                    </option>
                    {services.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </Field>

                <Field label="Anything we should know? (optional)">
                  <textarea
                    rows={3}
                    placeholder="Symptoms, behavior, or special requests..."
                    className="input-base resize-none"
                  />
                </Field>

                <Button type="submit" size="lg" className="w-full rounded-full text-base">
                  <CalendarCheck className="mr-2 h-5 w-5" />
                  Request Appointment
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-foreground">
        {label}
      </span>
      {children}
    </label>
  )
}
