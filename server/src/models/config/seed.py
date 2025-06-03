import os

from sqlalchemy import text

from src.models.entities.AcademicUnities import AcademicUnities
from src.models.entities.Courses import Course
from src.models.entities.CatalogCards import CatalogCards


from src.models.config.connection import db_connection_handler


def seed_from_sql_file(filename: str):
    with db_connection_handler as db:
        file_path = os.path.join(os.path.dirname(__file__), "", filename)

        with open(file_path, 'r', encoding='utf-8') as file:
            sql = file.read()

        try:
            db.session.execute(text(sql))  # Executa os comandos
            db.session.commit()
            print("Seed executada com sucesso.")
        except Exception as e:
            db.session.rollback()
            print(f"Erro ao aplicar seed: {e}")
            

def seed_data():
    with db_connection_handler as db:
        try:
            # Academic Unities
            academic_unities = [
                AcademicUnities(name="Instituto de Ciências Exatas", acronym="ICE"),
                AcademicUnities(name="Faculdade de Letras", acronym="FALE"),
                AcademicUnities(name="Escola de Engenharia", acronym="EE")
            ]
            db.session.add_all(academic_unities)

            # Courses
            courses = [
                Course(unityAcronym="ICE", name="Matemática", program="Licenciatura", work_type="TCC"),
                Course(unityAcronym="FALE", name="Letras - Português", program="Bacharelado", work_type="Monografia"),
                Course(unityAcronym="EE", name="Engenharia Civil", program="Bacharelado", work_type="Projeto Final")
            ]
            db.session.add_all(courses)

            # Catalog Cards
            catalog_cards = [
                CatalogCards(work_type="TCC", acronym="ICE", unityName="Instituto de Ciências Exatas", courseName="Matemática"),
                CatalogCards(work_type="Monografia", acronym="FALE", unityName="Faculdade de Letras", courseName="Letras - Português"),
                CatalogCards(work_type="Projeto Final", acronym="EE", unityName="Escola de Engenharia", courseName="Engenharia Civil")
            ]
            db.session.add_all(catalog_cards)

            db.session.commit()
            print("Seed executado com sucesso.")

        except Exception as e:
            db.session.rollback()
            print(f"Erro ao executar seed: {e}")
