import { z } from "zod";

export const createCatalogCardFormSchema = z.object({
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
