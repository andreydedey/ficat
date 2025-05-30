from flask import request, jsonify
from src.services.generate_email import Email, generate_email

def send_email_talkToUs_route():
    from src.server import mail
    try:
        msg = Email(**request.form.to_dict())
        msg.attachment = request.files.get('attachment')
        sender = generate_email(msg)
        mail.send(sender)

        return jsonify({"mail": str(msg)}), 200

    except Exception as error:
        return jsonify({"error": str(error)}), 400
