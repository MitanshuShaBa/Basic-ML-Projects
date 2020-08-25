from fastapi import FastAPI, Request
from fastapi.responses import RedirectResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .routers import api

app = FastAPI()
app.mount("/static", StaticFiles(directory="app/frontend/build"), name="frontend")
templates = Jinja2Templates(directory="app/frontend/build")


@app.get('/heart-disease')
@app.get('/about')
@app.get('/')
def frontend(request: Request):
    return templates.TemplateResponse(f"index.html", {"request": request})


app.include_router(api.router, prefix='/api', tags=['api'])
