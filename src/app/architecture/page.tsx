"use client";

import { motion } from "framer-motion";
import { Code2, Database, Lock, Shield, Terminal, Zap } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const services = [
    {
        title: "Red Teaming",
        description: "Adversarial simulations targeting the OWASP Top 10 for LLMs. We pressure-test your models against prompt injection and data poisoning.",
        icon: Terminal,
        tag: "Adversarial",
    },
    {
        title: "Guardrail Implementation",
        description: "Technical enforcement using NeMo Guardrails, LlamaGuard, and custom policy engines to prevent hallucinations and unsafe outputs.",
        icon: Shield,
        tag: "Enforcement",
    },
    {
        title: "Infrastructure Review",
        description: "Secure-by-design audits for AI pipelines. Hardening API endpoints, vector databases, and data orchestration layers.",
        icon: Database,
        tag: "Hardening",
    },
];

const ArchitecturePage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="relative overflow-hidden border-b border-card-border bg-background pt-28 pb-14 md:pt-32 md:pb-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-5xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-6 inline-flex items-center gap-3 rounded-md border border-card-border bg-card-bg px-4 py-3"
                        >
                            <Zap className="h-5 w-5 text-brand-orange" />
                            <span className="text-sm font-bold uppercase text-foreground/62">Deep-Tech Security Defense</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[clamp(2.75rem,5.6vw,5.75rem)] font-black leading-[1] tracking-[0] text-foreground"
                        >
                            THE <span className="text-foreground/25">HARDENING</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mt-6 max-w-2xl text-lg leading-relaxed text-foreground/58 md:text-xl"
                        >
                            Beyond policy. We provide the technical enforcement required to deploy AI systems that are resilient to adversarial threats.
                        </motion.p>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 transition-colors duration-200 hover:border-brand-orange group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-12 h-12 rounded-md bg-dark-charcoal border border-card-border flex items-center justify-center">
                                    <service.icon className="w-6 h-6 text-brand-orange" />
                                </div>
                                <span className="text-[10px] font-bold text-foreground/45 uppercase border border-card-border px-3 py-1 rounded-md">
                                    {service.tag}
                                </span>
                            </div>
                            <h3 className="text-2xl font-black mb-4 text-foreground">{service.title}</h3>
                            <p className="text-foreground/60 leading-relaxed text-sm mb-8">
                                {service.description}
                            </p>
                            <div className="flex items-center space-x-2 text-brand-orange font-bold text-[11px] uppercase group-hover:translate-x-2 transition-transform">
                                <code>{service.title.toLowerCase().replace(" ", "_")}.assess()</code>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <Section className="bg-dark-charcoal border-y border-card-border">
                <div className="glass-card overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 text-foreground">
                            <h2 className="text-3xl font-black mb-6">Secure-by-Design <br />Pipelines</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Code2, label: "API Hardening", desc: "Encryption & Rate Limiting" },
                                    { icon: Lock, label: "RBAC Orchestration", desc: "Granular Access Control" },
                                    { icon: Shield, label: "Real-time Monitoring", desc: "Threat Detection Loops" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="p-2 bg-foreground/5 rounded-lg">
                                            <item.icon className="w-5 h-5 text-brand-orange" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm uppercase">{item.label}</p>
                                            <p className="text-xs text-foreground/40">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="border-l border-card-border bg-background p-12 flex items-center justify-center">
                            <div className="relative">
                                <Terminal className="w-48 h-48 text-foreground/10" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default ArchitecturePage;
