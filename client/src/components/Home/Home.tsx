import { useState } from "react";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";



type Autor = {
  nome: string;
  sobrenome: string;
};

const createCatalogCardFormSchema = z.object({
  nomes_autor: Autor[];
  titulo_trabalho: z.string();
  subtitulo_trabalho: z.string();
  nome_orientador: z.string();
  titulacao_orientador: z.string();
  ano_apresentacao: z.number();
  numero_folhas: z.string();
  ilustracao: z.string();
  unidade: z.string();
  tipo_trabalho: z.string();
  area_conhecimento: z.string();
  palavras_chave: string[];
  fonte: z.string();
});

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
          <AuthorsFieldset />
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
