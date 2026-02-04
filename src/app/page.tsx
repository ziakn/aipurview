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
      <section className="py-24 bg-neon-blue/5 border-y border-card-border relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.05)_0%,transparent_100%)]" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-black mb-8 text-foreground">Ready to secure your AI future?</h2>
          <p className="text-foreground/60 text-lg mb-12 max-w-2xl mx-auto">
            Join the ranks of EU enterprises leading the way in safe, compliant, and innovative AI implementation.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
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
