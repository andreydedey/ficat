import { api } from "./api";
import type { createCatalogCardData } from "../components/Home/Home"

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
