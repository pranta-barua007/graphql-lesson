import React from "react";
import CartDropdown from "./cart-dropdown.component";
import { useQuery } from "@apollo/client";
import { GET_CART_ITEMS } from "../../client/cart/cart.queries";
import { toggleCartHidden } from "../../client/cart/cart.mutations";

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