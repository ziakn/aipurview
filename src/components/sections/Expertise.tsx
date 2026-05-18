"use client";

import { motion } from "framer-motion";
import { Award, Target, Zap, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";

const advantages = [
    {
        title: "Boutique Focus",
        description: "We aren't a generic consulting firm. We specialize exclusively in AI security and governance for the EU market.",
        icon: Target,
    },
    {
        title: "Fractional Efficiency",
        description: "Get elite C-suite expertise at a fraction of the cost of a full-time hire, scaling with your organizational needs.",
        icon: Zap,
    },
    {
        title: "Regulatory Precision",
        description: "Our experts live and breathe the EU AI Act, GDPR, and ISO standards, ensuring no compliance gap is left unaddressed.",
        icon: Award,
    },
    {
        title: "Technical Depth",
        description: "We don't just write policies; we implement technical guardrails and adversarial defenses to harden your AI pipelines.",
        icon: ShieldCheck,
    },
];

const Expertise = () => {
    return (
        <Section className="bg-background">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight text-foreground">
                        Specialist work, not generic consulting
                    </h2>
                    <p className="text-foreground/65 text-lg mb-10 leading-relaxed">
                        In the rapidly evolving AI landscape, generic security isn&apos;t enough. AIPurview provides high-impact, specialized expertise that larger firms simply can&apos;t match for speed and depth.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        {advantages.map((adv, index) => (
                            <motion.div
                                key={adv.title}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="space-y-3"
                            >
                                <div className="flex items-center space-x-3">
                                    <adv.icon className="w-5 h-5 text-neon-green" />
                                    <h4 className="font-semibold text-foreground">{adv.title}</h4>
                                </div>
                                <p className="text-foreground/60 text-sm">{adv.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="glass-card p-8 lg:p-10">
                        <div className="text-sm font-medium text-foreground/55 mb-8">Typical engagement shape</div>
                        <div className="space-y-6">
                            {["Risk and compliance baseline", "Architecture review and control mapping", "Executive reporting and remediation plan"].map((item, index) => (
                                <div key={item} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-card-border text-sm font-semibold text-foreground/60">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item}</h3>
                                        <p className="mt-1 text-sm text-foreground/55">
                                            Practical evidence, decisions, and next steps your teams can use.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Expertise;
