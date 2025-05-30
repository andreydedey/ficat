from src.models.config.connection import db_connection_handler
from src.models.entities.Courses import Course

from sqlalchemy.exc import NoResultFound


class CoursesRepository:
    def get_by_work_type_and_unity(self, typeOfWork: str, academicUnity: str):
        with db_connection_handler as db:
            try:
                courses = Course.query.filter(
                    Course.typeOfWork == typeOfWork,
                    Course.academicUnity == academicUnity,
                ).all()
                return courses
            except NoResultFound:
                return None
            except Exception as e:
                print(f"Error fetching courses unities: {e}")
