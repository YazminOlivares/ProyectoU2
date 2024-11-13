// a) Importa el paquete
const Facturapi = require('facturapi').default;
// b) Crea una instancia del cliente, usando la llave secreta
//    de la organización emisora (https://dashboard.facturapi.io/integration/apikeys)
const facturapi = new Facturapi('sk_test_rzWYjaPqv7X9Jbk6579O4krGQwNGRKE8p1l2LedywM');

// c) Crea una factura
async function createProduct(product) {
    const facturapiProduct = {
        description: product.description,
        product_key: "50202306",
        price: product.price
    };
    return await facturapi.products.create(facturapiProduct);
}

async function deleteProduct(productId) {
    return await facturapi.products.del(productId);
}

async function updateProduct(product) {
    return await facturapi.products.update(
        product.facturapiid,
        {
            description: product.description,
            product_key: "50202306",
            price: product.price
        }
      );
}

async function createUser(user) {
    const facturapiUser = {
        legal_name: user.name, // Nombre o razón social
        tax_id: user.rfc, // RFC
        tax_system: '601', // Regimen fiscal
        email: user.email,
        address: {
            zip: '85900', // Código postal
        }
    };
    return await facturapi.customers.create(facturapiUser);
}

async function deleteUser(userId) {
    return await facturapi.customers.del(userId);
}

async function updateUser(user) {
    return await facturapi.customers.update(
        user.facturapiid,
        {
            legal_name: user.name,
            tax_id: user.rfc, 
            tax_system: '601', 
            email: user.email,
            address: {
                zip: '85900', 
            }
        }
      );
}

module.exports = { 
    createProduct,
    deleteProduct,
    updateProduct,
    createUser,
    deleteUser,
    updateUser
 };