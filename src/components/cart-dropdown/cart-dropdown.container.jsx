import React from "react";
import CartDropdown from "./cart-dropdown.component";
import { useQuery, gql } from "@apollo/client";
import { toggleCartHidden } from "../../apollo-client/cart/cart.mutations";

const GET_CART_ITEMS = gql`
    {
        cartItems @client 
    }
`;

const CartDropdownContainer = () => {
    const { data } = useQuery(GET_CART_ITEMS);

    return (
        <CartDropdown 
            cartItems={data.cartItems}
            toggleCartHidden={toggleCartHidden}
        />
    );
}

export default CartDropdownContainer;