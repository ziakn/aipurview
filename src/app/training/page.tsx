"use client";

import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, Code2, AlertTriangle, ShieldCheck } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const trainingModules = [
    {
        title: "Executive Briefings",
        role: "Founders, C-Suite, Board",
        focus: "Liability, Strategic Risk, Investment Oversight",
        icon: Briefcase,
    },
    {
        title: "Technical Workshops",
        role: "DevOps, ML Engineers, Data Science",
        focus: "Secure Coding, Prompt Injection Defense, Data Privacy",
        icon: Code2,
    },
    {
        title: "General Awareness",
        role: "All Employees",
        focus: "Safe AI Usage, Shadow AI Prevention, Phishing",
        icon: Users,
    },
];

const matrix = [
    { role: "Executive", strategy: "●", risk: "●", technical: "○", compliance: "●" },
    { role: "Developer", strategy: "○", risk: "●", technical: "●", compliance: "●" },
    { role: "Operations", strategy: "○", risk: "●", technical: "●", compliance: "○" },
    { role: "General Staff", strategy: "○", risk: "○", technical: "○", compliance: "●" },
];

const TrainingPage = () => {
    return (
        <main className="bg-deep-black min-h-screen text-white">
            <Navbar />

            {/* Hero */}
            <section className="pt-40 pb-20 relative overflow-hidden text-center">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(155,89,182,0.1)_0%,transparent_70%)]" />
                </div>
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="w-20 h-20 bg-neon-purple/20 border border-neon-purple/30 rounded-3xl flex items-center justify-center mx-auto mb-8"
                    >
                        <GraduationCap className="w-10 h-10 text-neon-purple" />
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black mb-8"
                    >
                        The Human Element
                    </motion.h1>
                    <p className="text-white/60 text-xl max-w-2xl mx-auto mb-12">
                        Technology is only as secure as the people who operate it. We provide role-specific education to foster a culture of AI safety.
                    </p>
                </div>
            </section>

            {/* Modules */}
            <Section className="bg-dark-charcoal/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainingModules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 hover:border-neon-purple/30 transition-all text-center group"
                        >
                            <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:rotate-6 transition-transform">
                                <module.icon className="w-8 h-8 text-neon-purple" />
                            </div>
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors">{module.title}</h3>
                            <p className="text-neon-purple/70 text-xs font-bold uppercase tracking-widest mb-6">{module.role}</p>
                            <p className="text-white/50 text-sm leading-relaxed">{module.focus}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Training Matrix */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold mb-12 text-center">Curriculum Matrix</h2>
                    <div className="overflow-x-auto ring-1 ring-white/10 rounded-3xl">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-white/5 uppercase text-xs font-bold tracking-[0.2em] text-white/40">
                                    <th className="px-8 py-6">Target Role</th>
                                    <th className="px-8 py-6">AI Strategy</th>
                                    <th className="px-8 py-6">Risk Mgmt</th>
                                    <th className="px-8 py-6">Technical</th>
                                    <th className="px-8 py-6">Compliance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-white/5">
                                {matrix.map((row) => (
                                    <tr key={row.role} className="hover:bg-white/[0.02] transition-colors group">
                                        <td className="px-8 py-6 font-bold text-white/80 group-hover:text-white transition-colors">
                                            {row.role}
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.strategy === "●" ? "text-neon-purple" : "text-white/10"}>
                                                {row.strategy === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.risk === "●" ? "text-neon-purple" : "text-white/10"}>
                                                {row.risk === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.technical === "●" ? "text-neon-purple" : "text-white/10"}>
                                                {row.technical === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.compliance === "●" ? "text-neon-purple" : "text-white/10"}>
                                                {row.compliance === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-white/30 text-[10px] mt-6 flex items-center justify-center space-x-2">
                        <AlertTriangle className="w-3 h-3 text-neon-purple" />
                        <span>Modules can be customized based on organizational risk profile</span>
                    </p>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default TrainingPage;
