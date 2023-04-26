const handleError = (err, req, res) => {
    console.log(err)

    res.status(500)
    res.send({ message: "Erro interno do servidor" })
}

export default handleError