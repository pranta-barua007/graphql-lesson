import { gql } from '@apollo/client';

//Still not sure how type defs works
export const typeDefs = gql`
    extend type Query {
        cartHidden: Boolean!
        cartItems: [Item]!
        cartItemsTotal: Number!
        cartItemCount: Number!
        directorySections: Section
        currentUser: User
    }

    extend type Item {
        quantity: Int
    }

    extend type Section {
        id: ID!
        title: String!
        imageUrl: String!
        linkUrl: String!
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