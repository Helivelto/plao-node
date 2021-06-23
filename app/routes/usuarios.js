module.exports = (application) => {
    
    application.get('/usuarios', (req, res) => {
        application.app.controllers.usuarios.usuarios(application, req, res)
    })

    application.get('/usuario/noticias', (req, res) => {
        application.app.controllers.usuarios.usuario_noticia(application, req, res)
    })
}