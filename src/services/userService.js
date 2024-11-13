const User = require('../models/userModel');
const facturapi = require('../apis/facturapi');

const userService = {
    getAllUsers: async () => await User.find(),
    createUser: async (args) => {
        const user = new User(args);
        const facturapiuser = await facturapi.createUser(user);
  
        user.facturapiid = facturapiuser.id;
      
        return await user.save();
    },
    updateUser: async ({ _id, ...rest }) => {
      await facturapi.updateUser( rest, { new: true } );
      return await User.findByIdAndUpdate(_id, rest, { new: true });
    },
    deleteUser: async (facturapiid, _id) => {
      await facturapi.deleteUser(facturapiid);
      return await User.findByIdAndDelete(_id);
    }
  };
  
module.exports = userService;