"use client";

import { motion } from "framer-motion";
import { Check, ClipboardCheck, LockKeyhole, Search, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";

const features = [
    {
        title: "Govern AI with Confidence",
        description: "Establish ownership, policies, and decision rights for AI so adoption stays accountable, explainable, and aligned to your risk appetite.",
        icon: ShieldCheck,
    },
    {
        title: "Assess AI Systems for Risk",
        description: "Evaluate models, pipelines, and integrations for security weaknesses, adversarial exposure, and failure modes before they reach production.",
        icon: Search,
    },
    {
        title: "Protect Data Across the AI Lifecycle",
        description: "Embed privacy and data protection into how AI systems collect, process, and learn so sensitive data stays controlled.",
        icon: LockKeyhole,
    },
    {
        title: "Operationalize Responsible AI",
        description: "Turn frameworks into repeatable workflows, training, and oversight that keep AI safe, compliant, and audit-ready as you scale.",
        icon: ClipboardCheck,
    },
];

const proofPoints = [
    "AI Governance Frameworks (ISO 42001, EU AI Act)",
    "Audit-Ready AI Evidence",
    "AI Risk Training & Workshops",
    "Third-Party & Model Risk Management",
];

const ValueProposition = () => {
    return (
        <>
            <Section id="governance" className="bg-background">
                <div className="max-w-3xl">
                    <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">Engineering Strategic AI Governance</div>
                    <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">One framework for trusted AI outcomes.</h2>
                    <p className="mt-5 text-lg leading-relaxed text-foreground/65">
                        Responsible AI needs more than policy. AIPurview unites governance, security, and privacy into one practical framework, translating AI strategy into evidence, controls, and trusted outcomes you can defend.
                    </p>
                </div>
                <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.45, delay: index * 0.08 }}
                            viewport={{ once: true }}
                            className="glass-card p-6"
                        >
                            <feature.icon className="mb-5 h-7 w-7 text-brand-orange" />
                            <h3 className="text-lg font-bold leading-tight text-foreground">{feature.title}</h3>
                            <p className="mt-3 text-sm leading-relaxed text-foreground/60">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            <section className="mx-auto max-w-[1180px] px-7 pb-16 md:pb-20">
                <div className="grid gap-8 rounded-2xl bg-[#2a1467] p-8 text-white md:p-12 lg:grid-cols-2 lg:items-center">
                    <div>
                        <div className="text-xs font-bold uppercase tracking-[0.16em] text-[#f3b98a]">Your Experienced Partner</div>
                        <h2 className="mt-4 text-3xl font-black leading-tight text-white md:text-4xl">Turning AI Governance into a Business Enabler.</h2>
                        <p className="mt-4 text-white/70">Practical, AI-focused governance that helps your teams manage risk without slowing the business down.</p>
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                        {proofPoints.map((point) => (
                            <div key={point} className="flex gap-3 rounded-lg border border-white/15 bg-white/5 p-4 text-sm font-semibold text-white/90">
                                <Check className="h-5 w-5 shrink-0 text-[#f3b98a]" />
                                <span>{point}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ValueProposition;
