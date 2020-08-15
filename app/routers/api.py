from fastapi import APIRouter

router = APIRouter()

# @router.post("/scan", status_code=200)
# async def scan(file: UploadFile = File(...)):
#     """
#     It will extract information using OCR and extract relevant information from it giving a json response
#     """
#     filename = file.filename
#     if not filename.endswith('.pdf'):
#         return JSONResponse({"message": "Upload PDF file"}, status_code=422)
#     while os.path.exists(filename):
#         filename = filename.split('.')[-2] + '_1' + '.' + filename.split('.')[-1]
#     try:
#         response = scan_invoice(file.file)
#         return JSONResponse(response)
#     except Exception as e:
#         return JSONResponse(content={"error": str(e)}, status_code=500)