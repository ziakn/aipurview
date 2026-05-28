"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, ClipboardCheck, FileCheck2, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const outcomes = [
    "Current State Assessment & Risk Profiling",
    "Customized Security Roadmap & Governance",
    "Current State Assessment & Risk Profiling",
];

const benefits = [
    {
        title: "Customized Strategy & Execution",
        description: "Receive a security program and roadmap fully customized to your organization's size, industry, regulatory environment and unique risk profile, ensuring maximum relevance and impact.",
    },
    {
        title: "Access to Multi-Disciplinary Expertise",
        description: "Leverage the collective power of our security specialists, including compliance analysts, vCIOs, and penetration testers, to provide both strategic oversight and essential hands-on execution.",
    },
    {
        title: "Guaranteed Audit & Compliance Readiness",
        description: "Maintain continuous readiness for critical certifications such as SOC 2 and ISO 27001, along with applicable regulatory reviews, significantly reducing last-minute remediation efforts and costs.",
    },
    {
        title: "Proactive Incident Preparedness",
        description: "We build and rigorously test incident response playbooks, enabling your team to act quickly and decisively during a breach, minimizing downtime and limiting financial damage.",
    },
    {
        title: "Measurable Reduction in Risk Exposure",
        description: "Lower your overall likelihood of security incidents through layered controls, targeted workforce training and continuous monitoring, securing operational continuity during any security event.",
    },
];

const packages = [
    {
        title: "Basic",
        items: [
            "Single compliance framework (SOC 2, ISO 27001 or Regulatory)",
            "Compliance dashboard access",
            "Quarterly security reviews",
            "Policy maintenance & updates",
            "Vendor security questionnaires",
            "Cybersecurity awareness support",
            "Security Assessment",
            "Internal Audit",
            "24-hour response time",
            "Whatsapp & email support",
        ],
    },
    {
        title: "Professional",
        items: [
            "Fast-track SOC 2, ISO 27001 or Regulatory certification support",
            "Compliance dashboard access",
            "Custom security policies & procedures",
            "Gap analysis & remediation roadmap",
            "Auditor selection & coordination",
            "Monthly strategic calls",
            "Vendor security reviews",
            "Security awareness training",
            "Cybersecurity education support",
            "Internal Audit",
            "Risk assessment support",
            "12-hour response time",
        ],
    },
    {
        title: "Advance",
        items: [
            "Multi-framework compliance (SOC 2, ISO 27001, HIPAA, PCI DSS)",
            "Fractional or full vCISO services",
            "Compliance dashboard access",
            "Security program development",
            "Architecture & cloud security reviews",
            "Advanced threat modeling",
            "Incident response planning & leadership",
            "M&A security due diligence",
            "Internal audit support",
            "Additional frameworks",
            "Cybersecurity education support",
            "Board-level reporting & presentations",
            "Weekly support hours",
            "6 hours response time",
        ],
    },
];

const VCISOPage = () => {
    return (
        <main className="bg-background min-h-screen">
            <Navbar />

            <section className="relative overflow-hidden border-b border-card-border pt-28 pb-14 md:pt-32 md:pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl">
                            <motion.div
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6 inline-flex items-center gap-3 rounded-md border border-card-border bg-card-bg px-4 py-3"
                            >
                                <span className="h-2.5 w-2.5 rounded-full bg-brand-orange" />
                                <span className="text-sm font-bold text-foreground/62">#1 Priority Clients</span>
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 16 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.08 }}
                                className="text-[clamp(2.75rem,5.6vw,5.75rem)] font-black leading-[1] tracking-[0] text-foreground"
                            >
                                vCISO
                            </motion.h1>
                            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-foreground/66 md:text-xl">
                                Our experts strategically identify, quantify and manage your cybersecurity risks.
                            </p>
                            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/58">
                                Gain strategic cyber leadership, expert guidance and proactive risk management.
                            </p>
                            <div className="mt-8">
                                <Button size="lg">Schedule a Consultation</Button>
                            </div>
                        </div>
                </div>
            </section>

            <Section>
                <div className="mb-12 max-w-3xl">
                    <div className="mb-4 text-sm font-bold text-brand-orange">Client Stories</div>
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">Validated Success: Client Case Studies</h2>
                    <p className="text-foreground/60 text-lg">
                        Explore detailed success stories and analyses highlighting measurable growth and proven expertise and delivering sustained, valuable business results.
                    </p>
                </div>
                <div className="grid gap-5 md:grid-cols-3">
                    {outcomes.map((outcome, index) => (
                        <div key={`${outcome}-${index}`} className="glass-card p-7">
                            <ClipboardCheck className="mb-6 h-8 w-8 text-brand-orange" />
                            <h3 className="text-lg font-bold text-foreground">{outcome}</h3>
                        </div>
                    ))}
                </div>
            </Section>

            <Section className="bg-dark-charcoal border-y border-card-border">
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
                    <div>
                        <div className="mb-4 text-sm font-bold text-brand-orange">Benefits of a vCISO</div>
                        <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">The Strategic Advantage of a vCISO</h2>
                        <p className="text-foreground/60">
                            Strategic security leadership aligned with your roadmap, compliance obligations and operational risk profile.
                        </p>
                    </div>
                    <div className="space-y-5">
                        {benefits.map((benefit) => (
                            <div key={benefit.title} className="glass-card p-6">
                                <div className="flex gap-4">
                                    <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                                    <div>
                                        <h3 className="font-bold text-foreground">{benefit.title}</h3>
                                        <p className="mt-2 text-sm leading-relaxed text-foreground/60">{benefit.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section>
                <div className="mb-12 max-w-3xl">
                    <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">vCISO Packages</h2>
                    <p className="text-foreground/60">
                        While these are general practices, we offer custom-tailored packages to meet your distinct requirements.
                    </p>
                </div>
                <div className="grid gap-6 lg:grid-cols-3">
                    {packages.map((pkg) => (
                        <div key={pkg.title} className="glass-card p-7">
                            <Shield className="mb-5 h-8 w-8 text-brand-orange" />
                            <h3 className="mb-6 text-2xl font-black text-foreground">{pkg.title}</h3>
                            <ul className="space-y-3">
                                {pkg.items.map((item) => (
                                    <li key={item} className="flex gap-3 text-sm text-foreground/65">
                                        <FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <a href="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-foreground hover:text-brand-orange">
                                Talk with Team <ArrowRight className="h-4 w-4" />
                            </a>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default VCISOPage;
