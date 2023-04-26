const handleValidationError = (err, req, res, next) => {
    if (err.name == "ValidationError") {
        const erros = {}

        for (let campo in err.errors) {
            erros[campos] = err.errors[campo].message
        }

        res.status(422)
        res.send({ erros })
    } else {
        next(err)
    }
}

export default handleValidationError