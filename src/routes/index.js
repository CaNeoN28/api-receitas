import receitasRoutes from "./receitasRoutes.js";

const routes = (app)=>{ 
    app.get("/ping", (req, res) => {
        res.status(200).send({
            message: "pong"
        });
    });
    app.use(receitasRoutes);
}

export default routes;