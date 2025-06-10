import type { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot({ ...props }: InputRootProps) {
  return <div {...props} />;
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

  // To help debugging. (it's weird but that's the way is suposed to be in case someone puts a wrong input)
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
