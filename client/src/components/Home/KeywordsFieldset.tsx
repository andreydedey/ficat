import { Link } from "react-router";
import { InputField, InputLabel, InputRoot } from "../Input/input";

export function KeywordsFieldset() {
  return (
    <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
      <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
        Palavras-Chave
      </legend>
      <Link
        to={"https://bibcentral.ufpa.br/pergamum/biblioteca/autoridade.php"}
        target="_blank"
        type="submit"
        className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white 
            text-red-800 hover:text-white hover:bg-red-800 duration-300"
      >
        Consulte vocabulário controlado
      </Link>
      <InputRoot className="grid grid-cols-4 grid-rows-5 justify-items-end items-center gap-4">
        <InputLabel value="Assuntos (mín.: 1, máx.:5):" required />
        <InputField
          type="text"
          id="palavra_chave_1"
          className="col-span-3"
          placeholder="Palavra-Chave 1"
          required
        />
        <InputField
          type="text"
          id="palavra_chave_2"
          className="col-span-3 col-start-2"
          placeholder="Palavra-Chave 2"
        />
        <InputField
          type="text"
          id="palavra_chave_3"
          className="col-span-3 col-start-2"
          placeholder="Palavra-Chave 3"
        />
        <InputField
          type="text"
          id="palavra_chave_4"
          className="col-span-3 col-start-2"
          placeholder="Palavra-Chave 4"
        />
        <InputField
          type="text"
          id="palavra_chave_5"
          className="col-span-3 col-start-2"
          placeholder="Palavra-Chave 5"
        />
      </InputRoot>
      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Fonte:  " htmlFor="font" />
        <select
          name="font"
          id="font"
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
