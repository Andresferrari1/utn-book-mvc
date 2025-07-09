import { Request, Response } from "express"
import { Book } from "../models/model_book"


const getAllBooks = async (req: Request, res: Response): Promise<any> => {
    try {
        const books = await Book.find()
        res.json({ success: true, data: books, message: "Libros obtenidos" })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}

const getBookById = async (req: Request, res: Response): Promise<any> => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" })
        }
        res.json({ success: true, data: book, message: "Libro obtenido" })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}

const createBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const newBook = new Book(req.body)
        const savedBook = await newBook.save()
        res.status(201).json({ success: true, data: savedBook, message: "Libro creado" })
    } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message })
    }
}

const updateBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updatedBook) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" })
        }
        res.json({ success: true, data: updatedBook, message: "Libro actualizado" })
    } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message })
    }
}

const deleteBook = async (req: Request, res: Response): Promise<any> => {
    try {
        const deletedBook = await Book.findByIdAndDelete(req.params.id)
        if (!deletedBook) {
            return res.status(404).json({ success: false, message: "Libro no encontrado" })
        }
        res.json({ success: true, data: deletedBook, message: "Libro eliminado" })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}

export { getAllBooks, getBookById, createBook, updateBook, deleteBook }
