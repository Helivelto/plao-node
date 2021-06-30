
module.exports.login = (application, req, res) => {
    const objUsuario = req.body;

    // console.log(objUsuario)

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.login(objUsuario, (error, result) => {
        // res.render('usuarios/home', {usuarios: result})
        res.redirect('/usuarios/home')
    })
    
}