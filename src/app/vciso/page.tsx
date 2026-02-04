"use client";

import { motion } from "framer-motion";
import { Shield, BarChart3, Users, ClipboardCheck, ArrowRight, CheckCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

const scope = [
    {
        title: "Strategy & Roadmap",
        description: "Defining long-term AI security goals and alignment with business objectives.",
        icon: Shield,
    },
    {
        title: "Risk Appetite & Management",
        description: "Quantifying and managing AI-specific risks within your organizational tolerance.",
        icon: BarChart3,
    },
    {
        title: "Board Reporting",
        description: "Translating technical AI risks into executive-level insights for board members.",
        icon: Users,
    },
    {
        title: "Vendor Management",
        description: "Assessing and auditing third-party AI providers and SaaS integrations.",
        icon: ClipboardCheck,
    },
];

const VCISOPage = () => {
    return (
        <main className="bg-deep-black min-h-screen">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-blue/10 rounded-full blur-[120px] -mr-64 -mt-64" />
                <div className="container mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-8"
                    >
                        Executive-Level <br />
                        <span className="text-neon-blue font-mono uppercase tracking-tighter">Security on Demand</span>
                    </motion.h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
                        Fractional leadership for the AI era. Strategic guidance, risk governance, and technical oversight without the full-time overhead.
                    </p>
                    <Button size="lg">Inquire About vCISO Partnerships</Button>
                </div>
            </section>

            {/* Service Scope */}
            <Section className="bg-dark-charcoal/20">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Service Scope</h2>
                    <p className="text-white/50 max-w-2xl">Our fractional CISOs integrate with your leadership to provide comprehensive oversight of your AI ecosystem.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {scope.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-neon-blue/30 transition-all group"
                        >
                            <item.icon className="w-10 h-10 text-neon-blue mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Why vCISO? */}
            <Section>
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="lg:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Fractional AI CISO?</h2>
                        <div className="space-y-6">
                            {[
                                "Cost-Effective: 1/4 the cost of a full-time executive hire.",
                                "Instant Expertise: Immediate access to senior-level AI security experience.",
                                "Flexible Scale: Engagement scales up or down based on your roadmap.",
                                "Unbiased Perspective: Third-party oversight free from internal politics.",
                            ].map((text, i) => (
                                <div key={i} className="flex items-start space-x-4">
                                    <CheckCircle className="w-6 h-6 text-neon-green shrink-0 mt-1" />
                                    <p className="text-white/70 text-lg">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="lg:w-1/2 w-full">
                        <div className="glass-card p-10 relative border-neon-green/10">
                            <div className="absolute inset-0 bg-neon-green/5 rounded-2xl" />
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-6">Investment Comparison</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-end">
                                        <span className="text-white/50">Full-time Senior CISO</span>
                                        <span className="text-white font-bold text-xl">€250k+ /yr</span>
                                    </div>
                                    <div className="w-full h-2 bg-white/5 rounded-full">
                                        <div className="w-full h-full bg-white/20 rounded-full" />
                                    </div>
                                    <div className="flex justify-between items-end pt-4">
                                        <span className="text-neon-green font-bold">AIPurview vCISO</span>
                                        <span className="text-neon-green font-bold text-2xl">From €5k /mo</span>
                                    </div>
                                    <div className="w-full h-3 bg-white/5 rounded-full overflow-hidden">
                                        <motion.div
                                            initial={{ width: 0 }}
                                            whileInView={{ width: "25%" }}
                                            transition={{ duration: 1, ease: "easeOut" }}
                                            className="h-full bg-neon-green"
                                        />
                                    </div>
                                    <p className="text-[10px] text-white/30 uppercase tracking-widest pt-4">*Estimated market rates 2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default VCISOPage;
