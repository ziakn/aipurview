"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Gavel, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Section from "../ui/Section";

const pillars = [
    {
        title: "AI Governance & Compliance",
        description: "Aligning your systems with the EU AI Act, ISO 42001, and NIST frameworks. We guide you from gap analysis to audit readiness.",
        icon: Gavel,
        href: "/governance",
        color: "text-neon-blue",
    },
    {
        title: "AI Architecture & Hardening",
        description: "Deep-tech security assessments, red teaming, and guardrail implementation for LLMs and enterprise AI pipelines.",
        icon: ShieldAlert,
        href: "/architecture",
        color: "text-neon-green",
    },
    {
        title: "Training & Awareness",
        description: "Elevating the human element. Executive briefings and technical workshops tailored for securing the intelligence era.",
        icon: GraduationCap,
        href: "/training",
        color: "text-neon-purple",
    },
];

const ThreePillars = () => {
    return (
        <Section className="bg-background">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {pillars.map((pillar, index) => (
                    <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="glass-card p-8 transition-colors duration-200 hover:border-foreground/25 group"
                    >
                        <pillar.icon className={`w-9 h-9 ${pillar.color} mb-8`} />
                        <h3 className="text-2xl font-semibold mb-4 text-foreground">{pillar.title}</h3>
                        <p className="text-foreground/60 mb-8 leading-relaxed">
                            {pillar.description}
                        </p>

                        <Link
                            href={pillar.href}
                            className="inline-flex items-center space-x-2 text-sm font-semibold text-foreground hover:text-neon-blue transition-colors"
                        >
                            <span>Explore {pillar.title}</span>
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default ThreePillars;
