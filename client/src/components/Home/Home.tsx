import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useLocation } from "react-router";
import { z } from "zod";
import {
  generateCatalogCard,
  getAcademicUnities,
  getCourses,
} from "../../api/requests";
import { createCatalogCardFormSchema } from "../../schemas/createCatalogCardFormSchema";
import { AuthorsFieldset } from "./AuthorsFieldset";
import { KeywordsFieldset } from "./KeywordsFieldset";
import { WorkDataFieldset } from "./WorkDataFieldset";

export type createCatalogCardData = z.infer<typeof createCatalogCardFormSchema>;

export type academicUnity = {
  id: number;
  acronym: string;
  name: string;
};

export type coursesProgram = {
  id: number;
  name: string;
  program: string;
  unityAcronym: string;
  work_type: string;
};

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
    watch,
  } = methods;

  const selectedAcademicUnity = watch("unidade_academica");
  const selectedTypeOfWork = watch("tipo_trabalho");

  const { data: academicUnities } = useQuery<academicUnity[]>({
    queryKey: ["academicUnities"],
    queryFn: getAcademicUnities,
  });

  const { data: coursesPrograms } = useQuery<coursesProgram[]>({
    queryKey: ["coursesPrograms", selectedAcademicUnity, selectedTypeOfWork],
    queryFn: () =>
      getCourses({
        academic_unity: selectedAcademicUnity,
        type_of_work: selectedTypeOfWork,
      }),
    enabled: !!selectedAcademicUnity && !!selectedTypeOfWork,
  });

  const onsubmit = (data: createCatalogCardData) => {
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
          <WorkDataFieldset
            academicUnities={academicUnities ?? []}
            coursesPrograms={coursesPrograms ?? []}
          />
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
