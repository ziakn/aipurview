"use client";

import { motion } from "framer-motion";
import { FileSearch, Layers, ClipboardList, MoveRight, HelpCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const tiers = [
    {
        id: "Tier 1",
        title: "Gap Analysis",
        subtitle: "EU AI Act Risk Categorization",
        description: "Deep dive into your AI inventory to identify Prohibited, High-Risk, and Limited Risk systems according to Title II of the EU AI Act.",
        icon: FileSearch,
    },
    {
        id: "Tier 2",
        title: "Framework Mapping",
        subtitle: "Mapping GDPR + ISO + NIST",
        description: "Aligning your existing controls with ISO 42001 and NIST AI RMF to create a single source of truth for compliance.",
        icon: Layers,
    },
    {
        id: "Tier 3",
        title: "Audit Readiness",
        subtitle: "Technical Documentation",
        description: "Preparing Article 11 technical documentation and Article 12 logging requirements for European regulators (DPAs).",
        icon: ClipboardList,
    },
];

const steps = [
    "Inventory Discovery",
    "Risk Classification",
    "Control Implementation",
    "Technical Documentation",
    "Conformity Assessment",
    "Market Entry",
];

const GovernancePage = () => {
    return (
        <main className="bg-deep-black min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 relative border-b border-white/5">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-12">
                        <div className="md:w-3/5">
                            <h1 className="text-5xl md:text-7xl font-black mb-8">
                                Your <span className="text-eu-blue bg-white/10 px-4 rounded-xl">License</span> <br />
                                to Operate
                            </h1>
                            <p className="text-white/60 text-xl leading-relaxed mb-8">
                                Navigating the world's most comprehensive AI regulations doesn't have to be a blockade. We turn compliance into a competitive advantage.
                            </p>
                            <div className="flex space-x-4">
                                <div className="px-4 py-2 bg-eu-blue/10 border border-eu-blue/30 rounded-lg text-xs font-bold uppercase tracking-widest text-[#5d83ff]">
                                    ISO 42001 Certified Experts
                                </div>
                                <div className="px-4 py-2 bg-yellow-400/10 border border-yellow-400/30 rounded-lg text-xs font-bold uppercase tracking-widest text-yellow-400/80">
                                    EU AI Act Ready
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/5 glass-card p-8 border-eu-blue/20">
                            <div className="flex items-center space-x-3 mb-6">
                                <HelpCircle className="w-6 h-6 text-eu-blue" />
                                <h4 className="font-bold">Need a Gap Analysis?</h4>
                            </div>
                            <p className="text-sm text-white/50 mb-6">
                                Find out where you stand against the EU AI Act requirements in 48 hours.
                            </p>
                            <button className="w-full py-3 bg-eu-blue text-white rounded-xl font-bold hover:shadow-[0_0_20px_rgba(0,51,153,0.5)] transition-all">
                                Request Assessment
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Compliance Tiers */}
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {tiers.map((tier, index) => (
                        <div key={tier.id} className="group flex flex-col items-center text-center">
                            <div className="w-20 h-20 rounded-full bg-eu-blue/5 border border-eu-blue/10 flex items-center justify-center mb-8 relative">
                                <div className="absolute top-0 left-0 w-full h-full rounded-full border border-eu-blue/20 animate-ping opacity-20" />
                                <tier.icon className="w-8 h-8 text-eu-blue" />
                                <div className="absolute -top-2 -right-2 bg-eu-blue text-white text-[10px] font-black px-2 py-1 rounded">
                                    {tier.id}
                                </div>
                            </div>
                            <h3 className="text-2xl font-bold mb-2">{tier.title}</h3>
                            <p className="text-eu-blue/70 text-xs font-bold uppercase tracking-widest mb-4">{tier.subtitle}</p>
                            <p className="text-white/50 leading-relaxed text-sm">{tier.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Roadmap */}
            <Section className="bg-dark-charcoal/20">
                <h2 className="text-3xl font-bold mb-16 text-center">Roadmap to Compliance</h2>
                <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center max-w-5xl mx-auto space-y-12 md:space-y-0">
                    {/* Connecting Line (hidden on mobile) */}
                    <div className="hidden md:block absolute top-[28px] left-0 right-0 h-0.5 bg-gradient-to-r from-eu-blue/0 via-eu-blue/50 to-eu-blue/0" />

                    {steps.map((step, i) => (
                        <div key={step} className="relative z-10 flex md:flex-col items-center space-x-6 md:space-x-0 group">
                            <div className="w-14 h-14 rounded-2xl bg-deep-black border-2 border-eu-blue/30 flex items-center justify-center text-eu-blue font-black shadow-[0_0_15px_rgba(0,51,153,0.2)] md:mb-6 group-hover:bg-eu-blue group-hover:text-white transition-all duration-300">
                                {i + 1}
                            </div>
                            <span className="text-sm font-bold text-white/70 uppercase tracking-tighter md:text-center max-w-[100px]">
                                {step}
                            </span>
                        </div>
                    ))}
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default GovernancePage;
