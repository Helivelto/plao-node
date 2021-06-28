module.exports.usuarios = (application, req, res) => {

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.getUsuarios((error, result) => {
        res.render('usuarios/usuarios', {usuarios: result})
    })
    
}

module.exports.usuario_noticia = (application, req, res) => {

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)
    const obj_id_usuario = req.query

    // usersDao.getUsuario(id_usuario, (error, result) => {
    //     res.render("usuarios/usuario", { usuario: result })
    //     // console.log(id_usuario)
    // })

    usersDao.getNoticiasUser(obj_id_usuario, (error, result) => {
        // console.log(result)
        res.render('usuarios/usuario_noticia', { noticias: result })
        // res.send(result)
    })

}