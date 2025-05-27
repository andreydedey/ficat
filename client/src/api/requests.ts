import { api } from "./api";
import type { createCatalogCardData } from "../components/Home/Home"

export const generateCatalogCard = (data: createCatalogCardData) => {
  api.post("/generate_catalog_card", data);
};
