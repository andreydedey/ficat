import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "../Form/Error";
import { InputField, InputRoot } from "../Form/Input";
import { InputLabel } from "../Form/Label";
import { academicUnity, coursesProgram } from "./Home";

interface WorkDataFieldsetProps {
  academicUnities: academicUnity[];
  coursesPrograms: coursesProgram[];
}

export function WorkDataFieldset({
  academicUnities,
  coursesPrograms,
}: WorkDataFieldsetProps) {
  const { register } = useFormContext();

  return (
    <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
      <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
        Dados do Trabalho
      </legend>
      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Título do Trabalho:"
          htmlFor="titulo_trabalho"
          required
        />
        <InputField
          type="text"
          id="titulo_trabalho"
          name="titulo_trabalho"
          className="col-span-3"
          placeholder="Ex: Redes sociais em bibliotecas universitárias"
        />
        <ErrorMessage
          field="titulo_trabalho"
          className="col-start-2 col-span-2 justify-self-start"
        />
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Subtítulo do Trabalho:"
          htmlFor="subtitulo_trabalho"
        />
        <InputField
          type="text"
          id="subtitulo_trabalho"
          name="subtitulo_trabalho"
          className="col-span-3"
          placeholder="Ex: Estudo exploratório"
        />
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Nome do Orientador:"
          htmlFor="subtitulo_trabalho"
          required
        />
        <InputField
          type="text"
          name="nome_orientador"
          className="col-span-3"
          placeholder="Ex: Paulo Victor Lobato"
        />
        <ErrorMessage
          field="nome_orientador"
          className="col-start-2 col-span-2 justify-self-start"
        />
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Sobrenome do Orientador:"
          htmlFor="subtitulo_trabalho"
          required
        />
        <InputField
          type="text"
          name="sobrenome_orientador"
          className="col-span-3"
          placeholder="Ex: Sarmento"
        />
        <ErrorMessage
          field="sobrenome_orientador"
          className="col-start-2 col-span-2 justify-self-start"
        />
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Titulação do Orientador:"
          htmlFor="titulacao_orientador"
          required
        />
        <select
          id="titulacao_orientador"
          {...register("titulacao_orientador")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          <option value="Graduado">Graduado</option>
          <option value="Especialista">Especialista</option>
          <option value="Mestre">Mestre</option>
          <option value="Doutor">Doutor</option>
        </select>
      </InputRoot>

      <InputRoot className="grid grid-cols-4">
        <div className="flex gap-3 col-start-2">
          <InputField
            type="checkbox"
            value="Orientadora"
            name="orientadora"
            className="w-4 h-4
              text-blue-600 bg-gray-300 border-gray-300 rounded-sm"
          />
          <InputLabel
            value="Orientadora"
            htmlFor="Orientadora"
            className="text-sm font-medium text-gray-900"
          />
        </div>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Ano de orientação:" htmlFor="ano_orientacao" />
        <select
          id="ano_orientacao"
          {...register("ano_orientacao")}
          required
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          <option value="2025">2025</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
        </select>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel
          value="Número de folhas:"
          htmlFor="numero_folhas"
          required
        />
        <InputField
          type="text"
          name="numero_folhas"
          className="col-span-3"
          placeholder="Ex: xxi, 70"
        />
        <ErrorMessage
          field="numero_folhas"
          className="col-start-2 col-span-2 justify-self-start"
        />
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Ilustração:" htmlFor="ilustracao" required />
        <select
          id="ilustracao"
          {...register("ilustracao")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          <option value="">Não Possui</option>
          <option value="Coloridas">Coloridas</option>
          <option value="Preto e Branco">Preto e Branco</option>
        </select>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Unidade Acadêmica:" htmlFor="unidade_academica" />
        <select
          id="unidade_academica"
          {...register("unidade_academica")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          {academicUnities.map((unity) => {
            return (
              <option key={unity.id} value={unity.acronym}>
                {unity.name}
              </option>
            );
          })}
        </select>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 items-center gap-4">
        <InputLabel value="Tipo de Trabalho:" required />
        <div className="flex col-span-3 gap-2 justify-items-normal items-center">
          <InputField
            type="radio"
            id="tese"
            name="tipo_trabalho"
            value={"TESE"}
            className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
          />
          <InputLabel value="Tese" />

          <InputField
            name="tipo_trabalho"
            value={"Dissertação"}
            type="radio"
            id="dissertacao"
            className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
          />
          <InputLabel value="Dissertação" />

          <InputField
            name="tipo_trabalho"
            value={"TC"}
            type="radio"
            id="tese"
            className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
          />
          <InputLabel value="(TC) Especialização" />

          <InputField
            name="tipo_trabalho"
            value={"TC"}
            type="radio"
            id="tese"
            className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
          />
          <InputLabel value="(TC) Graduação" />
        </div>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
        <InputLabel value="Curso:" htmlFor="curso" />
        <select
          id="curso"
          {...register("curso")}
          className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
        >
          {coursesPrograms.map((coursesProgram) => {
            return (
              <option key={coursesProgram.id} value={coursesProgram.name}>
                {coursesProgram.name} - {coursesProgram.program}
              </option>
            );
          })}
        </select>
      </InputRoot>

      <InputRoot className="grid grid-cols-4 justity-items-end items-center gap-4">
        <InputLabel value="Área do conhecimento" htmlFor="area_conhecimento" />
        <InputField
          type="text"
          name="area_conhecimento"
          placeholder="Buscar um assunto no Botão Categorias de Assunto"
          className="col-span-3"
        />
        <ErrorMessage
          field="area_conhecimento"
          className="col-start-2 col-span-2 justify-self-start"
        />
      </InputRoot>
    </fieldset>
  );
}
