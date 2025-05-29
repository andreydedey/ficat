import { ComponentProps } from "react";

interface InputLabelProps extends ComponentProps<"label"> {
  value: string;
  required?: boolean;
}

export function InputLabel({ value, required, ...props }: InputLabelProps) {
  const asterisk = required ? (
    <span className="text-red-500 font-bold text-xl">*</span>
  ) : null;

  return (
    // biome-ignore lint/a11y/noLabelWithoutControl: <input is associated with the label by the htmlFor prop>
    <label {...props} className="text-sm font-medium text-right text-gray-900">
      {value} {asterisk}
    </label>
  );
}
