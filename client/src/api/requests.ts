import { api } from "./api"

const generateCatalogCard = () => {
    api.post('/generate_catalog_card')
}