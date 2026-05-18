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
            primary: "bg-foreground text-background hover:bg-foreground/85",
            secondary: "bg-neon-green text-background hover:bg-neon-green/90",
            outline: "border border-card-border text-foreground hover:bg-dark-charcoal",
            ghost: "text-foreground hover:bg-foreground/10",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-8 py-3 text-base",
            lg: "px-10 py-4 text-lg",
        };

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-md font-semibold transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
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
