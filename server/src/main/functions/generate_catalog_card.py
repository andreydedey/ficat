import io
from pydantic import BaseModel, Field
from typing import Optional, List
from fpdf import FPDF


class CatalogCard(BaseModel):
    nome_autor: str
    sobrenome_autor: str
    titulo_trabalho: str
    subtitulo_trabalho: Optional[str] = None
    nome_orientador: str
    titulacao_orientador: Optional[str]
    ano_apresentacao: int
    numero_folhas: int
    unidade: str
    tipo_trabalho: str
    area_conhecimento: Optional[str]
    palavras_chave: List[str] = Field(..., min_items=1)
    fonte: str


def generate_catalog_card(data: CatalogCard):
    pdf = FPDF()
    pdf.add_page()
    page_width = pdf.w

    pdf.set_font(data.fonte, size=10, style='B')

    # pdf.set_left_margin(30)

    pdf.cell(
        page_width, 10, txt="Dados Internacionais de Catalogação na Publicação (CIP) de acordo com ISBD", ln=1, align='C'
    )
    pdf.cell(
        page_width, 10, txt="Sistema de Bibliotecas da Universidade Federal do Pará", ln=1, align='C'
    )
    pdf.cell(
        page_width,
        10,
        txt="Gerada automaticamente pelo módulo Ficat, mediante os dados fornecidos pelo(a)",
        ln=1,
        align='C'
    )
    pdf.cell(page_width, 10, txt="autor(a)", ln=1, align='C')

    # Linha
    # pdf.line(60, 50, 180, 50)

    pdf.set_font(data.fonte, size=11, style='')

    pdf.cell(page_width, 10, txt=f"{data.sobrenome_autor.upper()}, {data.nome_autor.capitalize()}", ln=1)
    pdf.cell(
        page_width,
        10,
        txt=f"{data.titulo_trabalho.upper()} / {data.nome_autor}. - {data.ano_apresentacao}",
        ln=1,
    )
    pdf.cell(page_width, 10, txt=f"{data.numero_folhas} f.", ln=1)

    pdf.cell(
        page_width,
        10,
        txt=f"Orientador(a): Prof(a). {data.titulacao_orientador}. {data.nome_orientador}",
        ln=1,
    )

    pdf.cell(
        page_width,
        10,
        txt=f"Tese ({data.titulacao_orientador}) - Universidade Federal do Pará,",
        ln=1,
    )
    pdf.cell(
        page_width,
        10,
        txt=f"{data.unidade}, Programa de Pós-Graduação em Programa (tem que fazer), Belém, {data.ano_apresentacao}.",
        ln=1,
    )
    pdf.cell(page_width, 10, txt=f"1. {', '.join(data.palavras_chave)}. I. Título.", ln=1)
    
    pdf.cell(page_width, 10, txt=f"CDD (Tem que fazer)", ln=1, align='R')



    pdf_bytes = pdf.output(dest="S").encode("latin-1")  # PDF será gerado em bytes
    return io.BytesIO(pdf_bytes)
