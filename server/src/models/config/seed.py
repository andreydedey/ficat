import os

from sqlalchemy import text

from src.models.entities.AcademicUnities import AcademicUnities
from src.models.entities.Courses import Course
from src.models.entities.CatalogCards import CatalogCards


from src.models.config.connection import db_connection_handler


def seed_from_sql_file(filename: str):
    with db_connection_handler as db:
        file_path = os.path.join(os.path.dirname(__file__), "", filename)

        with open(file_path, "r", encoding="utf-8") as file:
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
            print("Iniciando limpeza dos dados existentes...")

            # Limpar dados existentes (ordem importante devido às chaves estrangeiras)
            # Primeiro deletar CatalogCards (dependente)
            db.session.query(CatalogCards).delete()
            print("CatalogCards deletados.")

            # Depois deletar Courses (dependente)
            db.session.query(Course).delete()
            print("Courses deletados.")

            # Por último deletar AcademicUnities (tabela pai)
            db.session.query(AcademicUnities).delete()
            print("AcademicUnities deletados.")

            # Commit da limpeza
            db.session.commit()
            print("Limpeza concluída com sucesso.")

            print("Iniciando inserção de novos dados...")

            # Academic Unities
            academic_unities = [
                AcademicUnities(name="Instituto de Ciências Exatas", acronym="ICE"),
                AcademicUnities(name="Faculdade de Letras", acronym="FALE"),
                AcademicUnities(name="Escola de Engenharia", acronym="EE"),
            ]
            db.session.add_all(academic_unities)
            print("AcademicUnities adicionados.")

            # Courses
            courses = [
                Course(
                    unityAcronym="ICE",
                    name="Matemática",
                    program="Licenciatura",
                    work_type="TC",
                ),
                Course(
                    unityAcronym="FALE",
                    name="Letras - Português",
                    program="Bacharelado",
                    work_type="Dissertação",
                ),
                Course(
                    unityAcronym="EE",
                    name="Engenharia Civil",
                    program="Bacharelado",
                    work_type="TC",
                ),
            ]
            db.session.add_all(courses)
            print("Courses adicionados.")

            # Catalog Cards
            catalog_cards = [
                CatalogCards(
                    work_type="TCC",
                    acronym="ICE",
                    unityName="Instituto de Ciências Exatas",
                    courseName="Matemática",
                ),
                CatalogCards(
                    work_type="Monografia",
                    acronym="FALE",
                    unityName="Faculdade de Letras",
                    courseName="Letras - Português",
                ),
                CatalogCards(
                    work_type="Projeto Final",
                    acronym="EE",
                    unityName="Escola de Engenharia",
                    courseName="Engenharia Civil",
                ),
            ]
            db.session.add_all(catalog_cards)
            print("CatalogCards adicionados.")

            # Commit final
            db.session.commit()
            print(
                "Seed executado com sucesso! Todos os dados foram limpos e recriados."
            )

        except Exception as e:
            db.session.rollback()
            print(f"Erro ao executar seed: {e}")
            raise e
