import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { twMerge } from "tailwind-merge";

function get(obj: Record<any, any>, path: string) {
  const travel = (regexp: RegExp) =>
    String.prototype.split
      .call(path, regexp)
      .filter(Boolean)
      .reduce(
        (res, key) => (res !== null && res !== undefined ? res[key] : res),
        obj,
      );

  const result = travel(/[,[\]]+?/) || travel(/[,[\].]+?/);

  return result;
}

interface ErrorMessageProps extends ComponentProps<"div"> {
  field: string;
}

export function ErrorMessage({
  field,
  className,
  ...props
}: ErrorMessageProps) {
  const {
    formState: { errors },
  } = useFormContext();

  const fieldError = get(errors, field);

  if (!fieldError) {
    return null;
  }

  console.log("Passou por erro");

  return (
    <div className={twMerge(className, "text-sm text-red-600")} {...props}>
      {fieldError.message?.toString()}
    </div>
  );
}
