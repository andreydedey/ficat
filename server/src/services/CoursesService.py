from src.models.repository.CoursesRepository import CoursesRepository


class CoursesService:
    def __init__(self):
        self.__courses_repository_repository = CoursesRepository()

    def get_academic_unities(self, type_of_work: str, academic_unity: str):
        academic_unities = (
            self.__courses_repository_repository.get_by_work_type_and_unity(
                type_of_work, academic_unity
            )
        )
        return academic_unities
