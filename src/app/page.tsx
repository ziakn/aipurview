import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ThreePillars from "@/components/sections/ThreePillars";
import TrustBar from "@/components/sections/TrustBar";
import ValueProposition from "@/components/sections/ValueProposition";
import Process from "@/components/sections/Process";
import Expertise from "@/components/sections/Expertise";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <TrustBar />
      <ValueProposition />
      <Expertise />
      <ThreePillars />
      <Process />
      <FAQ />

      {/* CTA Section */}
      <section className="py-24 bg-dark-charcoal/60 border-y border-card-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-5xl font-semibold mb-8 text-foreground max-w-3xl">AI Governance you can prove, AI Risk you can manage.</h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl">
            As you integrate AI, our Governance Services ensure compliance, protect data, and accelerate innovation.
          </p>
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <a href="/contact" className="btn-primary w-full sm:w-auto text-center">
              Book a Consultation
            </a>
            <a href="/vciso" className="btn-secondary w-full sm:w-auto text-center">
              Explore vCISO Services
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
