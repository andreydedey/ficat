from src.models.repository.AcademicUnitiesRepository import AcademicUnitiesRepository


class AcademicUnitiesService:
    def __init__(self):
        self.__academic_unities_repository = AcademicUnitiesRepository()

    def get_academic_unities(self):
        academic_unities = self.__academic_unities_repository.get_all_academic_unities()
        return [academic_unity.to_dict() for academic_unity in academic_unities]
