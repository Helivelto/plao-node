module.exports = (application) => {
    application.get('/usuarios', (req, res) => {
        application.app.controllers.usuarios.usuarios(application, req, res)
    })
}