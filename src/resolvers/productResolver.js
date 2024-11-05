const { Query } = require('mongoose');
const productService = require('../services/productService');

const resolvers = {

    Query: {
        products: () => {
            return productService.getAllProducts();
        }
    },
    Mutation: {
        createProduct: (_, {name, description, price, category, brand, qty, images}) => {
            return productService.createProduct(name, description, price, category, brand, qty, images);
        },
        updateProduct: (_, {_id, name, description, price, category, brand, qty, images}) => {
            return productService.updateProduct(_id, name, description, price, category, brand, qty, images);
        },
        deleteProduct: (_,{_id}) => {
            return productService.deleteProduct(_id);
        }
    }

};

module.exports = resolvers;