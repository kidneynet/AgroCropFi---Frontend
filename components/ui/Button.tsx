import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export function Button({ variant = "primary", children, ...props }: ButtonProps) {
  return <button {...props}>{children}</button>;
}
