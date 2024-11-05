const { gql } = require('apollo-server');

const typeDefs = gql`
    type Product {
        _id: ID!
        name: String!
        description: String!
        price: Float!         
        category: [String]!
        brand: String!
        qty: Int!              
        images: [String]!      
    }

    type Query {
        products: [Product]
    }

    type Mutation {
        createProduct(
            name: String!
            description: String!
            price: Float!       
            category: [String]!
            brand: String!
            qty: Int!
            images: [String]!   
        ): Product!
        
        updateProduct(
            _id: ID!
            name: String!
            description: String!
            price: Float!
            category: [String]!
            brand: String!
            qty: Int!
            images: [String]!
        ): Product!

        deleteProduct(_id: ID!): Product!
    }
`;

module.exports = typeDefs;