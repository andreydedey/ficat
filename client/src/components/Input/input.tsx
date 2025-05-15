import type { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot({ ...props }: InputRootProps) {
  return <div {...props} />;
}

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

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField({
  className,
  type,
  name,
  ...props
}: InputFieldProps) {
  const { register } = useFormContext();

  let baseClass = "";

  if (type === "text") {
    baseClass =
      "bg-white border-[3px] border-gray-600 text-gray-900 text-sm rounded-lg outline-gray-300 focus:outline-1 focus:outline-gray-800 block w-full p-1.5";
  }

  if (name == null) {
    console.log(`${name} is null`);
  }

  return (
    <input
      type={type}
      className={twMerge(baseClass, className)}
      {...register(name)}
      {...props}
    />
  );
}
