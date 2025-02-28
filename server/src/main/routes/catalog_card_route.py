from flask import request, jsonify, send_file
from ..functions.generate_catalog_card import CatalogCard


def catalog_card_route():
    try:
        data = request.json
        pdf_buffer = CatalogCard(**data)

        return send_file(
            pdf_buffer,
            mimetype="application/pdf",
            as_attachment=True,
            download_name="ficha_catalografica.pdf",
        )
    except Exception as error:
        return (jsonify({"error": str(error)})), 400
