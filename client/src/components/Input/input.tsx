import { ComponentProps } from "react";

interface InputRootProps extends ComponentProps<"div"> {}

export function InputRoot({ ...props }: InputRootProps) {
  return <div {...props}></div>;
}

interface InputFieldProps extends ComponentProps<"input"> {}

export function InputField({ ...props }: InputFieldProps) {
  return (
    <input
      type="text"
      className="border border-gray-300 text-gray-900 text-sm rounded-lg 
            outline-gray-300 focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
      {...props}
    />
  );
}

interface InputLabelProps extends ComponentProps<"label"> {
    value: string
}

export function InputLabel({value, ...props}: InputLabelProps) {
    return <label {...props} className="text-sm font-medium text-gray-900">value</label>
}


{/* <input
  type="text"
  id="name"
  className="col-span-3 border border-gray-300 text-gray-900
  text-sm rounded-lg outline-gray-300
  focus:outline-2 focus:outline-blue-500 block w-full p-2.5"
  placeholder="Ex.: Barbosa"
  required
/>; */}
