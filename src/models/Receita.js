import mongoose from "mongoose";

const ReceitaSchema = new mongoose.Schema({
  titulo: { String, required: true, trim: true },
  tempo: { Number, required: true },
  porcoes: { Number, required: true },
  imagem_url: { Number, required: true }
})

const Receita = mongoose.model('Receita', ReceitaSchema)

export default Receita