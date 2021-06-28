module.exports = (application) => {
    
    application.get('/usuarios', (req, res) => {
        application.app.controllers.usuariosController.usuarios(application, req, res)
    })

    application.get('/usuario/noticias', (req, res) => {
        application.app.controllers.usuariosController.usuario_noticia(application, req, res)
    })
    application.get('/usuario/login', (req, res) => {
        application.app.controllers.authController.login(application, req, res)
    })
    application.post('/usuario/login', (req, res) => {
        application.app.controllers.authController.login(application, req, res)
    })

}