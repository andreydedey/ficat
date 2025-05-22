import { useFieldArray, useFormContext } from "react-hook-form";

import { InputField, InputLabel, InputRoot } from "../Input/input";

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
              />
              <InputField
                type="text"
                name={authorName}
                className="col-span-3"
                placeholder="Ex: João Gabriel"
              />
            </InputRoot>

            <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
              <InputLabel
                value={`Sobrenome do ${index + 1}º Autor:`}
                htmlFor={authorSurname}
              />
              <InputField
                type="text"
                name={authorSurname}
                className="col-span-3"
                placeholder="Ex: Oliveira"
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
