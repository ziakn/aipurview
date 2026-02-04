import Link from "next/link";
import { Shield, Mail, Phone, MapPin, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-deep-black border-t border-white/10 pt-20 pb-10">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                <div className="space-y-6">
                    <Link href="/" className="flex items-center space-x-2">
                        <Shield className="w-8 h-8 text-neon-blue" />
                        <span className="text-xl font-bold tracking-tighter text-white">
                            AIPurview<span className="text-neon-blue">.com</span>
                        </span>
                    </Link>
                    <p className="text-white/50 text-sm leading-relaxed">
                        Premium AI Security & Governance Boutique. Securing the intelligence that powers your enterprise.
                    </p>
                    <div className="flex items-center space-x-4">
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all">
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a href="#" className="p-2 bg-white/5 rounded-full hover:bg-neon-blue/20 hover:text-neon-blue transition-all">
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Services</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                        <li><Link href="/vciso" className="hover:text-neon-blue transition-colors">vCISO Services</Link></li>
                        <li><Link href="/governance" className="hover:text-neon-blue transition-colors">AI Governance</Link></li>
                        <li><Link href="/architecture" className="hover:text-neon-blue transition-colors">Technical Assessment</Link></li>
                        <li><Link href="/training" className="hover:text-neon-blue transition-colors">Training & Awareness</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Company</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                        <li><Link href="/about" className="hover:text-neon-blue transition-colors">About Us</Link></li>
                        <li><Link href="/resources" className="hover:text-neon-blue transition-colors">Knowledge Hub</Link></li>
                        <li><Link href="/contact" className="hover:text-neon-blue transition-colors">Contact</Link></li>
                        <li><Link href="/privacy" className="hover:text-neon-blue transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
                    <ul className="space-y-4 text-white/50 text-sm">
                        <li className="flex items-start space-x-3">
                            <Mail className="w-5 h-5 text-neon-blue" />
                            <span>info@aipurview.com</span>
                        </li>
                        <li className="flex items-start space-x-3">
                            <MapPin className="w-5 h-5 text-neon-blue" />
                            <span>Remote First - Serving the EU</span>
                        </li>
                        <li className="pt-4">
                            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-eu-blue/20 border border-eu-blue/40 rounded-lg text-[10px] font-bold text-white uppercase tracking-tighter">
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                <span>EU-Wide Remote Delivery</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="container mx-auto px-6 mt-20 pt-10 border-t border-white/5 flex flex-col md:row items-center justify-between space-y-4 md:space-y-0 text-white/30 text-xs">
                <p>© {new Date().getFullYear()} AIPurview. All rights reserved.</p>
                <p>Built for the AI-First Era.</p>
            </div>
        </footer>
    );
};

export default Footer;
