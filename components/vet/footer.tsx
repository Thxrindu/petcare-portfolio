import { PawPrint, Phone, Mail, MapPin, Clock } from "lucide-react"

const columns = [
  {
    title: "Services",
    links: ["Wellness Exams", "Vaccinations", "Surgery & Dental", "Grooming"],
  },
  {
    title: "Clinic",
    links: ["About Us", "Our Team", "Careers", "Reviews"],
  },
  {
    title: "Support",
    links: ["Emergency Care", "Pet Insurance", "New Patients", "FAQ"],
  },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <PawPrint className="h-5 w-5" />
              </span>
              <span className="font-serif text-xl font-semibold text-foreground">
                Pawgress
              </span>
            </a>
            <p className="mt-4 max-w-xs leading-relaxed text-muted-foreground">
              A modern veterinary hospital built on warmth, trust, and a deep
              love for animals.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" /> 24 Willow Ave, Portland
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" /> (555) 123-PAWS
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" /> hello@pawgress.vet
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" /> Open 24/7
              </li>
            </ul>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="font-serif text-sm font-semibold text-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-primary"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Pawgress Veterinary Clinic. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary">Privacy</a>
            <a href="#" className="hover:text-primary">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
