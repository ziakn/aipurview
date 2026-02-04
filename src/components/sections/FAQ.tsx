"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Plus, Minus, HelpCircle } from "lucide-react";
import Section from "../ui/Section";

const faqs = [
    {
        question: "When does the EU AI Act officially apply to my enterprise?",
        answer: "The AI Act entered into force in August 2024. Most rules will apply in August 2026, but prohibitions on certain AI systems will apply as early as February 2025. AIPurview helps you navigate these specific deadlines based on your AI risk categorization.",
    },
    {
        question: "What is the difference between a full-time CISO and a fractional vCISO?",
        answer: "A full-time CISO is a permanent executive hire. A fractional vCISO provides the same high-level strategic leadership but at a fraction of the cost, scaling their hours and focus based on your specific projects or regulatory milestones.",
    },
    {
        question: "Do you provide technical implementation or just policy consulting?",
        answer: "Both. Unlike many legal-first firms, AIPurview has deep-tech capabilities. We help you implement technical guardrails (NeMo, LlamaGuard), perform adversarial red teaming, and harden your LLM pipelines.",
    },
    {
        question: "Is ISO 42001 mandatory for AI compliance?",
        answer: "While not explicitly mandatory by law, ISO 42001 is the international standard for AI Management Systems (AIMS). It is widely expected to be the primary 'Harmonized Standard' used to demonstrate conformity with the EU AI Act.",
    },
    {
        question: "Can you assist with remote delivery across all EU member states?",
        answer: "Yes. AIPurview is a remote-first boutique. We serve clients across the entire European Union, offering multi-language support (EN, DE, FR) and expertise in both EU-level and member-state specific DPA rulings.",
    },
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <Section>
            <div className="flex flex-col lg:flex-row gap-16">
                <div className="lg:w-1/3">
                    <div className="inline-flex items-center space-x-2 text-neon-purple text-xs font-bold uppercase tracking-widest mb-6">
                        <HelpCircle className="w-4 h-4" />
                        <span>Common Inquiries</span>
                    </div>
                    <h2 className="text-4xl font-black mb-6">Expert <br /><span className="text-neon-purple">Insights.</span></h2>
                    <p className="text-white/50 leading-relaxed mb-8">
                        Navigating the intersection of AI innovation and European regulation is complex. Here are answers to the questions we hear most often.
                    </p>
                    <div className="p-6 glass-card border-neon-purple/20 bg-neon-purple/5">
                        <p className="text-xs font-bold text-white mb-2">Still have questions?</p>
                        <p className="text-xs text-white/40 mb-4">Our experts are ready to provide a deep dive into your specific use case.</p>
                        <a href="/contact" className="text-xs font-bold text-neon-purple uppercase hover:underline">Book a deep dive →</a>
                    </div>
                </div>

                <div className="lg:w-2/3 space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`glass-card border-white/5 overflow-hidden transition-all duration-300 ${openIndex === index ? "bg-white/[0.03] border-white/20" : "hover:bg-white/[0.02]"}`}
                        >
                            <button
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                className="w-full p-6 text-left flex items-center justify-between"
                            >
                                <span className={`font-bold transition-colors ${openIndex === index ? "text-neon-purple" : "text-white/80"}`}>
                                    {faq.question}
                                </span>
                                <div className={`shrink-0 ml-4 p-2 rounded-lg ${openIndex === index ? "bg-neon-purple/20 text-neon-purple" : "bg-white/5 text-white/30"}`}>
                                    {openIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === index ? "auto" : 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                            >
                                <div className="px-6 pb-6 pt-0 text-white/50 text-sm leading-relaxed border-t border-white/5">
                                    <div className="pt-6">
                                        {faq.answer}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default FAQ;
