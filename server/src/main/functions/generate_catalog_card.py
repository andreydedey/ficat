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
    ilustracao: str
    unidade: str
    tipo_trabalho: str
    curso_programa: Optional[str] = None
    area_conhecimento: Optional[str]
    palavras_chave: List[str] = Field(..., min_items=1)
    fonte: str


def generate_catalog_card(data: CatalogCard):
    pdf = FPDF()
    pdf.add_page()

    # Configuração de margens e largura da página
    left_margin = 20
    right_margin = 20
    bottom_margin = 25  # Ajuste para alinhar corretamente na parte inferior
    indent_space = " " * 4  # **Recuo de 4 caracteres após o nome do autor**

    pdf.set_margins(left_margin, 15, right_margin)
    page_width = pdf.w - left_margin - right_margin

    # Posicionar o texto na parte inferior da página
    pdf.set_y(pdf.h - bottom_margin - 65)

    # Definir fonte do conteúdo
    try:
        pdf.set_font(data.fonte, size=10)
    except:
        pdf.set_font("Arial", size=10)

    # Nome do autor e título com **recuo de 4 letras**
    pdf.cell(
        15, 5, "T346t", ln=0
    )  # Prefixo fixo ( Como nao temos Banco ainda deixei esse prefixo)
    pdf.cell(
        page_width - 15, 5, f"{data.sobrenome_autor.upper()}, {data.nome_autor}.", ln=1
    )

    pdf.cell(15, 5, "", ln=0)  # Espaço para recuo
    pdf.multi_cell(
        page_width - 15,
        5,
        f"{indent_space}{data.titulo_trabalho} - {data.nome_autor}. - {data.ano_apresentacao}.",
        align="J",
    )

    pdf.cell(15, 5, "", ln=0)
    pdf.multi_cell(
        page_width - 15,
        5,
        (
            f"{indent_space}{data.numero_folhas} f. : {data.ilustracao}"
            if data.ilustracao.lower() != "não possui"
            else f"{indent_space}{data.numero_folhas} f."
        ),
        align="J",
    )

    pdf.ln(2)

    # Orientador
    pdf.cell(15, 5, "", ln=0)
    pdf.multi_cell(
        page_width - 15,
        5,
        f"{indent_space}Orientador(a): {data.titulacao_orientador} {data.nome_orientador}.",
        align="J",
    )

    # Tipo de Trabalho e Instituição
    pdf.cell(15, 5, "", ln=0)
    pdf.multi_cell(
        page_width - 15,
        5,
        f"{indent_space}{data.tipo_trabalho} ({data.titulacao_orientador}) - Universidade Federal do Pará,",
        align="J",
    )

    pdf.cell(15, 5, "", ln=0)
    pdf.multi_cell(
        page_width - 15,
        5,
        f"{data.curso_programa}, {data.unidade}, {data.area_conhecimento}, {data.ano_apresentacao}.",
        align="J",
    )

    pdf.ln(2)

    # Palavras-chave
    palavras_chave_formatadas = (
        f"{indent_space}1. {'; '.join(data.palavras_chave)}. I. Título."
    )
    pdf.cell(15, 5, "", ln=0)
    pdf.multi_cell(page_width - 15, 5, palavras_chave_formatadas, align="J")

    pdf.ln(2)

    # Código CDD alinhado à direita
    pdf.cell(page_width, 5, "CDD 000", ln=1, align="R")

    # Linha final
    pdf.ln(2)
    pdf.line(left_margin, pdf.get_y(), pdf.w - right_margin, pdf.get_y())

    # **Cabeçalho ajustado para ficar na posição correta**
    pdf.set_y(pdf.h - bottom_margin - 90)  # Ajustando posição correta
    pdf.set_font("Arial", size=8, style="B")

    pdf.multi_cell(
        page_width,
        4,
        "Dados Internacionais de Catalogação na Publicação (CIP) de acordo com ISBD",
        align="C",
    )
    pdf.multi_cell(
        page_width,
        4,
        "Sistema de Bibliotecas da Universidade Federal do Pará",
        align="C",
    )
    pdf.multi_cell(
        page_width,
        4,
        "Gerada automaticamente pelo módulo Ficat, mediante os dados fornecidos pelo(a)",
        align="C",
    )
    pdf.multi_cell(page_width, 4, "autor(a)", align="C")

    pdf.ln(4)
    pdf.line(left_margin, pdf.get_y(), pdf.w - right_margin, pdf.get_y())

    # Gerar o PDF em bytes e retorná-lo
    pdf_bytes = pdf.output(dest="S").encode("latin-1")
    return io.BytesIO(pdf_bytes)
