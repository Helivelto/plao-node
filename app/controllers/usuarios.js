module.exports.usuarios = (application, req, res) => {

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.getUsuarios((error, result) => {
        res.render('usuarios/usuarios', {usuarios: result})
    })
    
}

module.exports.usuario = (application, req, res) => {

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)
    const id_usuario = req.query

    usersDao.getUsuario(id_usuario, (error, result) => {
        res.render("usuarios/usuario", { usuario: result })
        // console.log(id_usuario)
    })

    usersDao.getNoticiasUser(id_usuario, (error, result) => {
        // res.render({ noticia_usuario: result})
        console.log(result)
    })

}