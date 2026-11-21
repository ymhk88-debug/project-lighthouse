import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) {
  const variantClasses =
    variant === "primary"
      ? "bg-accent text-primary shadow-[0_10px_24px_rgba(181,150,93,0.18)] hover:bg-accent/90"
      : "border border-primary bg-white text-primary hover:bg-primary/5";

  return (
    <button
      className={`inline-flex h-11 items-center justify-center rounded-md px-5 text-sm font-semibold transition-colors md:h-12 md:px-7 md:text-base ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

