from sqlalchemy import Column, Integer, String
from src.models.config.base import Base


class Course(Base):
    __tablename__ = "courses"

    id = Column(Integer, primary_key=True)
    unityAcronym = Column(String, nullable=False)
    name = Column(String, nullable=False)
    program = Column(String, nullable=False)
    work_type = Column("type", String, nullable=False)

    def __repr__(self):
        return (
            f"Course[id={self.id}, unityAcronym={self.unityAcronym}, name={self.name}, "
            f"program={self.program}, work_type={self.work_type}]"
        )
    
    def to_dict(self):
        return {
            "id": self.id,
            "unityAcronym": self.unityAcronym,
            "name": self.name,
            "program": self.program,
            "work_type": self.work_type,
        }
