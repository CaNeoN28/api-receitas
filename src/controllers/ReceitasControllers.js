import Receita from "../models/Receita.js";

const listarReceitas = async (req, res) => {
  const receitas = Receita.find();

  res.status(200);
  res.send(receitas);
}

const ReceitasController = {
  listarReceitas,
}

export default(ReceitasController)