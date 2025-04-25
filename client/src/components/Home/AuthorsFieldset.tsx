import { InputField, InputLabel, InputRoot } from "../Input/input";

interface AuthorsFieldsetProps {
  numberAutors: number;
  handleAddAutor: () => void;
  handleExcludeAutor: () => void;
}

export function AuthorsFieldset({
  numberAutors,
  handleAddAutor,
  handleExcludeAutor,
}: AuthorsFieldsetProps) {
  return (
    <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
      <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
        Autor
      </legend>

      {Array.from({ length: numberAutors }).map((_, index) => (
        <div key={index} className="flex flex-col gap-4">
          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel
              value={`Nome do ${index + 1}º Autor:`}
              htmlFor={`name_${index}`}
              required={index === 0} // Make the first author's name required
            />
            <InputField
              type="text"
              id={`name_${index}`}
              className="col-span-3"
              placeholder={`Ex: João Gabriel`}
              required={index === 0} // Make the first author's name required
            />
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel
              value={`Sobrenome do ${index + 1}º Autor:`}
              htmlFor={`surname_${index}`}
              required={index === 0} // Make the first author's surname required
            />
            <InputField
              type="text"
              id={`surname_${index}`}
              className="col-span-3"
              placeholder={`Ex: Oliveira`}
              required={index === 0} // Make the first author's surname required
            />
          </InputRoot>
        </div>
      ))}

      <div className="flex gap-3 justify-center items-center">
        {numberAutors < 5 && (
          <button
            type="button"
            onClick={handleAddAutor}
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Adicionar Autor
          </button>
        )}
        {numberAutors > 1 && (
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
