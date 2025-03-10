from flask import request, jsonify, send_file
from ..functions.generate_catalog_card import CatalogCard, generate_catalog_card


def catalog_card_route():
    try:
        data = request.json
        catalog_card_data = CatalogCard(**data)
        pdf_buffer = generate_catalog_card(catalog_card_data)

        return send_file(
            pdf_buffer,
            mimetype="application/pdf",
            as_attachment=True,
            download_name="ficha_catalografica.pdf",
        )
    except Exception as error:
        return (jsonify({"error": str(error)})), 400
