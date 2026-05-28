"use client";

import { motion } from "framer-motion";
import { Search, ShieldPlus, Cog, Rocket } from "lucide-react";
import Section from "../ui/Section";

const steps = [
    {
        title: "Prove Risk Oversight",
        description: "Connect AI, cybersecurity, and privacy governance to business risk decisions leaders can defend.",
        icon: Search,
    },
    {
        title: "Validate Security Controls",
        description: "Review safeguards, document evidence, and strengthen the control environment around AI systems.",
        icon: ShieldPlus,
    },
    {
        title: "Meet Privacy Regulations",
        description: "Align data handling, oversight, and operational processes with privacy expectations.",
        icon: Cog,
    },
    {
        title: "Operationalize AI Governance",
        description: "Move from framework intent to repeatable workflows, training, and third-party risk management.",
        icon: Rocket,
    },
];

const Process = () => {
    return (
        <Section className="bg-background">
            <div className="text-center mb-20">
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-foreground">Turning Governance Into Execution</h2>
                <p className="text-foreground/60 max-w-2xl mx-auto">
                    We help organizations translate strategy into execution, quantifying cyber risk, enhancing maturity and enabling trusted outcomes.
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
                        className="relative p-7 glass-card border-card-border"
                    >
                        <div className="text-brand-orange/35 text-4xl font-black absolute top-6 right-6">
                            0{index + 1}
                        </div>
                        <div className="w-11 h-11 rounded-md bg-dark-charcoal border border-card-border flex items-center justify-center mb-8">
                            <step.icon className="w-5 h-5 text-brand-orange" />
                        </div>
                        <h3 className="text-lg font-bold mb-4 text-foreground">{step.title}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">
                            {step.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
