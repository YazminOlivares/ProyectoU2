const { ApolloServer } = require("apollo-server")
const mongoose = require("mongoose");
const typeDefsProduct = require("./schemas/productSchema");
const typeDefsUser = require("./schemas/userSchema");
const typeDefsShCar = require("./schemas/shoppingCarSchema");
const resolversProduct = require("./resolvers/productResolver");
const resolversUser = require("./resolvers/userResolver");
const resolverShCar = require("./resolvers/shoppingCarResolver");

const typeDefs = [ typeDefsProduct, typeDefsUser, typeDefsShCar ];
const resolvers = [ resolversProduct, resolversUser, resolverShCar ];

const startServer = async() => {
    //FYjFbIop9Ukr8fN2
    await mongoose.connect('mongodb+srv://kayaolivaresbe:FYjFbIop9Ukr8fN2@carrito.y4u1h.mongodb.net/carrito?retryWrites=true&w=majority&appName=Carrito');

    const server = new ApolloServer({ typeDefs, resolvers });

    server.listen().then(({url}) => {
        console.log(`Servidor corriendo en ${url}`);
    });

};

startServer();