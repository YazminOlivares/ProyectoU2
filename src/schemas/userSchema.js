const { gql } = require('apollo-server');

const typeDefs = gql`
    type User{
        _id: ID!
        name: String!
        email: String!
        password: String!
        direction: String!
        phoneNumber: Int!
        resDate: String!
        type: String!
        payMethod: [String]!
    }
    
    type Query {
        users: [User]
    }

    type Mutation {
        createUser(
            name: String!
            email: String!
            password: String!
            direction: String!
            phoneNumber: Int!
            resDate: String!
            type: String!
            payMethod: [String]!   
        ): User!
        
        updateUser(
            _id: ID!
            name: String!
            email: String!
            password: String!
            direction: String!
            phoneNumber: Int!
            resDate: String!
            type: String!
            payMethod: [String]!
        ): User!

        deleteUser(_id: ID!): User!
    }
`;

module.exports = typeDefs;

/*
{  
  "id": "67297e27bf5e55d0873c4c28",
  "name": "Yazmin Olivares Actualizado",
  "email": "karlaolbe@gmail.com",  
  "password": "password",
  "direction": "Su casa",  
  "phoneNumber": 1234,
  "type": "Cliente",
  "resDate": "2020-08-07T00:00:00.000Z",
  "payMethod": [
    "paypal"
  ]
}
  */