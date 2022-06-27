import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../core/utils/classNames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean
}

export function Button({ children, isDisabled, disabled, className, ...props }: ButtonProps) {
  const compClassName = classNames("bg-green-500 uppercase py-4 gap-2 rounded font-bold text-sm hover:bg-green-700 transition-colors disabled:opacity-60", className)

  return (
    <button
      className={compClassName}
      disabled={disabled || isDisabled}
      {...props}
    >
      {children}
    </button>
  )
} 