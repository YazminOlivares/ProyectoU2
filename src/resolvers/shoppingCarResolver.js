const shCarService = require('../services/shoppingCarService');

const resolvers = {

    Query: {
        shCarActive: async (_, {user}) => await shCarService.getOneShoppingCar(user),
        shCarAll: async (_, {user}) => await shCarService.getAllShoppingCar(user)
    },
    Mutation: {
        addProductSh: async (_, { _id, product }) => await shCarService.addProduct(_id, product._id),
        deleteProductSh: async (_, {_id, product}) => await shCarService.deleteProduct(_id, product._id),
        createShCar: async (_, args) => await shCarService.createShoppingCar(args),
        updateShCar: async (_, args) => await shCarService.updateShoppingCar(args)
    }

};

module.exports = resolvers;