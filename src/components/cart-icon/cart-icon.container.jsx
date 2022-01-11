import React from "react";
import { gql, useQuery } from "@apollo/client";
import { toggleCartHidden } from "../../apollo-client/cart/cart.mutations";

import CartIcon from './cart-icon.component';

const GET_CART_ITEM_COUNT = gql`
    {
        cartItemCount @client
    }
`

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