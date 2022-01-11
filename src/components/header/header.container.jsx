import React from "react";
import Header from './header.component';
import { useQuery } from "@apollo/client";
import { GET_CART_HIDDEN } from "../../apollo-client/cart/cart.queries";

const HeaderContainer = () => {
    const { data } = useQuery(GET_CART_HIDDEN);
    return (
        <Header hidden={data.cartHidden} />
    )
};

export default HeaderContainer;
