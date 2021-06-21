function UsersDAO (connection) {
    this._connection = connection
}

UsersDAO.prototype.getUsuarios = function (callback) {
    this._connection.query('select * from usuarios order by nome_usuario', callback)
} 

UsersDAO.prototype.getUsuario = function (id_usuario, callback) {
    this._connection.query(`select * from usuarios where id_usuario = ${id_usuario.id_usuario}`, callback)
}

UsersDAO.prototype.getUNoticiasUser = function (nome_usuario, callback) {
    this._connection.query(`select * from noticias where autor = ${nome_usuario.nome_usuario}`, callback)
}

module.exports = () => {
    return UsersDAO
}