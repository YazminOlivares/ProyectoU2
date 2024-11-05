const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {

    Query: {
        users: () => {
            return userService.getAllUsers();
        }
    },
    Mutation: {
        createUser: (_, {name, email, password, direction, phoneNumber, resDate, type, payMethod}) => {
            return userService.createUser(name, email, password, direction, phoneNumber, resDate, type, payMethod);
        },
        updateUser: (_, {_id, name, email, password, direction, phoneNumber, resDate, type, payMethod}) => {
            return userService.updateUser(_id, name, email, password, direction, phoneNumber, resDate, type, payMethod);
        },
        deleteUser: (_,{_id}) => {
            return userService.deleteUser(_id);
        }
    }

};

module.exports = resolvers;