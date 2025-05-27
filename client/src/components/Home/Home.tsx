import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";
import { generateCatalogCard } from "../../api/requests";

export type createCatalogCardData = z.infer<typeof createCatalogCardFormSchema>;

const createCatalogCardFormSchema = z.object({
  nomes_autor: z
    .array(
      z.object({
        nome: z.string().nonempty(),
        sobrenome: z.string().nonempty(),
      }),
    )
    .min(1),
  titulo_trabalho: z.string().nonempty("O título do trabalho é obrigatório"),
  subtitulo_trabalho: z.string(),
  nome_orientador: z.string(),
  titulacao_orientador: z.string(),
  ano_orientacao: z.string(),
  numero_folhas: z.string().nonempty(),
  ilustracao: z.string(),
  unidade_academica: z.string(),
  tipo_trabalho: z.string(),
  area_conhecimento: z.string(),
  palavras_chave: z
    .array(
      z.object({
        value: z.string().nonempty(),
      }),
    )
    .min(1),
  fonte: z.string(),
});

export function Home() {
  const methods = useForm<createCatalogCardData>({
    resolver: zodResolver(createCatalogCardFormSchema),
    defaultValues: {
      nomes_autor: [{ nome: "", sobrenome: "" }],
      palavras_chave: [{ value: "" }],
    },
  });

  const { handleSubmit } = methods;

  const onsubmit = (data: createCatalogCardData) => {
    console.log(data);
    generateCatalogCard(data);
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
