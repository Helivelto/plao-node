module.exports.usuarios = (application, req, res) => {
    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.getUsuarios((error, result) => {
        res.render('usuarios/usuarios', {usuarios: result})
    })
    
}