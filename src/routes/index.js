import handleError from "../util/handleError.js";
import handleNotFound from "../util/handleNotFound.js";
import handleValidationError from "../util/handleValidationError.js";
import receitasRoutes from "./receitasRoutes.js";

const routes = (app) => {
    app.get("/ping", (req, res) => {
        res.status(200).send({
            message: "pong"
        });
    });
    app.use(receitasRoutes);
    app.use(handleNotFound)
    app.use(handleValidationError)
    app.use(handleError)
}

export default routes;