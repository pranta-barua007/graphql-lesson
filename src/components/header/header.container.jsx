import React from "react";
import Header from './header.component';
import { gql, useQuery } from "@apollo/client";

const GET_CART_HIDDEN_AND_CURRENT_USER = gql`
    query getCartHiddenAndCurrentUser{
        cartHidden @client
        currentUser @client
    }
`;

const HeaderContainer = () => {
    const { data } = useQuery(GET_CART_HIDDEN_AND_CURRENT_USER);
    
    return (
        <Header 
            currentUser={data.currentUser}
            hidden={data.cartHidden} 
        />
    )
};

export default HeaderContainer;
