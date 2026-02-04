"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";
import { motion } from "framer-motion";
import { Shield, Sparkles, Target } from "lucide-react";

const AboutPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 pb-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.05] dark:opacity-[0.02]" />
                <div className="container mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full border border-neon-blue/30 bg-neon-blue/10 mb-8"
                    >
                        <Shield className="w-4 h-4 text-neon-blue" />
                        <span className="text-[10px] font-bold uppercase tracking-widest text-neon-blue">About the Boutique</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                        Securing the <br />
                        <span className="bg-gradient-to-r from-neon-blue to-neon-green bg-clip-text text-transparent">
                            Intelligence Frontier
                        </span>
                    </h1>
                    <p className="text-foreground/60 text-xl max-w-3xl mx-auto leading-relaxed">
                        AIPurview was born from the need for high-impact, specialized AI security expertise in the world's most regulated market. We aren't a generic firm; we are a dedicated boutique for EU enterprises.
                    </p>
                </div>
            </section>

            <Section className="bg-foreground/5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div className="glass-card p-10 hover:border-neon-blue/50 transition-colors">
                        <Target className="w-12 h-12 text-neon-blue mb-8" />
                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                        <p className="text-foreground/50 leading-relaxed text-sm">
                            To bridge the gap between aggressive AI innovation and rigid European regulation, ensuring our clients can lead the market safely.
                        </p>
                    </div>
                    <div className="glass-card p-10 hover:border-neon-green/50 transition-colors">
                        <Sparkles className="w-12 h-12 text-neon-green mb-8" />
                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                        <p className="text-foreground/50 leading-relaxed text-sm">
                            Setting the global standard for AI governance, where security is seen not as a blockade, but as the ultimate competitive advantage.
                        </p>
                    </div>
                    <div className="glass-card p-10 hover:border-neon-purple/50 transition-colors">
                        <Shield className="w-12 h-12 text-neon-purple mb-8" />
                        <h3 className="text-2xl font-bold mb-4">Our Boutique Approach</h3>
                        <p className="text-foreground/50 leading-relaxed text-sm">
                            Elite fractional leadership (vCISO) and deep technical assessments delivered with a precision that larger firms cannot match.
                        </p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default AboutPage;
