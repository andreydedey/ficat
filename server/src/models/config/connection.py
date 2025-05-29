from dotenv import load_dotenv
import os
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from src.models.config.base import Base

# Load the environment variables
load_dotenv()

# .env bariables

class __DBConnectionHandler:
    def __init__(self):
        self.__connection_string = (

        )
        self.__engine = None
        self.session = None
    

    def connect_to_db(self) -> None:
        self.__engine = create_engine(self.__connection_string)
    

    def __enter__(self):
        session_maker = sessionmaker()
        self.session = session_maker(bind=self.__engine)
        return self


    def __exit__(self):
        self.session.close()


db_connection_handler = __DBConnectionHandler()