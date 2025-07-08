import mongoose from "mongoose"

export const connectDb = async () => {
  try {
    const MONGO_URI = "mongodb://localhost:27017/utn_books" 
    await mongoose.connect(MONGO_URI)
    console.log("✅ Conectado a MongoDB")
  } catch (error) {
    console.error("🛑 Error al conectarse a Mongo DB", (error as Error).message)
  }
}
