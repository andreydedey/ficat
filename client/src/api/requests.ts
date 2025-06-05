import { api } from "./api";
import type { createCatalogCardData } from "../components/Home/Home"
import { sendEmailData } from "../components/TalktoUs";

export const generateCatalogCard = async (data: createCatalogCardData) => {
  try {
    const response = await api.post("/generate_catalog_card", 
      data, {
      responseType: "blob"
    });

    const file = new Blob([response.data], {type: "application/pdf"});
    const fileURL = URL.createObjectURL(file);

    window.open(fileURL, "_blank");
  } catch (error) {
    console.error("Erro ao gerador o PDF: ", error);
  }
};


export const sendEmail = async (data: sendEmailData) => {
  try {
    const response = await api.post("/send_email", data, {
      headers: { "Content-Type": "multipart/form-data" }
    })
  } catch (error) {
    console.error("Erro ao enviar o Email: ", error)
  }
}

export const getCourses = async ({type_of_work, academic_unity}: {
  type_of_work: string,
  academic_unity: string,
}) => {
  try {
    const response = await api.get("/db/get_courses", {
      params: {type_of_work, academic_unity}
    });
    return response.data;
  } catch (error) {
    console.error("Erro ao obter os cards do catálogo: ", error);
  }
}


export const getAcademicUnities = async () => {
  try {
    const response = await api.get("/db/get_academic_unities");
    return response.data;
  } catch (error) {
    console.error("Erro ao obter as unidades acadêmicas: ", error);
  }
}
