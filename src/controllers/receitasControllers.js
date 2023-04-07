import Receita from "../models/Receita.js";

const listarReceitas = async (req, res) => {
    const receitas = await Receita.find();
    res.status(200).send(receitas);
}

const listarReceitasPorId = async (req, res) => {
    const id = req.params.id;
    const receita = await Receita.findById(id);
    res.status(200).send(receita);
}

const criarReceita = async (req, res) => {
    const receita = req.body;
    const novaReceita = new Receita(receita);
    await novaReceita.save();
    
    res.status(200).send(novaReceita);
}

const atualizarReceita = async (req, res) => {
    const id = req.params.id;
    const receita = req.body;
    
}

const deletarReceita = async (req, res) => {
    const id = req.params.id;
    const receita = await Receita.findByIdAndDelete(id);
    res.status(200).send(receita);
}


const receitasController = {
    listarReceitas,
    listarReceitasPorId,
    criarReceita,
    atualizarReceita,
    deletarReceita
}

export default receitasController;