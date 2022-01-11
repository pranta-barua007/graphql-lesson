import React from "react";
import Spinner from "../spinner/spinner.component";
import CartDropdown from "./cart-dropdown.component";
import { useQuery, gql } from "@apollo/client";
import { toggleCartHidden } from "../../apollo-client/cart/cart.mutations";

const GET_CART_ITEMS = gql`
    {
        cartItems @client 
    }
`;

const CartDropdownContainer = () => {
    const { loading, data } = useQuery(GET_CART_ITEMS);
    console.log({data}, 'cart dropdown')
    if (loading) return <Spinner />
    return (
        <CartDropdown 
            cartItems={data.cartItems}
            toggleCartHidden={toggleCartHidden}
        />
    );
}

export default CartDropdownContainer;