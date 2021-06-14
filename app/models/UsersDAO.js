function UsersDAO (connection) {
    this._connection = connection
}

UsersDAO.prototype.getUsuarios = function () {
    this._connection.query()
} 

UsersDAO.prototype.getUsuario = function () {
    this._connection.query()
}

module.exports = () => {
    return UsersDAO
}