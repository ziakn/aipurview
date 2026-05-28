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
            primary: "bg-brand-orange text-background hover:bg-foreground",
            secondary: "border-2 border-brand-orange text-foreground hover:bg-brand-orange hover:text-background",
            outline: "border-2 border-brand-orange text-foreground hover:bg-brand-orange hover:text-background",
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
                    "inline-flex items-center justify-center rounded-md font-bold transition-colors duration-200 focus:outline-none disabled:opacity-50 disabled:pointer-events-none",
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
