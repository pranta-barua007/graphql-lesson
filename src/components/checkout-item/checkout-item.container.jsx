import React from "react";
import CheckoutItem from "./checkout-item.component";
import { addItemToCart, removeItemFromCart, clearItemFromCart } from "../../apollo-client/cart/cart.mutations";

const CheckoutItemContainer = (props) => {
    return (
        <CheckoutItem 
            clearItem={clearItemFromCart}
            removeItem={removeItemFromCart}
            addItem={addItemToCart}
            {...props}
        />
    )
};

export default CheckoutItemContainer;