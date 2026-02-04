"use client";

import { motion } from "framer-motion";
import { Gavel, Scale, ShieldAlert, FileCheck, ArrowRight, Download } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const clauses = [
    {
        id: "engagement",
        title: "Professional Engagement",
        icon: Scale,
        content: "AIPurview provides informational and advisory content. Usage of this platform does not establish a formal consulting relationship. Legal and technical efficacy is established only via formal Master Service Agreements (MSA)."
    },
    {
        id: "ip",
        title: "Intellectual Property",
        icon: FileCheck,
        content: "The 'AIPurview Method', proprietary risk frameworks, and all technical publications are protected by EU intellectual property laws. Unauthorized reproduction, metadata scraping, or AI training on our content is strictly prohibited."
    },
    {
        id: "liability",
        title: "Liability & Compliance",
        icon: ShieldAlert,
        content: "While we provide elite advisory, ultimate AI Act compliance remains the responsibility of your organization. AIPurview facilitates the process through expert guidance and technical hardening."
    },
    {
        id: "jurisdiction",
        title: "EU Jurisdiction",
        icon: Gavel,
        content: "These terms are governed by the laws of the European Union. Any disputes arising from usage of this site shall be resolved in accordance with established EU digital service regulations."
    }
];

const TermsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            {/* Premium Header */}
            <section className="pt-48 pb-24 relative overflow-hidden border-b border-card-border">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.02]" />
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(46,204,113,0.05)_0%,transparent_100%)]" />

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neon-green/30 bg-neon-green/10 mb-8">
                            <Scale className="w-4 h-4 text-neon-green" />
                            <span className="text-[10px] font-bold uppercase tracking-widest text-neon-green">Governance Framework</span>
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            Terms of <br />
                            <span className="bg-gradient-to-r from-neon-green to-neon-blue bg-clip-text text-transparent">Use</span>
                        </h1>
                        <p className="text-foreground/50 text-xl leading-relaxed">
                            The legal foundation for elite AI security consulting and digital engagement.
                        </p>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div className="flex flex-col lg:flex-row gap-16">
                    {/* Sticky ToC Sidebar */}
                    <div className="lg:w-1/4">
                        <div className="sticky top-32 space-y-2">
                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground/30 mb-6 ml-4">Clause Directory</p>
                            {clauses.map((clause) => (
                                <button
                                    key={clause.id}
                                    onClick={() => document.getElementById(clause.id)?.scrollIntoView({ behavior: 'smooth' })}
                                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-foreground/5 transition-all text-sm font-medium text-foreground/50 hover:text-neon-green group flex items-center justify-between"
                                >
                                    <span>{clause.title}</span>
                                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="lg:w-3/4 space-y-8">
                        {clauses.map((clause, index) => (
                            <motion.div
                                key={clause.id}
                                id={clause.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass-card p-10 md:p-12 border-card-border"
                            >
                                <div className="flex items-start gap-8">
                                    <div className="w-14 h-14 rounded-2xl bg-foreground/5 border border-card-border flex items-center justify-center shrink-0">
                                        <clause.icon className="w-7 h-7 text-neon-green" />
                                    </div>
                                    <div>
                                        <h2 className="text-2xl font-black mb-6 text-foreground">{clause.title}</h2>
                                        <div className="prose prose-invert">
                                            <p className="text-foreground/60 leading-relaxed text-lg">
                                                {clause.content}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}

                        <div className="p-12 rounded-3xl border-2 border-dashed border-card-border flex flex-col md:flex-row items-center justify-between gap-8 mt-16 group hover:border-neon-green/30 transition-colors">
                            <div>
                                <h3 className="text-xl font-bold mb-2">Technical Documentation</h3>
                                <p className="text-sm text-foreground/50 leading-relaxed">Download our Article 11 technical compliance roadmap for enterprises.</p>
                            </div>
                            <button className="flex items-center gap-2 px-6 py-3 bg-foreground/5 rounded-xl font-bold hover:bg-neon-green hover:text-white transition-all">
                                <Download className="w-4 h-4" />
                                <span>PDF Summary</span>
                            </button>
                        </div>

                        <div className="pt-10 border-t border-card-border">
                            <p className="text-foreground/30 text-xs text-center md:text-left">Last Updated: February 4, 2026 | AIPurview.com Legal Division</p>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default TermsPage;
