import { gql } from "@apollo/client";

export const GET_CART_HIDDEN = gql`
    query getCartHidden {
        cartHidden @client
    }
`;

export const GET_CART_ITEMS = gql`
    query getCartItems {
        cartItems @client 
    }
`;

export const GET_CART_ITEMS_TOTAL = gql`
    query getCartItemsTotal {
        cartItemsTotal @client 
    }
`;

export const GET_CART_ITEM_COUNT = gql`
    query getCartItemsCount {
        cartItemCount @client
    }
`;