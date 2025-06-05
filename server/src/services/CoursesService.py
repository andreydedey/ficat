from src.models.repository.CoursesRepository import CoursesRepository


class CoursesService:
    def __init__(self):
        self.__courses_repository_repository = CoursesRepository()

    def get_academic_unities(self, work_type: str, academic_unity: str):
        courses = self.__courses_repository_repository.get_by_work_type_and_unity(
            work_type, academic_unity
        )
        return courses
