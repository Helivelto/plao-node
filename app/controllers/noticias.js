module.exports.noticias = (application, req, res) => {

    // const connection = dbConnection()
    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);

    noticiasDao.getNoticias((error, result) => {
        res.render("noticias/noticias", { noticias: result})
    })

};

module.exports.noticia = (application, req, res) => {

    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);
    const id_noticia = req.query

    noticiasDao.getNoticia(id_noticia, (error, result) => {
        res.render("noticias/noticia", { noticia: result})
    })

};