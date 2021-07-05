
module.exports.login = (application, req, res) => {
    const objUsuario = req.body;

    console.log(req.sessionID)
    // console.log(objUsuario)

    const connection = application.config.dbConnection
    const usersDao = new application.app.models.UsersDAO(connection)

    usersDao.login(objUsuario, (error, result) => {

        // console.log(result)
        
        if(result.length > 0){
            res.redirect('/usuarios/home')
        } else {
            res.send('Usuario ou senha invalidos')
        }
        
    })
    
}