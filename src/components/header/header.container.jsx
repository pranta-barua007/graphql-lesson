import React from "react";
import { useQuery, gql } from "@apollo/client";

import Header from './header.component';

const GET_CART_HIDDEN = gql`
    {
        cartHidden @client
    }
`;

const HeaderContainer = () => {
    const { data } = useQuery(GET_CART_HIDDEN);
    return (
        <Header hidden={data.cartHidden} />
    )
};

export default HeaderContainer;
