
module.exports.formulario_inclusao_noticia = (application, req, res) => {

    res.render('admin/form_noticias', {validacao: {}, noticia: {}})
    
}

module.exports.noticias_salvar = (application, req, res) => {

    var noticia = req.body;

    // Validando dados
    req.assert('titulo', 'O titulo da notícia é obrigatório').notEmpty();
    req.assert('resumo', "O resumo é obrigatório").notEmpty();
    req.assert('resumo', 'O resumo deve ter entre 10 e 100 caracteres').len(10, 100);
    req.assert('autor', "O nome do autor é obrigatório").notEmpty();
    // req.assert('data_noticia', 'A data é obrigatória').notEmpty().isDate({format: 'YYYY-MM-DD'});
     req.assert('data_noticia', 'A data é obrigatória').notEmpty();
    req.assert('data_noticia', 'o formato da data está errado!').isDate({format: 'YYYY-MM-DD'});
    req.assert('noticia', 'A Noticia é obrigatória').notEmpty();

    const erros = req.validationErrors();

    console.log(erros)

    if(erros){
        res.render('admin/form_noticias', { validacao: erros, noticia: noticia })
        return;
    }

    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    noticiasDao.salvarNoticia(noticia, (error, result) => {
    res.redirect('/noticias')
    })

}