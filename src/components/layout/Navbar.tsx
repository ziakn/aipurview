"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { ThemeToggle } from "../ui/ThemeToggle";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "vCISO", href: "/vciso" },
        { name: "Governance", href: "/governance" },
        { name: "Architecture", href: "/architecture" },
        { name: "Training", href: "/training" },
        { name: "Resources", href: "/resources" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${isScrolled ? "bg-background/95 border-b border-card-border py-4" : "bg-background/80 border-b border-transparent py-5"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2 group">
                    <Shield className="w-7 h-7 text-neon-blue" />
                    <span className="text-xl font-semibold tracking-tight text-foreground">
                        AIPurview<span className="text-foreground/45">.com</span>
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <Link href="/contact">
                            <Button variant="outline" size="sm">
                                Contact Us
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-4">
                    <ThemeToggle />
                    <button
                        className="text-foreground"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-card-border p-6 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-foreground/70 hover:text-foreground transition-colors font-medium text-lg"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                        <Button variant="primary" className="w-full">
                            Book a Consultation
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
