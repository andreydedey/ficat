import io
from pydantic import BaseModel, Field
from typing import Optional, List
from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
from reportlab.lib.utils import simpleSplit


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
    buffer = io.BytesIO()
    pdf = canvas.Canvas(buffer, pagesizes=A4)
    width, height = A4

    pdf.setFont("Helvetica", 12)

    # Cabeçalho
    pdf.drawString(
        100, height - 50, "Dados Internacionais de Catalogação na Publicação (CIP)"
    )
    pdf.drawString(
        100, height - 70, "Sistema de Bibliotecas da Universidade Federal do Pará"
    )
    pdf.drawString(
        100,
        height - 90,
        "Gerada automaticamente pelo módulo Ficat, mediante os dados fornecidos pelo(a) autor(a)",
    )

    # Nome e Título
    pdf.setFont("Helvetica-Bold", 12)
    pdf.drawString(
        100, height - 120, f"{data.titulo_trabalho.upper()}, {data.nome_autor}."
    )
    titulo_formatado = simpleSplit(
        f"{data.titulo_trabalho} / {data.nome_autor}. — {data.ano_apresentacao}.",
        400,
        pdf._fontname,
        pdf._fontsize,
    )

    # Lógica para lidar caso o título seja muito grande
    for i, linha in enumerate(titulo_formatado):
        pdf.drawString(100, height - 140 - (i * 15), linha)

    pdf.drawString(
        100, height - 160 - (len(titulo_formatado) * 15), f"{data.numero_folhas} f."
    )

    # Orientador
    pdf.drawString(
        100,
        height - 190 - (len(titulo_formatado) * 15),
        f"Orientador(a): Prof. {data.titulacao_orientador} {data.nome_orientador}",
    )

    # Tipo de trabalho e instituição
    pdf.drawString(
        100,
        height - 240 - (len(titulo_formatado) * 15),
        f"{data.tipo_trabalho} ({data.titulacao_orientador}) - {data.unidade}, {data.ano_apresentacao}",
    )

    # Palavras-chave
    pdf.drawString(
        100,
        height - 240 - (len(titulo_formatado) * 15),
        f"1. {', '.join(data.palavras_chave)}. I. Título",
    )

    pdf.save()
    buffer.seek(0)
    return buffer
