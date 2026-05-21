"use client";

import { motion } from "framer-motion";
import { GraduationCap, ArrowRight, Gavel, ShieldAlert } from "lucide-react";
import Link from "next/link";
import Section from "../ui/Section";

const pillars = [
    {
        title: "AI Governance & Assurance",
        description: "Embed Security and Privacy oversight into AI systems to ensure compliance with AI regulations.",
        icon: Gavel,
        href: "/ai-risk-and-governance",
        color: "text-neon-blue",
    },
    {
        title: "AI Security Assessment",
        description: "Evaluate AI ecosystem to identify vulnerabilities, mitigate adversarial risks and ensure alignment with standards.",
        icon: ShieldAlert,
        href: "/architecture",
        color: "text-neon-green",
    },
    {
        title: "AI Trainings and Workshops",
        description: "Collaborative trainings to align stakeholders, define safeguards, and operationalize AI security with confidence.",
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
