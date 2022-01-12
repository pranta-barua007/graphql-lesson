import { gql } from '@apollo/client';

export const typeDefs = gql`
    extend type Item {
        quantity: Int
    }

    extend type DateTime {
        nanoseconds: Int!
        seconds: Int!
    }
    
    extend type User {
        id: ID!
        displayName: String!
        email: String!
        createdAt: DateTime!
    }
`;