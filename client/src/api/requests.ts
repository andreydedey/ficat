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
    const response = await api.post("/send_email", data)
  } catch (error) {
    console.error("Erro ao enviar o Email: ", error)
  }
}
