import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
      label?: string;
}

export default function Input({ label, ...props }: InputProps) {
      return (
            <div className="flex flex-col gap-2 py-2">
                  {label && (
                        <label className="text-sm font-medium text-text">
                              {label}
                        </label>
                  )}

                  <input
                        {...props}
                        className="
          h-10
          rounded-md
          border
          border-primary
          bg-surface
          px-3
          text-text
          placeholder:text-text-muted
          outline-none
          transition

          focus:border-accent
          focus:ring-2
          focus:ring-accent/30

          disabled:cursor-not-allowed
          disabled:opacity-50
        "
                  />
            </div>
      );
}
