import { gql } from "@apollo/client";

export const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

export const GET_CART_ITEMS = gql`
    {
        cartItems @client 
    }
`;

export const GET_CART_ITEMS_TOTAL = gql`
    {
        cartItemsTotal @client 
    }
`;

export const GET_CART_ITEM_COUNT = gql`
    {
        cartItemCount @client
    }
`;