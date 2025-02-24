import React from "react";
import CollectionItem from "./collection-item.component";
import { addItemToCart } from "../../client/cart/cart.mutations";

const CollectionItemContainer = (props) => {
    return (
        <CollectionItem 
            addItemToCart={addItemToCart} 
            {...props}
        /> 
    )
};

export default CollectionItemContainer;