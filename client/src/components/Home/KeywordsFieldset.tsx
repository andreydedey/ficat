import { Link } from "react-router";
import { useFieldArray, useFormContext } from "react-hook-form";
import { InputField, InputLabel, InputRoot } from "../Input/input";

export function KeywordsFieldset() {
  const { control, register } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "palavras_chave"
  })

  const handleAddKeyword = () => {
    append({value: ""})
  }

  const handleExcludeKeyword = () => {
    if (fields.length > 1) {
      remove(fields.length - 1)
    }
  }


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

      <InputRoot className={`grid grid-cols-4 grid-rows-${fields} justify-items-end items-center gap-4`}>
        <InputLabel value="Assuntos (mín.: 1, máx.:5):" required />
          {fields.map((field, index) => {
            const fieldName = `palavras_chave.${index}.value`

            return (
              <InputField
              key={field.id}
              type="text"
              name={fieldName}
              className={`col-span-3 ${index > 0 ? "col-start-2" : ""}`}
              placeholder={`Palavra-Chave ${index + 1}`}
            />
            )
          })}
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Fonte:  " htmlFor="font" />
        <select
          {...register("fonte")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          <option value="timesNewRoman">Times New Roman</option>
          <option value="arial">Arial</option>
        </select>
      </InputRoot>
      
      <div className="flex gap-3 justify-center items-center">
        {fields.length < 5 && (
          <button
            type="button"
            onClick={handleAddKeyword}
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Adicionar Palavra-Chave
          </button>
        )}
        {fields.length > 1 && (
          <button
            type="button"
            onClick={handleExcludeKeyword}
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Excluir Palavra-Chave
          </button>
        )}
      </div>

    </fieldset>
  );
}
