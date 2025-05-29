import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";
import { generateCatalogCard } from "../../api/requests";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";

export type createCatalogCardData = z.infer<typeof createCatalogCardFormSchema>;

const createCatalogCardFormSchema = z.object({
  nomes_autor: z
    .array(
      z.object({
        nome: z.string().nonempty("Preencha o nome do Autor"),
        sobrenome: z.string().nonempty("Preencha o sobrenome do Autor"),
      }),
    )
    .min(1),
  titulo_trabalho: z.string().nonempty("O título do trabalho é obrigatório"),
  subtitulo_trabalho: z.string().optional(),
  nome_orientador: z.string().nonempty("O nome do orientador é obrigatório"),
  sobrenome_orientador: z
    .string()
    .nonempty("O sobrenome do orientador é obrigatório"),
  titulacao_orientador: z
    .string()
    .nonempty("Selecione a titulação do orientador"),
  ano_orientacao: z.string().nonempty("Selecione o ano de apresentação"),
  numero_folhas: z.string().nonempty("Preencha o número de folhas"),
  ilustracao: z.string(),
  unidade_academica: z.string().nonempty("Preencha a unidade acadêmica"),
  tipo_trabalho: z.string().nonempty("Selecione o tipo de trabalho"),
  area_conhecimento: z.string().nonempty("Preencha a área do conhecimento"),
  palavras_chave: z
    .array(
      z.object({
        value: z.string().nonempty("Informe a palavra chave"),
      }),
    )
    .min(1),
  fonte: z.string().nonempty("Selecione a fonte do texto"),
});

export function Home() {
  const location = useLocation();
  const [message, setMessage] = useState("");

  const methods = useForm<createCatalogCardData>({
    resolver: zodResolver(createCatalogCardFormSchema),
    defaultValues: {
      nomes_autor: [{ nome: "", sobrenome: "" }],
      palavras_chave: [{ value: "" }],
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onsubmit = (data: createCatalogCardData) => {
    console.log(data);
    generateCatalogCard(data);
  };

  useEffect(() => {
    if (location.state?.successMessage) {
      setMessage(location.state.successMessage);
      window.history.replaceState({}, document.title);
    }
  }, [location.state]);

  return (
    <div className="rounded-md border-2 p-4 border-red-700">
      {message && (
        <div className="bg-green-100 text-green-800 p-2 rounded mb-4 text-sm border border-green-300">
          {message}
        </div>
      )}
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
            disabled={isSubmitting}
          >
            Gerar Ficha Catalográfica
          </button>
        </form>
      </FormProvider>
    </div>
  );
}
