import express from "express"
import { connectDb } from "./config/mongo"
import { bookRouter } from "./routes/router_book"
import cors from "cors"

const PORT = 3000

const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/books", bookRouter)

app.listen(PORT, () => {
    console.log(`✅ Servidor HTTP en funcionamiento en el puerto ${PORT}.`)
    connectDb()
})
