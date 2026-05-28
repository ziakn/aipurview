import Link from "next/link";
import { Mail, MapPin, Linkedin, ShieldCheck, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-card-border pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-md border-2 border-foreground bg-card-bg">
                            <ShieldCheck className="w-5 h-5 text-brand-orange" />
                        </span>
                        <span className="text-xl font-black tracking-[0] text-foreground">
                            AIPurview<span className="text-foreground/45">.com</span>
                        </span>
                    </Link>
                    <p className="text-foreground/50 text-sm leading-relaxed">
                        AI security and governance support for teams preparing regulated systems for production.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="p-2 border border-card-border rounded-md hover:bg-dark-charcoal transition-colors">
                            <Linkedin className="w-5 h-5 text-foreground/55" />
                        </a>
                        <a href="#" className="p-2 border border-card-border rounded-md hover:bg-dark-charcoal transition-colors">
                            <Twitter className="w-5 h-5 text-foreground/55" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-foreground font-bold mb-6 text-sm">Services</h4>
                    <ul className="space-y-4 text-foreground/50 text-sm">
                        <li><Link href="/vciso" className="hover:text-brand-orange transition-colors">vCISO Services</Link></li>
                        <li><Link href="/governance" className="hover:text-brand-orange transition-colors">AI Governance</Link></li>
                        <li><Link href="/architecture" className="hover:text-brand-orange transition-colors">Technical Assessment</Link></li>
                        <li><Link href="/solutions" className="hover:text-brand-orange transition-colors">End-to-End Solutions</Link></li>
                        <li><Link href="/training" className="hover:text-brand-orange transition-colors">Training & Awareness</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-foreground font-bold mb-6 text-sm">Company</h4>
                    <ul className="space-y-4 text-foreground/50 text-sm">
                        <li><Link href="/about" className="hover:text-brand-orange transition-colors">About Us</Link></li>
                        <li><Link href="/resources" className="hover:text-brand-orange transition-colors">Knowledge Hub</Link></li>
                        <li><Link href="/contact" className="hover:text-brand-orange transition-colors">Contact</Link></li>
                        <li><Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy Policy</Link></li>
                        <li><Link href="/terms-of-use" className="hover:text-brand-orange transition-colors">Terms of Use</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-foreground font-bold mb-6 text-sm">Contact</h4>
                    <ul className="space-y-4 text-foreground/50 text-sm">
                        <li className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-brand-orange" />
                            <span>info@aipurview.com</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-brand-orange" />
                            <span>Remote First - Serving the EU</span>
                        </li>
                        <li className="pt-4">
                            <div className="inline-flex items-center space-x-2 px-3 py-2 border border-card-border rounded-md text-xs font-medium text-foreground/65">
                                <span>EU-Wide Remote Delivery</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-20 pt-10 border-t border-card-border flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-foreground/30 text-xs text-center md:text-left">
                <p>© {new Date().getFullYear()} AIPurview. All rights reserved.</p>
                <p>AI security, governance, and architecture.</p>
            </div>
        </footer>
    );
};

export default Footer;
