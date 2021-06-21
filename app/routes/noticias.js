// const dbConnection = require('../../config/dbConnection')

module.exports = (application) => {
    
    application.get('/noticias', (req, res) => {
        application.app.controllers.noticias.noticias(application, req, res)
    });

    application.get('/noticia', (req, res) => {
        application.app.controllers.noticias.noticia(application, req, res)
    })

    application.get('/formulario-inclusao-noticia', (req, res) => {
        // res.render('admin/form_noticias', {validacao: {}, noticia: {}})
        application.app.controllers.noticias.formulario_inclusao_noticia(application, req, res)
    })

    application.post('/noticias/salvar', (req, res) => {
        application.app.controllers.noticias.noticias_salvar(application, req, res)
    })


}