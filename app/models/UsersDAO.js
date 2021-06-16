function UsersDAO (connection) {
    this._connection = connection
}

UsersDAO.prototype.getUsuarios = function (callback) {
    this._connection.query('select * from usuarios order by nome_usuario', callback)
} 

// UsersDAO.prototype.getUsuario = function (id_usuario, callback) {
//     this._connection.query('', callback)
// }

module.exports = () => {
    return UsersDAO
}