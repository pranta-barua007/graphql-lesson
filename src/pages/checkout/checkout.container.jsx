import React from "react";
import CheckoutPage from "./checkout.component";
import { useQuery } from "@apollo/client";
import { GET_CART_ITEMS, GET_CART_ITEMS_TOTAL } from "../../client/cart/cart.queries";

const CheckoutPageContainer = () => {
    const cartItems = useQuery(GET_CART_ITEMS);
    const cartItemsTotal = useQuery(GET_CART_ITEMS_TOTAL);
    return (
        <CheckoutPage 
            cartItems={cartItems.data.cartItems}
            total={cartItemsTotal.data.cartItemsTotal}
        />
    )
};

export default CheckoutPageContainer;