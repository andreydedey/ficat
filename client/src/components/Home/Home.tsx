import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";

type Autor = {
  nome: string;
  sobrenome: string;
};

type FormData = {
  nomes_autor: Autor[];
  titulo_trabalho: string;
  subtitulo_trabalho: string;
  nome_orientador: string;
  titulacao_orientador: string;
  ano_apresentacao: number;
  numero_folhas: string;
  ilustracao: string;
  unidade: string;
  tipo_trabalho: string;
  area_conhecimento: string;
  palavras_chave: string[];
  fonte: string;
};

export function Home() {
  const methods = useForm<FormData>();
  const { handleSubmit } = methods;

  const onsubmit = (data: FormData) => {
    console.log("Form submitted!");
    console.log(data);
  };

  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-3 justify-start max-w-2xl"
        >
          <AuthorsFieldset
          // numberAutors={numberAutors}
          // handleAddAutor={handleAddAutor}
          // handleExcludeAutor={handleExcludeAutor}
          />
          <WorkDataFieldset />
          <KeywordsFieldset />
          <button
            type="submit"
            className="self-center p-2.5 mt-3 text-sm font-medium rounded-lg border-2 border-red-800 bg-white
              text-red-800 hover:text-white hover:bg-red-800 duration-300 cursor-pointer"
          >
            Gerar Ficha Catalográfica
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
