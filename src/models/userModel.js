const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    password: {type: String, require: true},
    direction: {type: String, require: true},
    phoneNumber: {type: Number, require: true},
    resDate: {type: Date, require: true},
    type: {type: String, require: true},
    payMethod: {type: Array, require: true},
    facturapiid: {type: String, required: true},
    rfc: {type: String, required: true}
});

const User = mongoose.model('users', userSchema);

module.exports = User;