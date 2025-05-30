from flask import Blueprint, request

from src.services.AcademicUnitiesService import AcademicUnitiesService
from src.services.CoursesService import CoursesService


bd_routes_bp = Blueprint("db", __name__, url_prefix="/db")


@bd_routes_bp.route("/get_academic_unities", methods=["GET"])
def get_academic_unities():
    academic_unities_service = AcademicUnitiesService()
    academic_unities = academic_unities_service.get_academic_unities()
    if academic_unities:
        return {"academic_unities": academic_unities}, 200
    else:
        return {"error": "No academic unities found"}, 404


@bd_routes_bp.route(
    "/get_courses", methods=["GET"]
)
def get_academic_unities_by_type_and_unity():
    courses_service = CoursesService()

    type_of_work = request.args.get("type_of_work")
    academic_unity = request.args.get("academic_unity")

    academic_unities = courses_service.get_academic_unities(
        type_of_work, academic_unity
    )
    if academic_unities:
        return {"academic_unities": academic_unities}, 200
    else:
        return {
            "error": "No academic unities found for the specified type of work and unity"
        }, 404
