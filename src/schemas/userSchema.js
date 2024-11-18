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
        facturapiid: String!
        rfc: String!
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
            facturapiid: String!
            rfc: String!
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
            facturapiid: String!
            rfc: String!
        ): User!

        deleteUser(
            facturapiid: String!
            _id: ID!
      ): User!
    }
`;

module.exports = typeDefs;

/*
{  
  "id": "67297e27bf5e55d0873c4c28",
  "name": "Yazmin Olivares",
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

{
  "user": {
    "name": ""
  },
  "product": null,
  "total": null,
  "estatus": null,
  "createAt": null,
  "name": null,
  "email": null,
  "password": null,
  "direction": null,
  "phoneNumber": null,
  "resDate": null,
  "type": null,
  "payMethod": null,
  "facturapiid": null,
  "rfc": null
}

mutation CreateShCar($user: [UserInput!]!, $product: [ProductInput!]!, $total: [TotalInput!]!, $estatus: String!, $createAt: String!) {
  createShCar(user: $user, product: $product, total: $total, estatus: $estatus, createAt: $createAt) {
    user {
      name
      email
      facturapiid
      rfc
    }
    product {
      _id
    }
    total {
      subtotal
      iva
      total
    }
    estatus
    createAt
  }
}
  */