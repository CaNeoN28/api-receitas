import Receita from "../models/Receita.js";

const listarReceitas = async (req, res, next) => {
    try {
        const { titulo, pagina = 1 } = req.query
        const porPagina = 10

        const filtro = titulo ? { titulo: new RegExp(titulo) } : {}

        const totalItens = Receita.countDocuments(filtro)

        const receitas = await Receita.find({ filtro })
            .skip((pagina - 1) * porPagina)
            .limit(porPagina)

        const totalPaginas = Math.ceil(totalItens / porPagina)

        res.status(200)
        // res.send(receitas);

        res.send({
            totalItens,
            totalPaginas,
            paginaAtual: pagina,
            itensPorPagina: porPagina,
            receitas
        })
    } catch (err) {
        next(err)
    }
}

const listarReceitasPorId = async (req, res, next) => {
    try {
        const id = req.params.id;
        const receita = await Receita.findById(id);
        res.status(200).send(receita);
    } catch (err) {
        next(err)
    }
}

const criarReceita = async (req, res, next) => {
    try {
        const receita = req.body;
        const novaReceita = new Receita(receita);
        await novaReceita.save();

        res.status(200).send(novaReceita);
    } catch (err) {
        next(err)
    }
}

const atualizarReceita = async (req, res, next) => {
    try {
        const id = req.params.id;
        const receita = req.body;
    } catch (err) {
        next(err)
    }
}

const deletarReceita = async (req, res, next) => {
    try {
        const id = req.params.id;
        const receita = await Receita.findByIdAndDelete(id);
        res.status(200).send(receita);
    } catch (err) {
        next(err)
    }
}


const receitasController = {
    listarReceitas,
    listarReceitasPorId,
    criarReceita,
    atualizarReceita,
    deletarReceita
}

export default receitasController;