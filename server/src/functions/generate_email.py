from typing import Optional
from flask_mail import Message
from pydantic import BaseModel


class Email(BaseModel):
    name: str
    email: str
    phonenumber: Optional[str]
    message: Optional[str]


def generate_email(data: Email):
    message_body = f"{data.name}\n{data.email}\n{data.phonenumber}\n{data.message}"

    msg = Message(
        subject="Fale Conosco",
        recipients=["andrey.oliveira@icen.ufpa.br"],
        body=message_body,  # Mensagem
        sender=data.email,
    )

    return msg
