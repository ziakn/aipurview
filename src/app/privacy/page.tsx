"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/ui/Section";

const PrivacyPage = () => {
    return (
        <main className="bg-background min-h-screen text-foreground">
            <Navbar />

            <section className="pt-40 pb-20 border-b border-card-border">
                <div className="container mx-auto px-6">
                    <h1 className="text-5xl font-black mb-8">Privacy Policy</h1>
                    <p className="text-foreground/50 text-lg max-w-2xl">
                        AIPurview is committed to protecting your professional data and ensuring transparency in our digital interactions.
                    </p>
                </div>
            </section>

            <Section>
                <div className="prose prose-invert max-w-4xl mx-auto space-y-12">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">1. Data Collection</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            We collect minimal data necessary to provide our boutique consulting services. This includes professional contact information provided via our inquiry forms and technical data required for secure website operation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">2. EU AI Act & GDPR Compliance</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            As specialists in European regulation, we adhere to the highest standards of data protection. All data processing is performed within the European Union in strict accordance with GDPR and the AI Act's transparency requirements.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-foreground">3. Your Rights</h2>
                        <p className="text-foreground/60 leading-relaxed">
                            Under GDPR, you have the right to access, rectify, or erase your personal data. To exercise these rights, please contact our Data Protection Officer at <span className="text-neon-blue">info@aipurview.com</span>.
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

export default PrivacyPage;
