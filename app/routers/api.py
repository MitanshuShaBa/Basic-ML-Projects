from fastapi import APIRouter
from . import heart_disease_api

router = APIRouter()

router.include_router(heart_disease_api.api, prefix='/heart_disease', tags=['Heart Disease UCI'])
