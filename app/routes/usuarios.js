module.exports = (application) => {
    application.get('/usuarios', (req, res) => {
        res.render('usuarios/usuarios')
    })
}