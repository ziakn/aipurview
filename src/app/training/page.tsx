"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Briefcase, Code2, GraduationCap, ShieldCheck, Users } from "lucide-react";
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
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="relative overflow-hidden border-b border-card-border pt-28 pb-14 md:pt-32 md:pb-20">
                <div className="container mx-auto px-6">
                    <div className="mx-auto max-w-4xl text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-md border border-card-border bg-card-bg"
                        >
                            <GraduationCap className="h-10 w-10 text-brand-orange" />
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-[clamp(2.75rem,5.6vw,5.75rem)] font-black leading-[1] tracking-[0] text-foreground"
                        >
                            The Human Element
                        </motion.h1>
                        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/60 md:text-xl">
                            Technology is only as secure as the people who operate it. We provide role-specific education to foster a culture of AI safety.
                        </p>
                    </div>
                </div>
            </section>

            <Section>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {trainingModules.map((module, index) => (
                        <motion.div
                            key={module.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 hover:border-brand-orange transition-colors group"
                        >
                            <div className="w-12 h-12 bg-dark-charcoal border border-card-border rounded-md flex items-center justify-center mb-6">
                                <module.icon className="w-6 h-6 text-brand-orange" />
                            </div>
                            <h3 className="text-2xl font-black mb-2 group-hover:text-brand-orange transition-colors text-foreground">{module.title}</h3>
                            <p className="text-brand-orange text-xs font-bold uppercase mb-6">{module.role}</p>
                            <p className="text-foreground/50 text-sm leading-relaxed">{module.focus}</p>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* Training Matrix */}
            <Section>
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl md:text-5xl font-black mb-12 text-center text-foreground">Curriculum Matrix</h2>
                    <div className="overflow-x-auto rounded-md border border-card-border bg-card-bg">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-dark-charcoal uppercase text-xs font-bold text-foreground/45">
                                    <th className="px-8 py-6">Target Role</th>
                                    <th className="px-8 py-6">AI Strategy</th>
                                    <th className="px-8 py-6">Risk Mgmt</th>
                                    <th className="px-8 py-6">Technical</th>
                                    <th className="px-8 py-6">Compliance</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-card-border">
                                {matrix.map((row) => (
                                    <tr key={row.role} className="hover:bg-foreground/[0.02] transition-colors group">
                                        <td className="px-8 py-6 font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                                            {row.role}
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.strategy === "●" ? "text-brand-orange" : "text-foreground/10"}>
                                                {row.strategy === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.risk === "●" ? "text-brand-orange" : "text-foreground/10"}>
                                                {row.risk === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.technical === "●" ? "text-brand-orange" : "text-foreground/10"}>
                                                {row.technical === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                        <td className="px-8 py-6">
                                            <span className={row.compliance === "●" ? "text-brand-orange" : "text-foreground/10"}>
                                                {row.compliance === "●" ? <ShieldCheck className="w-5 h-5" /> : <ShieldCheck className="w-5 h-5 opacity-20" />}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="text-foreground/40 text-xs mt-6 flex items-center justify-center space-x-2">
                        <AlertTriangle className="w-3 h-3 text-brand-orange" />
                        <span>Modules can be customized based on organizational risk profile</span>
                    </p>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default TrainingPage;
