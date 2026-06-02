"use client";

import { motion } from "framer-motion";
import Section from "../ui/Section";

const steps = [
    { title: "Assess", description: "Map your AI systems, data flows, and risk exposure against the standards that apply to you." },
    { title: "Govern", description: "Put oversight, policies, and accountability in place so AI decisions stay defensible." },
    { title: "Validate", description: "Test controls and document evidence to prove your AI is secure and compliant." },
    { title: "Operationalize", description: "Turn governance into repeatable workflows, training, and third-party oversight that scale." },
];

const Process = () => {
    return (
        <Section id="method" className="bg-background pt-4">
            <div className="mx-auto max-w-3xl text-center">
                <div className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">How We Work</div>
                <h2 className="mt-4 text-3xl font-black leading-tight text-foreground md:text-5xl">Turning governance into execution.</h2>
                <p className="mt-5 text-lg leading-relaxed text-foreground/65">
                    We help organizations move AI strategy into practice by proving oversight, validating controls, and building governance that scales.
                </p>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                {steps.map((step, index) => (
                    <motion.div
                        key={step.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.45, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="glass-card p-6"
                    >
                        <div className="text-3xl font-black text-brand-orange/45">0{index + 1}</div>
                        <h3 className="mt-4 text-lg font-bold text-foreground">{step.title}</h3>
                        <p className="mt-3 text-sm leading-relaxed text-foreground/60">{step.description}</p>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
};

export default Process;
