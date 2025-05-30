from flask import Blueprint

from src.services.AcademicUnitiesService import AcademicUnitiesService
bd_routes_bp = Blueprint("db", __name__, url_prefix="/db")

@bd_routes_bp.route("/get_academic_unities", methods=["GET"])
def get_academic_unities():
    academic_unities_service = AcademicUnitiesService()
    academic_unities = academic_unities_service.get_academic_unities()
    if academic_unities:
        return {"academic_unities": academic_unities}, 200
    else:
        return {"error": "No academic unities found"}, 404
