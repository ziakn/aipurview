"use client";

import { motion } from "framer-motion";
import { Award, Mail, ShieldCheck, Sparkles, Target } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const stats = [
    { label: "Project Done", value: "0+" },
    { label: "Happy Client", value: "0+" },
    { label: "Professional Expert", value: "0+" },
    { label: "Years of Experience", value: "0+" },
];

const principles = [
    {
        title: "Our Vision",
        description: "To empower organizations with resilient, compliant and auditable frameworks that build trust across every layer of digital operations.",
        icon: Sparkles,
    },
    {
        title: "Our Mission",
        description: "To engineer strategic governance frameworks that bridge policy and practice to deliver measurable outcomes across cybersecurity, privacy and AI.",
        icon: Target,
    },
    {
        title: "Our Motto",
        description: "Turning risk into resilience and policy into practice, our frameworks bridge intent and execution across cybersecurity, privacy, and AI governance.",
        icon: ShieldCheck,
    },
];

const AboutPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-28 pb-14 md:pt-32 md:pb-20 border-b border-card-border">
                <div className="container mx-auto px-6">
                    <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
                        <div className="mb-6 inline-flex border-l-2 border-neon-blue pl-4">
                            <span className="text-sm font-medium text-foreground/60">About Us</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight text-foreground">
                            We help you achieve your objectives.
                        </h1>
                        <p className="text-xl leading-relaxed text-foreground/65 max-w-3xl">
                            AIPurview is a strategic consultancy operating at the intersection of cybersecurity, data privacy and AI governance.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
                    <div>
                        <div className="mb-4 text-sm font-medium text-neon-blue">Who we are</div>
                        <h2 className="text-3xl md:text-5xl font-semibold mb-6 text-foreground">
                            Partner in Cybersecurity, Privacy, and AI Oversight
                        </h2>
                        <a href="/contact" className="btn-primary mt-4 inline-flex">
                            Discover more
                        </a>
                    </div>
                    <div className="space-y-6 text-lg leading-relaxed text-foreground/65">
                        <p>
                            With a growing global footprint, we combine deep domain expertise with agile innovation to help organizations navigate regulatory complexity and operational risk with confidence.
                        </p>
                        <p>
                            Our multidisciplinary team include seasoned CISOs, consultants, assessors, architects and strategists that understand governance across its full spectrum: people, process, and technology.
                        </p>
                        <p>
                            We deliver services that are secure, scalable, and built for real-world impact while remaining intuitive, empowering, and future-ready.
                        </p>
                        <p>
                            As we expand into new markets, our commitment remains clear: to deliver governance services that inspire trust, reduce complexity, and drive operational assurance across every layer of your enterprise.
                        </p>
                    </div>
                </div>
            </Section>

            <Section className="bg-dark-charcoal/30">
                <div className="grid gap-5 md:grid-cols-4">
                    {stats.map((stat) => (
                        <div key={stat.label} className="glass-card p-7">
                            <div className="text-4xl font-semibold text-foreground">{stat.value}</div>
                            <div className="mt-3 text-sm font-medium text-foreground/55">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
                    <div className="glass-card p-8 lg:p-10">
                        <Award className="mb-7 h-10 w-10 text-neon-blue" />
                        <h2 className="text-3xl md:text-4xl font-semibold mb-5 text-foreground">
                            Establish Environment Aligned with Standards & Regulations
                        </h2>
                        <p className="text-foreground/60 leading-relaxed">
                            We embed standards into every layer to ensure resilience, traceability and executive assurance.
                        </p>
                    </div>
                    <div className="grid gap-5">
                        {principles.map((principle) => (
                            <div key={principle.title} className="glass-card p-7">
                                <div className="mb-4 flex items-center gap-3">
                                    <principle.icon className="h-6 w-6 text-neon-green" />
                                    <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                                </div>
                                <p className="text-sm leading-relaxed text-foreground/60">{principle.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section className="bg-dark-charcoal/30">
                <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
                    <div>
                        <Mail className="mb-6 h-9 w-9 text-neon-green" />
                        <h2 className="text-3xl md:text-5xl font-semibold text-foreground">Newsletter</h2>
                    </div>
                    <div>
                        <p className="mb-6 text-lg text-foreground/60">
                            Signup our newsletter to get update information, news, insight or promotions.
                        </p>
                        <form className="flex flex-col gap-3 sm:flex-row">
                            <input
                                type="email"
                                placeholder="Email"
                                className="min-h-12 flex-1 rounded-md border border-card-border bg-background px-4 text-foreground outline-none transition-colors placeholder:text-foreground/35 focus:border-neon-blue/60"
                            />
                            <button type="submit" className="btn-primary">
                                Sign Up
                            </button>
                        </form>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default AboutPage;
