from typing import Union

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/cliente/{Cliente_info}")
def read_item(cliente_id: int, nombre: Union[str, None] = None):
    return {"item_id": item_id, "q": q}

@app.put("/clientes/mobiles/{mobil_info}")
def insert_item( mobile_ident:int, mobile_name:str, mobile_port:int):
    return {"item_name": item.name, "item_id": item_id}

@app.delete("/items/{cliente_id}")
def delete_item(cliente_id: int):
    return {"se ha borrado el dispositivo del ": cliente_id + "de la base de datos"}