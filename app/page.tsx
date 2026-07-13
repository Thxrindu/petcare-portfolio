import { Navbar } from "@/components/vet/navbar"
import { Hero } from "@/components/vet/hero"
import { Services } from "@/components/vet/services"
import { Process } from "@/components/vet/process"
import { Team } from "@/components/vet/team"
import { Gallery } from "@/components/vet/gallery"
import { Testimonials } from "@/components/vet/testimonials"
import { Emergency } from "@/components/vet/emergency"
import { Appointment } from "@/components/vet/appointment"
import { Footer } from "@/components/vet/footer"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <Process />
      <Team />
      <Gallery />
      <Testimonials />
      <Emergency />
      <Appointment />
      <Footer />
    </main>
  )
}
