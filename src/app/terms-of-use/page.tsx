"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const TermsPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 pb-20 border-b border-card-border">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-black mb-8">Terms of Use</h1>
                    <p className="text-foreground/50 text-lg max-w-2xl">
                        Legal framework for engaging with AIPurview's digital resources and elite consulting services.
                    </p>
                </div>
            </section>

            <Section>
                <div className="max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">1. Professional Engagement</h2>
                        <p className="text-foreground/60 leading-relaxed font-body">
                            The content on this website is for informational purposes related to AI security and governance. Use of this site does not constitute a formal consulting relationship until a master service agreement (MSA) is executed.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">2. Intellectual Property</h2>
                        <p className="text-foreground/60 leading-relaxed font-body">
                            All proprietary methodologies, "AIPurview Method" frameworks, and technical publications are the exclusive property of AIPurview. Unauthorized reproduction is strictly prohibited.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">3. Limitation of Liability</h2>
                        <p className="text-foreground/60 leading-relaxed font-body">
                            While we provide elite advisory services, compliance with the EU AI Act remains the ultimate responsibility of the organization. AIPurview provides technical and strategic guidance to facilitate this process.
                        </p>
                    </div>

                    <div className="pt-10 border-t border-card-border">
                        <p className="text-foreground/30 text-sm">Last Updated: February 2026</p>
                    </div>
                </div>
            </Section>

            <Footer />
        </main>
    );
};

export default TermsPage;
