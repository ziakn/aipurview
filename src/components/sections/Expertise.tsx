"use client";

import { motion } from "framer-motion";
import { Award, Target, Zap, ShieldCheck } from "lucide-react";
import Section from "../ui/Section";

const advantages = [
    {
        title: "AI Governance & Assurance",
        description: "Embed Security and Privacy oversight into AI systems to ensure compliance with AI regulations.",
        icon: Target,
    },
    {
        title: "AI Trainings and Workshops",
        description: "Collaborative trainings to align stakeholders, define safeguards, and operationalize AI security with confidence.",
        icon: Zap,
    },
    {
        title: "vCISO Leadership & Security Strategy",
        description: "Executive-level security oversight, strategic roadmaps and board-facing risk reporting.",
        icon: Award,
    },
    {
        title: "AI Security Assessment",
        description: "Evaluate AI ecosystem to identify vulnerabilities, mitigate adversarial risks and ensure alignment with standards.",
        icon: ShieldCheck,
    },
];

const Expertise = () => {
    return (
        <Section className="bg-background">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="lg:w-1/2">
                    <h2 className="text-3xl md:text-5xl font-semibold mb-8 leading-tight text-foreground">
                        Tailored AI Governance Services Aligned with Your Strategic Objectives
                    </h2>
                    <p className="text-foreground/65 text-lg mb-10 leading-relaxed">
                        We deliver modular, compliance-ready solutions that map directly to your risk posture, regulatory mandates, and operational goals.
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
                        <div className="text-sm font-medium text-foreground/55 mb-8">Our Services</div>
                        <div className="space-y-6">
                            {["Protect your data in the AI era", "Enforce privacy and compliance", "Enable ethical oversight across every touchpoint"].map((item, index) => (
                                <div key={item} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-card-border text-sm font-semibold text-foreground/60">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-foreground">{item}</h3>
                                        <p className="mt-1 text-sm text-foreground/55">
                                            AIPurview empowers organizations to harness AI responsibly without disrupting the business.
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
