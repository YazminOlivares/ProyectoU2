const { gql } = require('apollo-server');

const typeDefs = gql`
    
    type Total {
        subtotal: Float!
        iva: Float!
        total: Float!
    }

    type Product {
        _id: ID!
    }

    type ShoppingCar {
        _id: ID!
        user: ID!
        product: [Product!]!
        total: Total!
        estatus: String!
        createAt: String!
        closed: String 
    }

    type Query {
        shCarActive(user: ID!): [ShoppingCar]
        shCarAll(user: ID!): [ShoppingCar]
    }

    type Mutation {
        createShCar(
            user: ID!
            product: [ProductInput!]!,
            total: TotalInput!, 
            estatus: String!, 
            createAt: String!
        ): ShoppingCar

        addProductSh(
            _id: ID!, 
            product: ProductInput!
        ): ShoppingCar

        deleteProductSh(
            _id: ID!, 
            product: ProductInput!
        ): ShoppingCar

        updateShCar(
            _id: ID!,
            user: ID,
            product: [ProductInput],
            total: TotalInput,
            estatus: String,
            createAt: String,
            closed: String
        ): ShoppingCar
    }
    
    input TotalInput {
        subtotal: Float!
        iva: Float!
        total: Float!
    }

    input ProductInput{
        _id: ID!
    }

`;

module.exports = typeDefs;