"use client";

import { motion } from "framer-motion";
import { Search, ShieldPlus, Cog, Rocket } from "lucide-react";
import Section from "../ui/Section";

const steps = [
    {
        title: "Discovery & Context",
        description: "We begin by understanding your AI roadmap, organizational structure, and jurisdictional compliance requirements.",
        icon: Search,
    },
    {
        title: "Strategic Gap Analysis",
        description: "Our experts map your current systems against the EU AI Act, ISO 42001, and NIST frameworks to identify critical risks.",
        icon: ShieldPlus,
    },
    {
        title: "Technical Hardening",
        description: "We implement technical guardrails, adversarial defenses, and robust governance policies to secure your intelligence.",
        icon: Cog,
    },
    {
        title: "Sustained Governance",
        description: "Ongoing fractional leadership (vCISO) ensures you remain compliant and secure as regulations and tech evolve.",
        icon: Rocket,
    },
];

const Process = () => {
    return (
        <Section className="bg-background">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-black mb-6 text-foreground">The AIPurview <span className="text-neon-blue">Method</span></h2>
                <p className="text-foreground/50 max-w-2xl mx-auto">
                    A standardized, rigorous approach to securing enterprise AI. We bridge the gap from initial assessment to ongoing fractional leadership.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="relative p-8 glass-card border-card-border group"
                    >
                        <div className="text-neon-blue/20 text-6xl font-black absolute top-4 right-4 group-hover:text-neon-blue/40 transition-colors">
                            0{index + 1}
                        </div>
                        <div className="w-14 h-14 rounded-2xl bg-neon-blue/10 border border-neon-blue/20 flex items-center justify-center mb-8">
                            <step.icon className="w-7 h-7 text-neon-blue" />
                        </div>
                        <h3 className="text-xl font-bold mb-4 text-foreground">{step.title}</h3>
                        <p className="text-foreground/40 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
