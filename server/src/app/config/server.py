from flask import Flask
from src.app.routes.catalog_card_route import catalog_card_route
from src.app.routes.send_email_talkToUs_route import send_email_talkToUs_route
from src.app.config.mail_config import create_mail_config

app = Flask(__name__)

# TODO Conexão com o banco de dados

# Configuração do Mail
mail = create_mail_config(app)

# Registrar rotas
app.add_url_rule(
    "/generate_catalog_card", "catalog_card_route", catalog_card_route, methods=["POST"]
)

app.add_url_rule(
    "/send_email_talkToUs",
    "send_email_talkToUs_route",
    send_email_talkToUs_route,
    methods=["POST"],
)
