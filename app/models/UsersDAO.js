function UsersDAO (connection) {
    this._connection = connection
}

UsersDAO.prototype.getUsuarios = function (callback) {
    this._connection.query('select * from usuarios order by nome_usuario', callback)
} 

// UsersDAO.prototype.getUsuario = function (id_usuario, callback) {
//     this._connection.query(`select * from usuarios where id_usuario = ${id_usuario.id_usuario}`, callback)
// }

UsersDAO.prototype.getNoticiasUser = function (obj_id_usuario, callback) {
    // this._connection.query(`select * from noticias where id_usuario = ${obj_id_usuario.id_usuario} `, callback)
    this._connection.query(`select usuarios.*, noticias.* from noticias inner join usuarios on (noticias.id_usuario = usuarios.id_usuario) where usuarios.id_usuario = ${obj_id_usuario.id_usuario} `, callback)
}

module.exports = () => {
    return UsersDAO
}