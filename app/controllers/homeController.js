module.exports.index = (application, req, res) => {

    const connection = application.config.dbConnection;
    const noticiasDao = new application.app.models.NoticiasDAO(connection);

    noticiasDao.get5Ultimas((error, result) => {
        res.render("home/home", { noticias: result})
    })

}