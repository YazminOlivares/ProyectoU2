const { Query } = require('mongoose');
const userService = require('../services/userService');

const resolvers = {

    Query: {
        users: async () => await userService.getAllUsers()
    },
    Mutation: {
        createUser: async (_, args) => await userService.createUser(args),
        updateUser: async (_, args) => await userService.updateUser(args),
        deleteUser: async (_, { facturapiid, _id }) => await userService.deleteUser(facturapiid, _id),
    }

};

module.exports = resolvers;