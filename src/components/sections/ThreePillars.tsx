"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Building2, ClipboardList, Gauge, Scale, Sparkles } from "lucide-react";
import Section from "../ui/Section";

const reasons = [
    {
        title: "Built for Real AI Governance Challenges",
        description: "We don't deal in templates or theory. Every framework, assessment, and workshop is grounded in hands-on AI governance work and the regulations reshaping the field.",
        icon: ClipboardList,
    },
    {
        title: "Enterprise-Grade Governance, Without the Overhead",
        description: "You face the same AI regulations as the largest firms, rarely with the same budget. We bridge that gap with focused, right-sized support free of consulting bloat.",
        icon: Scale,
    },
    {
        title: "A Decade of Regulated-Industry Experience",
        description: "Ten-plus years partnering with banks, insurers, and fintechs on governance, risk, and compliance, so we already understand your regulators and your pressures.",
        icon: Building2,
    },
    {
        title: "AI Specialists, Not Latecomers",
        description: "Our consultants were building and scaling AI systems long before generative AI hit the headlines, from model development and explainability to enterprise AI strategy.",
        icon: Sparkles,
    },
    {
        title: "Quick to Start, Designed to Scale",
        description: "Begin with a 60-minute board briefing or a 7-working-day AI risk diagnostic, then grow into ISO 42001 readiness, full frameworks, and embedded oversight.",
        icon: Gauge,
    },
    {
        title: "Practitioner-Led, Regulator-Aware",
        description: "We combine technical, legal, and policy expertise with a clear view of what auditors, regulators, and boards expect, so we speak both languages fluently.",
        icon: BadgeCheck,
    },
];

const ThreePillars = () => {
    return (
        <Section id="why" className="border-y border-card-border bg-dark-charcoal">
            <div className="max-w-3xl">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">Why AIPurview</div>
                <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">AI governance partners who&apos;ve done the work, not just the theory.</h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/65">
                    A decade of regulated-industry experience combined with deep, hands-on AI expertise, so you can adopt AI responsibly, prove compliance, and scale with confidence.
                </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {reasons.map((reason, index) => (
                    <motion.div
                        key={reason.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.07 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <reason.icon className="mb-5 h-7 w-7 text-brand-orange" />
                        <h3 className="text-lg font-bold leading-tight text-foreground">{reason.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/60">{reason.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ThreePillars;
