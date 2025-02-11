import clsx from "clsx";
import React from "react";

interface Props {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  theme?: "dark" | "light";
  className?: string;
}
const Button = ({
  children,
  variant = "primary",
  theme = "light",
  className = "",
}: Props) => {
  return (
    <button
      className={`p-4 text-md w-fit flex items-center justify-center gap-2 ${clsx(
        variant === "primary" && "bg-primary text-white",
        variant === "outline" && "border bg-none",
        variant === "outline" && theme === "dark" && "border-white text-white",
        variant === "outline" && theme === "light" && "border-black text-black",
        className
      )}`}
    >
      {children}
    </button>
  );
};

export default Button;
