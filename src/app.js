import express from "express";
import routes from "./routes/index.js";

const app = new express();
app.use(express.json())

routes(app)

export default app;