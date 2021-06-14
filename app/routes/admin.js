module.exports = (application) => {

    application.get('/formulario-inclusao-noticia', (req, res) => {
        // res.render('admin/form_noticias', {validacao: {}, noticia: {}})
        application.app.controllers.admin.formulario_inclusao_noticia(application, req, res)
    })

    application.post('/noticias/salvar', (req, res) => {
        application.app.controllers.admin.noticias_salvar(application, req, res)
    })

}