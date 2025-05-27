import os
from dotenv import load_dotenv

from flask import Flask
from flask_cors import CORS

from src.routes.catalog_card_route import catalog_card_route
from src.routes.send_email_talkToUs_route import send_email_talkToUs_route
from src.config.mail_config import create_mail_config

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.environ.get("FRONT_END_URL")])

# TODO Conexão com o banco de dados

# Configuração do Mail
mail = create_mail_config(app)

# Registrar rotas
app.add_url_rule(
    "/generate_catalog_card", 
    "catalog_card_route", 
    catalog_card_route, 
    methods=["POST"]
)

app.add_url_rule(
    "/send_email_talkToUs",
    "send_email_talkToUs_route",
    send_email_talkToUs_route,
    methods=["POST"],
)
