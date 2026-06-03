"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight,
    BrainCircuit,
    CheckCircle2,
    ClipboardList,
    FileCheck2,
    Landmark,
    PlusCircle,
    Shield,
    Siren,
    Target,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const ownedAreas = [
    "Security strategy and roadmap",
    "Risk management and prioritization",
    "Board and executive reporting",
    "AI risk and governance oversight",
    "Compliance and audit readiness",
    "Incident response and vendor risk",
];

const capabilities = [
    {
        title: "Security Strategy",
        description: "A clear, prioritized security roadmap aligned to your business goals, risk appetite, and budget - not a generic checklist.",
        icon: ClipboardList,
    },
    {
        title: "Risk Management",
        description: "Identify, prioritize, and manage the risks that actually threaten your business, then make deliberate decisions about each one.",
        icon: Shield,
    },
    {
        title: "Board & Executive Reporting",
        description: "Translate technical risk into clear, decision-ready reporting your leadership and board can understand and stand behind.",
        icon: Landmark,
    },
    {
        title: "AI Risk & Governance",
        description: "Bring AI into your security posture with confidence through governance, oversight, and EU AI Act readiness led from the top.",
        icon: BrainCircuit,
    },
    {
        title: "Compliance & Audit Readiness",
        description: "Stay ahead of regulatory and contractual obligations, with the evidence and processes to pass scrutiny.",
        icon: FileCheck2,
    },
    {
        title: "Incident & Vendor Risk",
        description: "Be ready for the bad day with response planning, third-party risk oversight, and a steady hand when it counts.",
        icon: Siren,
    },
];

const fitItems = [
    "Need security leadership but are not ready for a full-time CISO",
    "Are adopting AI and want it governed properly from the start",
    "Face growing compliance, customer, or board pressure on security",
    "Have security tools and people, but no clear strategy tying them together",
];

const engagementItems = [
    "Flexible scope, from a few days a month to a focused mandate",
    "Embedded with your team, not arm's-length advice",
    "Scales up or down as your needs change",
    "A clear handover path if you later hire in-house",
];

const outcomes = [
    { label: "Direction", description: "A clear security strategy and roadmap" },
    { label: "Oversight", description: "Risk owned, prioritized, and managed" },
    { label: "Assurance", description: "Board-ready reporting and audit readiness" },
    { label: "Expertise", description: "Deep AI risk leadership on call" },
];

const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

const VCISOPage = () => {
    return (
        <main className="min-h-screen bg-background">
            <Navbar />

            <section className="relative overflow-hidden border-b border-card-border pt-28 pb-14 md:pt-36 md:pb-20">
                <div className="pointer-events-none absolute -right-40 -top-44 h-[34rem] w-[34rem] rounded-full bg-brand-orange/15 blur-3xl" />
                <motion.div
                    className="relative mx-auto max-w-[1180px] px-7"
                    initial="hidden"
                    animate="visible"
                    variants={fadeUp}
                    transition={{ duration: 0.45 }}
                >
                    <div className="mb-6 text-sm font-semibold text-foreground/50">
                        <Link href="/" className="transition-colors hover:text-brand-orange">Home</Link>
                        <span className="mx-2">/</span>
                        <span>Services</span>
                        <span className="mx-2">/</span>
                        <span>vCISO Leadership</span>
                    </div>
                    <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
                        <span className="h-0.5 w-6 bg-brand-orange" />
                        vCISO Leadership
                    </div>
                    <h1 className="max-w-5xl text-[clamp(2.45rem,5.2vw,4.75rem)] font-black leading-[1.03] tracking-[0] text-foreground">
                        Executive security leadership - <span className="text-brand-orange">without the full-time hire</span>.
                    </h1>
                    <p className="mt-7 max-w-3xl text-lg leading-relaxed text-foreground/66 md:text-xl">
                        Get a seasoned security leader on your side: someone to own your security strategy, report to your board, and bring deep AI risk expertise at a fraction of the cost and commitment of a full-time CISO.
                    </p>
                    <div className="mt-9 flex flex-wrap gap-4">
                        <Link href="/contact" className="inline-flex items-center gap-2 rounded-md bg-brand-orange px-7 py-4 text-base font-bold text-white transition-colors hover:bg-foreground">
                            Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link href="/#services" className="inline-flex items-center rounded-md border-2 border-foreground px-7 py-4 text-base font-bold text-foreground transition-colors hover:bg-foreground hover:text-white">
                            All Services
                        </Link>
                    </div>
                </motion.div>
            </section>

            <Section className="pt-14">
                <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-80px" }} variants={fadeUp} transition={{ duration: 0.45 }}>
                        <h2 className="max-w-2xl text-3xl font-black leading-tight text-foreground md:text-4xl">
                            The security leadership you need, scaled to where you are
                        </h2>
                        <div className="mt-6 space-y-5 text-base leading-relaxed text-foreground/66 md:text-lg">
                            <p>Many organizations need senior security leadership long before they can justify a full-time CISO. The result is a gap: security decisions get made without strategy, risk goes unowned, and the board has no clear line of sight into exposure.</p>
                            <p>Our virtual CISO service fills that gap. You get an experienced security leader who sets direction, builds your security program, and translates technical risk into language your board and executives can act on.</p>
                            <p>And because AI risk is now part of every security conversation, you get a leader who understands it deeply - someone who can govern AI alongside the rest of your security posture, not treat it as a separate problem.</p>
                        </div>
                    </motion.div>

                    <motion.aside
                        className="relative overflow-hidden rounded-md bg-[#2a1467] p-8 text-white shadow-2xl shadow-[#2a1467]/20"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        variants={fadeUp}
                        transition={{ duration: 0.45, delay: 0.08 }}
                    >
                        <div className="pointer-events-none absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-brand-orange/30 blur-2xl" />
                        <h3 className="relative mb-6 text-2xl font-black text-white">What your vCISO can own</h3>
                        <ul className="relative space-y-4">
                            {ownedAreas.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-white/82">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#f3b98a]" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.aside>
                </div>
            </Section>

            <section className="border-y border-card-border bg-dark-charcoal py-16">
                <div className="mx-auto grid max-w-[1180px] gap-8 px-7 lg:grid-cols-[0.7fr_1.3fr]">
                    <div className="text-sm font-black uppercase tracking-[0.13em] text-foreground/48">
                        Why it
                        <span className="block pt-1 text-4xl normal-case tracking-[0] text-brand-orange">Matters</span>
                    </div>
                    <div>
                        <h2 className="text-3xl font-black leading-tight md:text-4xl">Security without leadership is just a collection of tools.</h2>
                        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-foreground/66">
                            Technology alone does not manage risk - direction does. A vCISO gives you the strategy, accountability, and executive voice to turn scattered security activity into a coherent program your board can trust, without carrying the cost of a permanent C-suite hire.
                        </p>
                    </div>
                </div>
            </section>

            <Section>
                <div className="mb-12 max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
                        <span className="h-0.5 w-6 bg-brand-orange" />
                        What your vCISO delivers
                    </div>
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">Full security leadership, with AI as a core strength.</h2>
                    <p className="mt-5 text-lg leading-relaxed text-foreground/62">
                        Everything you would expect from an experienced CISO, plus the AI risk expertise that modern security demands.
                    </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {capabilities.map((capability, index) => {
                        const Icon = capability.icon;
                        return (
                            <motion.div
                                key={capability.title}
                                className="glass-card p-7 transition-transform duration-300 hover:-translate-y-1"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-80px" }}
                                variants={fadeUp}
                                transition={{ duration: 0.4, delay: index * 0.04 }}
                            >
                                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-md bg-brand-orange/14 text-brand-orange">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-xl font-black text-foreground">{capability.title}</h3>
                                <p className="mt-3 text-sm leading-relaxed text-foreground/62">{capability.description}</p>
                            </motion.div>
                        );
                    })}
                </div>
            </Section>

            <Section className="pt-0">
                <div className="mb-10 max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
                        <span className="h-0.5 w-6 bg-brand-orange" />
                        Is a vCISO right for you?
                    </div>
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">Senior leadership, sized to your stage.</h2>
                </div>

                <div className="grid gap-5 lg:grid-cols-2">
                    <div className="glass-card border-brand-orange/45 p-7">
                        <h3 className="mb-6 text-xl font-black">A great fit if you...</h3>
                        <ul className="space-y-4">
                            {fitItems.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/66">
                                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="glass-card p-7">
                        <h3 className="mb-6 text-xl font-black">How engagement works</h3>
                        <ul className="space-y-4">
                            {engagementItems.map((item) => (
                                <li key={item} className="flex gap-3 text-sm leading-relaxed text-foreground/66">
                                    <PlusCircle className="mt-0.5 h-5 w-5 shrink-0 text-foreground/46" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Section>

            <Section className="border-y border-card-border bg-dark-charcoal">
                <div className="mb-10 max-w-3xl">
                    <div className="mb-5 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-brand-orange">
                        <span className="h-0.5 w-6 bg-brand-orange" />
                        Outcomes
                    </div>
                    <h2 className="text-3xl font-black leading-tight md:text-5xl">What you walk away with.</h2>
                </div>

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                    {outcomes.map((outcome) => (
                        <div key={outcome.label} className="glass-card p-6">
                            <div className="text-2xl font-black text-brand-orange md:text-3xl">{outcome.label}</div>
                            <p className="mt-3 text-sm leading-relaxed text-foreground/62">{outcome.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section>
                <div className="relative overflow-hidden rounded-md bg-[#2a1467] px-7 py-16 text-center md:px-10 md:py-20">
                    <div className="pointer-events-none absolute left-1/2 top-[-8rem] h-80 w-[34rem] -translate-x-1/2 rounded-full bg-brand-orange/25 blur-3xl" />
                    <div className="relative mx-auto max-w-3xl">
                        <div className="mx-auto mb-7 flex h-14 w-14 items-center justify-center rounded-md bg-white/10 text-[#f3b98a]">
                            <Target className="h-7 w-7" />
                        </div>
                        <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">Get executive security leadership on your side.</h2>
                        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/72">
                            In one conversation, we will talk through your current security posture and where a vCISO could make the biggest difference.
                        </p>
                        <Link href="/contact" className="mt-9 inline-flex items-center gap-2 rounded-md bg-brand-orange px-7 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-[#2a1467]">
                            Book a Free 30-Minute Consultation <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default VCISOPage;
