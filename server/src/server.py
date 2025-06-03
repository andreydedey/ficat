import os
from dotenv import load_dotenv

from flask import Flask
from flask_cors import CORS

from src.models.config.seed import seed_data
from src.models.config.connection import db_connection_handler

from src.routes.catalog_card_route import catalog_card_route
from src.routes.send_email_talkToUs_route import send_email_talkToUs_route
from src.routes.db_routes import bd_routes_bp
from src.config.mail_config import create_mail_config

load_dotenv()

app = Flask(__name__)
CORS(app, origins=[os.environ.get("FRONT_END_URL")])

# Conectando ao banco de dados
db_connection_handler.connect_to_db()

# Populando banco de dados com seed
seed_data()

# Configuração do Mail
mail = create_mail_config(app)


# Registrar rotas
app.add_url_rule(
    "/generate_catalog_card", "catalog_card_route", catalog_card_route, methods=["POST"]
)

app.add_url_rule(
    "/send_email",
    "send_email_talkToUs_route",
    send_email_talkToUs_route,
    methods=["POST"],
)

app.register_blueprint(bd_routes_bp)
