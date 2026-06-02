import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import ThreePillars from "@/components/sections/ThreePillars";
import TrustBar from "@/components/sections/TrustBar";
import ValueProposition from "@/components/sections/ValueProposition";
import Process from "@/components/sections/Process";
import Expertise from "@/components/sections/Expertise";

export default function Home() {
  return (
      <main className="min-h-screen w-full bg-background text-foreground">
        <Navbar />
        <Hero />
        <TrustBar />
        <ValueProposition />
        <Expertise />
        <Process />
        <ThreePillars />

        {/* CTA Section */}
        <section className="bg-background py-16 md:py-20">
          <div className="mx-auto max-w-[1180px] px-7">
            <div className="rounded-2xl bg-[#2a1467] px-6 py-14 text-center text-white md:px-10 md:py-16">
              <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">Ready to make Responsible AI your advantage?</h2>
              <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
                In one conversation, we&apos;ll map where you stand against the EU AI Act and ISO 42001, and what it takes to get production-ready.
              </p>
              <a href="/contact" className="btn-primary mt-8 inline-flex">
                Book a Free 30-Minute Consultation <span className="ml-2" aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
  );
}
