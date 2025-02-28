from flask import Flask

# Conexão com o banco de dados

app = Flask(__name__)

from src.main.routes.catalog_card_route import catalog_card_route

# Registrar rotas
app.add_url_rule(
    "/generate_catalog_card", "catalog_card_route", catalog_card_route, methods=["POST"]
)
