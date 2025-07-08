
import { Schema, model } from "mongoose"

const bookSchema = new Schema(
    {
        title: { type: String, required: true, unique: true },
        author: { type: String, required: true },
        publishedYear: Number,
        available: { type: Boolean, default: true },

    },
    { timestamps: true }
)

export const Book = model("Book", bookSchema)
