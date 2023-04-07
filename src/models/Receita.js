import mongoose from "mongoose";

const ReceitaSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    tempoPreparo: {
        type: Number,
        required: true
    },
    porcoes: {
        type: Number,
        required: true
    },
    imagem: {
        type: String,
        required: true
    }
});

const Receita = mongoose.model("Receita", ReceitaSchema);

export default Receita;