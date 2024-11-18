const ShoppingCar = require('../models/shoppingCarModel');
const mongoose = require('mongoose');

const shoppingCarService = {
    getOneShoppingCar: async (id) => {
        return await ShoppingCar.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(id),
                    estatus: "Activo"
                }
            },
            {
                $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userInfo"
                }
            },
            {
                $lookup: {
                from: "products",
                localField: "product",
                foreignField: "_id",
                as: "product"
                }
            }
        ])
    },

    getAllShoppingCar: async (id) => {
        return await ShoppingCar.aggregate([
            {
                $match: {
                    user: new mongoose.Types.ObjectId(id),
                }
            },
            {
                $lookup: {
                from: "users",
                localField: "user",
                foreignField: "_id",
                as: "userInfo"
                }
            },
            {
                $lookup: {
                from: "products",
                localField: "product",
                foreignField: "_id",
                as: "product"
                }
            }
        ])
    },

    createShoppingCar: async (args) => {
        const shCar = new ShoppingCar(args);

        return await shCar.save();
    },

    addProduct: async (_id, productId) => {
        return await ShoppingCar.updateOne(
            { _id }, 
            { $push: { product: productId } } 
        );
    },
    deleteProduct: async (_id, productId) => {
        return await ShoppingCar.updateOne(
            { _id },
            { $pull: { product: productId}}
        );
    },
    updateShoppingCar: async ({_id, ...rest}) => {
        return await ShoppingCar.findByIdAndUpdate(_id, rest, { new: true });
    }
};

module.exports = shoppingCarService;