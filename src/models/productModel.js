const mongoose = require('mongoose');

const productsSchema = new mongoose.Schema({
    name: {type: String, require: true},
    description: {type: String, require: true},
    price: {type: Number, require: true},
    category: {type: Array, require: true},
    brand: {type: String, require: true},
    qty: {type: Number, default: 0},
    createAt: {type: Date, default: mongoose.now()},
    images: {type: Array, require: true}
});

const Product = mongoose.model('products', productsSchema);

module.exports = Product;