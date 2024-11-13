const Product = require('../models/productModel');
const facturapi = require('../apis/facturapi');

const productService = {
  getProducts: async () => await Product.find(),
  createProduct: async (args) => {
    const product = new Product(args);
    const facturapiproduct = await facturapi.createProduct(product);

    product.facturapiid = facturapiproduct.id;
    
    return await product.save();
  },
  updateProduct: async ({ _id, ...rest }) => {
    await facturapi.updateProduct( rest, { new: true } );
    return await Product.findByIdAndUpdate(_id, rest, { new: true });
  },
  deleteProduct: async (facturapiid, _id) => {
    await facturapi.deleteProduct(facturapiid);
    return await Product.findByIdAndDelete(_id);
  }
};

module.exports = productService;
