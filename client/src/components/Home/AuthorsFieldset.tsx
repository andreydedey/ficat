import { useFieldArray, useFormContext } from "react-hook-form";

import { InputField, InputRoot } from "../Form/Input";
import { InputLabel } from "../Form/Label";
import { ErrorMessage } from "../Form/Error";

export function AuthorsFieldset() {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "nomes_autor",
  });

  const handleAddAutor = () => {
    append({ nome: "", sobrenome: "" });
  };

  const handleExcludeAutor = () => {
    if (fields.length > 1) {
      remove(fields.length - 1);
    }
  };

  return (
    <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
      <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
        Autor
      </legend>

      {fields.map((field, index) => {
        const authorName = `nomes_autor.${index}.nome`;
        const authorSurname = `nomes_autor.${index}.sobrenome`;

        return (
          <div key={field.id} className="flex flex-col gap-4">
            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel
                value={`Nome do ${index + 1}º Autor:`}
                htmlFor={authorName}
                required
              />
              <InputField
                type="text"
                name={authorName}
                className="col-span-3"
                placeholder="Ex: João Gabriel"
              />
              <ErrorMessage
                field={authorName}
                className="col-start-2 col-span-2 justify-self-start"
              />
            </InputRoot>

            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel
                value={`Sobrenome do ${index + 1}º Autor:`}
                htmlFor={authorSurname}
                required
              />
              <InputField
                type="text"
                name={authorSurname}
                className="col-span-3"
                placeholder="Ex: Oliveira"
              />
              <ErrorMessage
                field={authorSurname}
                className="col-start-2 col-span-2 justify-self-start"
              />
            </InputRoot>
          </div>
        );
      })}

      <div className="flex gap-3 justify-center items-center">
        {fields.length < 5 && (
          <button
            type="button"
            onClick={handleAddAutor}
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Adicionar Autor
          </button>
        )}
        {fields.length > 1 && (
          <button
            type="button"
            onClick={handleExcludeAutor}
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Excluir Autor
          </button>
        )}
      </div>
    </fieldset>
  );
}
