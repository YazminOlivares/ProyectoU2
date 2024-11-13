const mongoose = require('mongoose');

const shoppingCarSchema = new mongoose.Schema({
    user: [
        {
            name: { type: String, require: true },
            email: { type: String, require: true },  
            facturapiid: { type: String, required: true },
            rfc: { type: String, required: true }
        }
    ],
    product: [
        {
            name: { type: String, required: true },
            description: { type: String, required: true },
            price: { type: Number, required: true },
            brand: { type: String, required: true },
            imgs: [String]
        }
    ],
    total: [
        {
            subtotal: { type: Number, required: true },
            iva: { type: Number, required: true },
            total: { type: Number, required: true}
        }
    ],
    estatus: { type: String, required: true},
    createAt: { type: Date, required: true},
    closed: { type: Date, required: true}
});

module.exports = mongoose.model('ShoppingCar', shoppingCarSchema);