const routes = (app) => {
  app.get('/ping', (req, res) => {
    res.status(200);
    res.send({ resposta: "pong" })
  })

  app.use(ReceitasRoutes)
}

export default routes