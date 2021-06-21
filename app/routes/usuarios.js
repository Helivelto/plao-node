module.exports = (application) => {
    
    application.get('/usuarios', (req, res) => {
        application.app.controllers.usuarios.usuarios(application, req, res)
    })

    application.get('/usuario', (req, res) => {
        application.app.controllers.usuarios.usuario(application, req, res)
    })
}