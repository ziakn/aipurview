import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-[#2a1467] pb-8 pt-14 text-[#c3bcdd]">
            <div className="container mx-auto grid grid-cols-1 gap-10 px-6 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
                <div>
                    <Link href="/" aria-label="AIPurview home">
                        <Image
                            src="/aipurview-logo-footer.png"
                            alt="AIPurview"
                            width={170}
                            height={64}
                            className="mb-4 h-8 w-auto"
                        />
                    </Link>
                    <p className="max-w-[280px] text-sm leading-relaxed text-[#c9c1e3]">
                        Helping enterprises govern, assess, and secure AI from strategy to production.
                    </p>
                </div>

                <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-white">Services</h3>
                    <ul className="space-y-2.5 text-sm text-[#a99ec9]">
                        <li><Link href="/ai-risk-and-governance" className="transition-colors hover:text-[#f3b98a]">AI Governance & Assurance</Link></li>
                        <li><Link href="/architecture" className="transition-colors hover:text-[#f3b98a]">Technical Assessment</Link></li>
                        <li><Link href="/training" className="transition-colors hover:text-[#f3b98a]">Training & Awareness</Link></li>
                        <li><Link href="/vciso" className="transition-colors hover:text-[#f3b98a]">vCISO Leadership</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-white">Company</h3>
                    <ul className="space-y-2.5 text-sm text-[#a99ec9]">
                        <li><Link href="/about-us" className="transition-colors hover:text-[#f3b98a]">About Us</Link></li>
                        <li><Link href="/#method" className="transition-colors hover:text-[#f3b98a]">Our Method</Link></li>
                        <li><Link href="/contact" className="transition-colors hover:text-[#f3b98a]">Contact</Link></li>
                        <li><Link href="/blog" className="transition-colors hover:text-[#f3b98a]">Articles</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.1em] text-white">Contact</h3>
                    <div className="space-y-2.5 text-sm text-[#a99ec9]">
                        <p>info@aipurview.com</p>
                        <p>Remote First - Serving the EU</p>
                        <p>EU-Wide Delivery</p>
                    </div>
                </div>
            </div>

            <div className="container mx-auto mt-11 flex flex-col gap-2 border-t border-white/10 px-6 pt-5 text-xs text-[#8d82ad] sm:flex-row sm:justify-between">
                <p>© {new Date().getFullYear()} AIPurview. All rights reserved.</p>
                <p>Govern. Assess. Secure AI.</p>
            </div>
        </footer>
    );
};

export default Footer;
