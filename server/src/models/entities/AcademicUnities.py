from sqlalchemy import Column, Integer, String
from src.models.config.base import Base


class AcademicUnities(Base):
    __tablename__ = "academicUnities"

    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    acronym = Column(String, nullable=False)

    def __repr__(self):
        print(
            f"Unidade Acadêmica [id = {self.id}, title={self.title}, acronym={self.acronym}]"
        )

    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "acronym": self.acronym,
        }
