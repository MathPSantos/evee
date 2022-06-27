import { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../../core/utils/classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  isDisabled?: boolean;
}

export function Button({
  children,
  isDisabled,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const compClassName = classNames(
    "bg-green-100 uppercase py-4 gap-2 rounded-lg font-bold text-sm text-gray-900 hover:brightness-90 transition-colors disabled:opacity-60",
    className
  );

  return (
    <button
      className={compClassName}
      disabled={disabled || isDisabled}
      {...props}
    >
      {children}
    </button>
  );
}
