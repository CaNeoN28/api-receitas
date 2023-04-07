import mongoose from "mongoose";

const URL = "mongodb://localhost:27017/db_receitas";

await mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("Conectado ao banco de dados");
}).catch((err) => {
    console.log("Erro ao conectar ao banco de dados: " + err);
});

let db = mongoose.connection;


export default db;