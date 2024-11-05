const User = require('../models/userModel');

module.exports = {

    getAllUsers: async() => {
        return await User.find();
    },

    createUser: async( name, email, password, direction, phoneNumber, resDate, type, payMethod ) => {
        const user = new User({ name, email, password, direction, phoneNumber, resDate, type, payMethod });
        return await user.save();
    },

    updateUser: async( _id, name, email, password, direction, phoneNumber, resDate, type, payMethod ) => {
        return await User.findByIdAndUpdate(_id, { name, email, password, direction, phoneNumber, resDate, type, payMethod }, { new: true });
    },

    deleteUser: async( _id ) => {
        return await User.findByIdAndDelete(_id);
    }
}