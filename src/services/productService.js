const Product = require('../models/productModel');

module.exports = {

    getAllProducts: async() => {
        return await Product.find();
    },

    createProduct: async( name, description, price, category, brand, qty, images ) => {
        const product = new Product({ name, description, price, category, brand, qty, images });
        return await product.save();
    },

    updateProduct: async( _id, name, description, price, category, brand, qty, images ) => {
        return await Product.findByIdAndUpdate(_id, { name, description, price, category, brand, qty, images }, { new: true });
    },

    deleteProduct: async( _id ) => {
        return await Product.findByIdAndDelete(_id);
    }
}