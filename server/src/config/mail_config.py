import os
from dotenv import load_dotenv
from flask_mail import Mail

load_dotenv()  # Carrega as variáveis de ambiente do arquivo .env


def create_mail_config(app):
    app.config["MAIL_SERVER"] = "smtp.gmail.com"
    app.config["MAIL_PORT"] = 587
    app.config["MAIL_USE_TLS"] = True
    app.config["MAIL_USERNAME"] = os.environ.get("MAIL_USER")
    app.config["MAIL_PASSWORD"] = os.environ.get("MAIL_PASSWORD")

    if not app.config["MAIL_PASSWORD"]:
        raise ValueError("A variável de ambiente MAIL_PASSWORD não está definida.")

    print(app.config["MAIL_PASSWORD"])

    return Mail(app)
