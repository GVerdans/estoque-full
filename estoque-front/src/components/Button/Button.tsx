import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
      variant?: "primary" | "secondary" | "danger";
}

export default function Button({
      variant = "primary",
      children,
      ...props
}: ButtonProps) {
      const variants = {
            primary: `
      bg-accent
      text-background
      hover:bg-highlight
    `,

            secondary: `
      bg-secondary
      text-text
      border
      border-primary
      hover:bg-primary
    `,

            danger: `
      bg-red-600
      text-white
      hover:bg-red-700
    `,
      };

      return (
            <button
                  {...props}
                  className={`
        h-10
        rounded-md
        px-5
        font-medium
        transition
        cursor-pointer

        focus:outline-none
        focus:ring-2
        focus:ring-accent/30

        disabled:cursor-not-allowed
        disabled:opacity-50

        ${variants[variant]}
      `}
            >
                  {children}
            </button>
      );
}
