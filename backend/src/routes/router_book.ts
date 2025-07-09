import { Router, Request, Response } from "express"
import { getAllBooks, getBookById, createBook, updateBook, deleteBook } from "../controllers/controllers_book"


const router = Router()

router.get("/",getAllBooks)
router.get("/:id",getBookById)
router.post("/",createBook)
router.patch("/:id",updateBook)
router.delete("/:id",deleteBook)

export { router as bookRouter }
