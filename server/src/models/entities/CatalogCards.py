from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.sql import func
from src.models.config.base import Base

class CatalogCards(Base):
    __tablename__ = "catalogCards"

    id = Column(Integer, primary_key=True)
    work_type = Column("type", String, nullable=False)
    acronym = Column(String, nullable=False)
    unityName = Column(String, nullable=False)
    courseName = Column(String, nullable=False)
    datetime = Column(DateTime, default=func.now())

    def __repr__(self):
        return (f"CatalogCards(id={self.id}, work_type={self.work_type}, acronym={self.acronym}, "
                f"unityName={self.unityName}, courseName={self.courseName}, datetime={self.datetime})")
