import React from "react";
import Header from './header.component';
import { useQuery } from "@apollo/client";
import { GET_CART_HIDDEN } from "../../apollo-client/cart/cart.queries";
import { GET_CURRENT_USER } from "../../apollo-client/user/user.queries";

const HeaderContainer = () => {
    const { data } = useQuery(GET_CART_HIDDEN);
    const user = useQuery(GET_CURRENT_USER);
    
    return (
        <Header 
            currentUser={user.data.currentUser}
            hidden={data.cartHidden} 
        />
    )
};

export default HeaderContainer;
