function UsersDAO (connection) {
    this._connection = connection
}

UsersDAO.prototype.getUsuarios = function (callback) {
    this._connection.query('select * from usuarios order by nome_usuario', callback)
} 

UsersDAO.prototype.getUsuario = function (id_usuario, callback) {
    this._connection.query(`select * from usuarios where id_usuario = ${id_usuario.id_usuario}`, callback)
}

UsersDAO.prototype.getNoticiasUser = function (id_usuario, callback) {
    this._connection.query(`select titulo from noticias where id_usuario = ${id_usuario.id_usuario} `, callback)
}

module.exports = () => {
    return UsersDAO
}