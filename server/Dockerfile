FROM python:3.12.9-alpine

WORKDIR /usr/app

COPY requirements.txt .

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 5050

CMD [ "python", "app.py" ]