import React from "react";
import { addItemToCart } from "../../apollo-client/cart/cart.mutations";
import CollectionItem from "./collection-item.component";

const CollectionItemContainer = (props) => {
    return (
        <CollectionItem 
            {...props} 
            addItem={addItemToCart} 
        /> 
    )
};

export default CollectionItemContainer;