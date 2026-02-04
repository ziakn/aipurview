import { ButtonHTMLAttributes, forwardRef } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", ...props }, ref) => {
        const variants = {
            primary: "bg-neon-blue text-deep-black hover:shadow-[0_0_20px_rgba(0,194,255,0.4)] hover:scale-105",
            secondary: "bg-neon-green text-deep-black hover:shadow-[0_0_20px_rgba(46,204,113,0.4)] hover:scale-105",
            outline: "border-2 border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-deep-black",
            ghost: "text-white hover:bg-white/10",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-3 text-base",
            lg: "px-10 py-4 text-lg",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-300 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
                    variants[variant],
                    sizes[size],
                    className
                )}
                ref={ref}
                {...props}
            />
        );
    }
);

Button.displayName = "Button";

export { Button };
