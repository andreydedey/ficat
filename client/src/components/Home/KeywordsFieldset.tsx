import { Link } from "react-router";
import { useFormContext } from "react-hook-form";
import { InputField, InputLabel, InputRoot } from "../Input/input";

export function KeywordsFieldset() {
  const { register } = useFormContext();

  return (
    <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
      <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
        Palavras-Chave
      </legend>

      <Link
        to="https://bibcentral.ufpa.br/pergamum/biblioteca/autoridade.php"
        target="_blank"
        className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white 
        text-red-800 hover:text-white hover:bg-red-800 duration-300"
      >
        Consulte vocabulário controlado
      </Link>

      <InputRoot className="grid grid-cols-4 grid-rows-5 justify-items-end items-center gap-4">
        <InputLabel value="Assuntos (mín.: 1, máx.:5):" required />

        {Array.from({ length: 5 }).map((_, i) => (
          <InputField
            key={i}
            type="text"
            id={`palavra_chave_${i + 1}`}
            {...register(`palavras_chave.${i}`)}
            className={`col-span-3 ${i > 0 ? "col-start-2" : ""}`}
            placeholder={`Palavra-Chave ${i + 1}`}
            required={i === 0}
          />
        ))}
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Fonte:  " htmlFor="font" />
        <select
          id="font"
          {...register("fonte")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          <option value="timesNewRoman">Times New Roman</option>
          <option value="arial">Arial</option>
        </select>
      </InputRoot>
    </fieldset>
  );
}
