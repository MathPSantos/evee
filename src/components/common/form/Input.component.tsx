import { InputHTMLAttributes } from "react";
import { classNames } from "../../../core/utils/classNames";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export function Input({ className, ...props }: InputProps) {
  const compClassNames = classNames("bg-gray-900 rounded px-5 h-14", className);

  return <input className={compClassNames} {...props} />;
}
