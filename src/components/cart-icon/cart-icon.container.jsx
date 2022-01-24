import React from "react";
import CartIcon from './cart-icon.component';
import { useQuery } from "@apollo/client";
import { GET_CART_ITEM_COUNT } from "../../client/cart/cart.queries";
import { toggleCartHidden } from "../../client/cart/cart.mutations";

const CartIconContainer = () => {
    const { data } = useQuery(GET_CART_ITEM_COUNT);
    return (
        <CartIcon 
            toggleCartHidden={toggleCartHidden} 
            itemCount={data.cartItemCount}
        />
    )
};

export default CartIconContainer;