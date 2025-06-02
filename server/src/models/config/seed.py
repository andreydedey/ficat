import os

from src.models.config.connection import db_connection_handler
from sqlalchemy import text


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
