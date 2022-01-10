import React from "react";
import { toggleCartHidden } from "../../apollo-client/cart/cart.operations";

import CartIcon from './cart-icon.component';

const CartIconContainer = () => {
    return (
        <CartIcon toggleCartHidden={toggleCartHidden} />
    )
};

export default CartIconContainer;