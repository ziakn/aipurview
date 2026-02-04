"use client";

import { motion } from "framer-motion";
import { Shield, Eye, Lock, FileText, ArrowRight, Share2 } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const sections = [
    {
        id: "collection",
        title: "Data Collection",
        icon: Eye,
        content: "AIPurview is committed to protecting your professional data. we collect minimal data necessary to provide our boutique consulting services, typically limited to professional contact information and technical metadata for secure site operation."
    },
    {
        id: "compliance",
        title: "Regulatory Alignment",
        icon: Shield,
        content: "As specialists in European regulation, we adhere to the highest standards of data protection. All data processing is performed within the European Union in strict accordance with GDPR and the AI Act's transparency requirements."
    },
    {
        id: "security",
        title: "Security Measures",
        icon: Lock,
        content: "We implement industry-leading technical and organizational measures, including encryption and strict access controls, to safeguard your information against unauthorized access or disclosure."
    },
    {
        id: "rights",
        title: "Professional Rights",
        icon: FileText,
        content: "Under GDPR, professional contacts have the right to access, rectify, or erase their data. We provide streamlined processes for exercising these rights."
    }
];

const PrivacyPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            {/* Premium Header */}
            <section className="pt-48 pb-24 relative overflow-hidden border-b border-card-border">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.02]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,194,255,0.05)_0%,transparent_100%)]" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 mb-8">
                            <Lock className="w-4 h-4 text-neon-blue" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neon-blue">Trust & Transparency</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Privacy <br />
                            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">Policy</span>
                        </h1>
                        <p className="text-foreground/50 text-xl leading-relaxed">
                            How we handle professional intelligence in the era of automated governance.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky ToC Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mb-6 ml-4">Table of Contents</p>
                            {sections.map((section) => (
                                <button
                                    key={section.id}
                                    onClick={() => document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 transition-all text-sm font-medium text-foreground/50 hover:text-neon-blue group flex items-center justify-between"
                                >
                                    <span>{section.title}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 space-y-8">
                        {sections.map((section, index) => (
                            <motion.div
                                key={section.id}
                                id={section.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 md:p-12 border-card-border"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-card-border flex items-center justify-center shrink-0">
                                        <section.icon className="w-7 h-7 text-neon-blue" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black mb-6 text-foreground">{section.title}</h2>
                                        <div className="prose prose-invert">
                                            <p className="text-foreground/60 leading-relaxed text-lg">
                                                {section.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="p-12 rounded-3xl bg-neon-blue/5 border border-neon-blue/20 flex flex-col md:flex-row items-center justify-between gap-8 mt-16">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Have specific inquiries?</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">Our Data Protection Officer is available for technical discussions.</p>
                            </div>
                            <a href="mailto:info@aipurview.com" className="btn-primary whitespace-nowrap">
                                Email DPO
                            </a>
                        </div>

                        <div className="pt-10 border-t border-card-border flex items-center justify-between">
                            <p className="text-foreground/30 text-xs">Last Updated: February 4, 2026</p>
                            <div className="flex items-center space-x-4">
                                <span className="text-foreground/30 text-xs uppercase tracking-widest font-bold">Share Policy</span>
                                <button className="p-2 bg-foreground/5 rounded-lg hover:text-neon-blue transition-colors">
                                    <Share2 className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default PrivacyPage;
