from src.models.config.connection import db_connection_handler
from src.models.entities.AcademicUnities import AcademicUnities

from sqlalchemy.exc import NoResultFound


class AcademicUnitiesRepository:
    def get_all_academic_unities(self):
        with db_connection_handler as db:
            try:
                academic_unities = db.session.query(AcademicUnities).all()
                return academic_unities
            except NoResultFound:
                return None
            except Exception as e:
                print(f"Error fetching academic unities: {e}")
