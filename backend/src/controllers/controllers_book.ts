import { Request, Response } from "express"
import { Book } from "../models/model_book"

export const getAllBooks = async (req: Request, res: Response) => {
    try {
        const books = await Book.find()
        res.json({ success: true, data: books })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}

export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findById(req.params.id)
        if (!book) return res.status(404).json({ success: false, message: "Libro no encontrado" })
        res.json({ success: true, data: book })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}

export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = new Book(req.body)
        const saved = await newBook.save()
        res.status(201).json({ success: true, data: saved })
    } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message })
    }
}

export const updateBook = async (req: Request, res: Response) => {
    try {
        const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!updated) return res.status(404).json({ success: false, message: "Libro no encontrado" })
        res.json({ success: true, data: updated })
    } catch (error) {
        res.status(400).json({ success: false, message: (error as Error).message })
    }
}

export const deleteBook = async (req: Request, res: Response) => {
    try {
        const deleted = await Book.findByIdAndDelete(req.params.id)
        if (!deleted) return res.status(404).json({ success: false, message: "Libro no encontrado" })
        res.json({ success: true, message: "Libro eliminado", data: deleted })
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message })
    }
}
