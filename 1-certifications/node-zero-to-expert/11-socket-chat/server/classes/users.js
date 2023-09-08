module.exports = class Users
{
    constructor()
    {
        this.users = [];
    }

    addUser( id, name )
    {
        let user = { id, name };
        this.users.push( user );
        return this.users;
    }

    getUser( id )
    {
        let user = this.users.filter( user => user.id === id )[0];
        return user;
    }

    getUsers()
    {
        return this.users;
    }

    getUsersByRoom( room )
    {
        // TODO
    }

    deleteUser( id )
    {
        let deletedUser = this.getUser( id );
        this.users = this.users.filter( user => user.id != id );
        return deletedUser;
    }
};