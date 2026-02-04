"use client";

import { motion } from "framer-motion";
import { Terminal, Shield, Zap, Lock, Code2, Database } from "lucide-react";
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

const trainingModules = [
    {
        title: "AI Threat Modeling",
        role: "Engineers & Architects",
        focus: "Identify and mitigate risks in AI systems.",
        icon: Shield,
    },
    {
        title: "Secure Prompt Engineering",
        role: "Developers & Data Scientists",
        focus: "Craft resilient prompts against adversarial attacks.",
        icon: Code2,
    },
    {
        title: "AI Governance & Compliance",
        role: "Leadership & Legal",
        focus: "Navigate regulatory landscapes for AI deployments.",
        icon: Lock,
    },
];

const ArchitecturePage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            {/* Dark Mode Containers emphasized for technical feel */}
            <section className="pt-40 pb-32 relative bg-background overflow-hidden border-b border-card-border">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,rgba(46,204,113,0.05)_0%,transparent_50%)]" />
                <div className="container mx-auto px-6 relative z-10">
                    <div className="max-w-4xl">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="flex items-center space-x-3 mb-6"
                        >
                            <Zap className="w-5 h-5 text-neon-green fill-neon-green" />
                            <span className="text-neon-green font-mono text-sm tracking-widest uppercase">Deep-Tech Security Defense</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-6xl md:text-8xl font-black mb-8 tracking-tighter text-foreground"
                        >
                            THE <span className="text-foreground/20">HARDENING</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-foreground/50 leading-relaxed font-body max-w-2xl"
                        >
                            Beyond policy. We provide the technical enforcement required to deploy AI systems that are resilient to adversarial threats.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Technical Services Grid */}
            <Section className="bg-card-bg/20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="p-10 bg-card-bg border border-card-border rounded-3xl hover:border-neon-green/30 transition-all duration-500 hover:shadow-[0_0_30px_rgba(46,204,113,0.1)] group"
                        >
                            <div className="flex justify-between items-start mb-8">
                                <div className="w-14 h-14 rounded-xl bg-neon-green/10 border border-neon-green/20 flex items-center justify-center">
                                    <service.icon className="w-7 h-7 text-neon-green" />
                                </div>
                                <span className="text-[10px] font-mono text-foreground/30 uppercase tracking-[0.2em] border border-card-border px-3 py-1 rounded-full">
                                    {service.tag}
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold mb-4 text-foreground">{service.title}</h3>
                            <p className="text-foreground/40 leading-relaxed text-sm mb-8">
                                {service.description}
                            </p>
                            <div className="flex items-center space-x-2 text-neon-green font-mono text-[10px] uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                                <code>{service.title.toLowerCase().replace(" ", "_")}.assess()</code>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Engineering Showcase */}
            <Section>
                <div className="glass-card overflow-hidden border-neon-green/10">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 text-foreground">
                            <h2 className="text-3xl font-bold mb-6">Secure-by-Design <br />Pipelines</h2>
                            <div className="space-y-6">
                                {[
                                    { icon: Code2, label: "API Hardening", desc: "Encryption & Rate Limiting" },
                                    { icon: Lock, label: "RBAC Orchestration", desc: "Granular Access Control" },
                                    { icon: Shield, label: "Real-time Monitoring", desc: "Threat Detection Loops" },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center space-x-4">
                                        <div className="p-2 bg-foreground/5 rounded-lg">
                                            <item.icon className="w-5 h-5 text-neon-green" />
                                        </div>
                                        <div>
                                            <p className="font-bold text-sm uppercase tracking-widest">{item.label}</p>
                                            <p className="text-xs text-foreground/40">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-neon-green/10 to-transparent p-12 flex items-center justify-center border-l border-card-border">
                            <div className="relative">
                                <div className="absolute inset-0 bg-neon-green rounded-full blur-[60px] opacity-20" />
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
