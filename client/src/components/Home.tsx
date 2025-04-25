import { Link } from "react-router";
import { InputField, InputLabel, InputRoot } from "./Input/input";
import { useState } from "react";

export function Home() {
  const [numberAutors, setNumberAutors] = useState(1);

  const handleAddAutor = () => {
    setNumberAutors((prev) => prev + 1);
  };

  const handleExcludeAutor = () => {
    setNumberAutors((prev) => prev - 1);
  };

  console.log(numberAutors);

  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      <form action="#" className="flex flex-col gap-3 justify-start max-w-2xl">
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
                />
                <InputField
                  type="text"
                  id={`name_${index}`}
                  className="col-span-3"
                  placeholder={`Ex: João Gabriel`}
                />
              </InputRoot>

              <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
                <InputLabel
                  value={`Sobrenome do ${index + 1}º Autor:`}
                  htmlFor={`surname_${index}`}
                />
                <InputField
                  type="text"
                  id={`surname_${index}`}
                  className="col-span-3"
                  placeholder={`Ex: Oliveira`}
                />
              </InputRoot>
            </div>
          ))}

          <div className="flex gap-3 justify-center items-center">
            {numberAutors < 5 && (
              <button
                type="button"
                onClick={handleAddAutor}
                disabled={numberAutors >= 5}
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
                disabled={numberAutors == 1}
                className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
              >
                Excluir Autor
              </button>
            )}
          </div>
        </fieldset>

        <fieldset className="flex flex-col gap-4 border-[1px] border-red-700 rounded-lg p-4">
          <legend className="p-2 ml-2 bg-red-800 rounded-lg text-white">
            Dados do Trabalho
          </legend>
          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel value="Título do Trabalho:" htmlFor="titulo_trabalho" />
            <InputField
              type="text"
              id="titulo_trabalho"
              className="col-span-3"
              placeholder="Ex: Redes sociais em bibliotecas universitárias"
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
              className="col-span-3"
              placeholder="Ex: Estudo exploratório"
            />
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel
              value="Nome do Orientador:"
              htmlFor="subtitulo_trabalho"
            />
            <InputField
              type="text"
              id="nome_orientador"
              className="col-span-3"
              placeholder="Ex: Paulo Victor Lobato"
            />
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel
              value="Sobrenome do Orientador:"
              htmlFor="subtitulo_trabalho"
            />
            <InputField
              type="text"
              id="sobrenome_orientador"
              className="col-span-3"
              placeholder="Ex: Sarmento"
            />
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel
              value="Titulação do Orientador:"
              htmlFor="titulacao_orientador"
            />
            <select
              name="titulacao_orientador"
              id="titulacao_orientador"
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
                id="Orientadora"
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
              name="- Selecione -"
              id="ano_orientacao"
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
            <InputLabel value="Número de folhas:" htmlFor="numero_folhas" />
            <InputField
              type="text"
              id="numero_folhas"
              className="col-span-3"
              placeholder="Ex: xxi, 70"
            />
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justify-items-end items-center gap-4">
            <InputLabel value="Ilustração:" htmlFor="ilustracao" />
            <select
              name="- Selecione -"
              id="ilustracao"
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
            <InputLabel
              value="Unidade Acadêmica:"
              htmlFor="unidade_academica"
            />
            <select
              name="- Selecione -"
              id="unidade_academica"
              className="col-span-2 w-full bg-gray-50 border-2 
            border-gray-500 text-gray-900 text-sm rounded-lg focus:border-gray-800 focus:outline-1 outline-gray-300
            block p-1.5"
            >
              <option value="">ICEN</option>
            </select>
          </InputRoot>

          <InputRoot className="grid grid-cols-4 items-center gap-4">
            <InputLabel value="Tipo de Trabalho:" />
            <div className="flex col-span-3 gap-2 justify-items-normal items-center">
              <InputField
                name="tipo_trabalho"
                type="radio"
                id="tese"
                className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
              />
              <InputLabel value="Tese" />

              <InputField
                name="tipo_trabalho"
                type="radio"
                id="dissertacao"
                className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
              />
              <InputLabel value="Dissertação" />

              <InputField
                name="tipo_trabalho"
                type="radio"
                id="tese"
                className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
              />
              <InputLabel value="(TC) Especialização" />

              <InputField
                name="tipo_trabalho"
                type="radio"
                id="tese"
                className="w-4 h-4 border-gray-300 focus:ring-2
            focus:ring-blue-300"
              />
              <InputLabel value="(TC) Graduação" />
            </div>
          </InputRoot>

          <InputRoot className="grid grid-cols-4 justity-items-end items-center gap-4">
            <InputLabel
              value="Área do conhecimento"
              htmlFor="area_do_conhecimento"
            />
            <InputField
              name="area_do_conhecimento"
              type="text"
              id="area_do_conhecimento"
              placeholder="Buscar um assunto no Botão Categorias de Assunto"
              className="col-span-3"
            />
          </InputRoot>
        </fieldset>
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
            <InputLabel value="Assuntos (mín.: 1, máx.:5):" />
            <InputField
              type="text"
              id="palavra_chave_1"
              className="col-span-3"
              placeholder="Palavra-Chave 1"
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
        <button
          type="submit"
          className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white 
            text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
        >
          Gerar Ficha Catalográfica
        </button>
      </form>
    </div>
  );
}
