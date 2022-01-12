import { cartHiddenVar, cartItemsVar, cartItemCountVar, cartItemsTotalVar } from "./cart.var"
import { addItem, removeItem, clearItem, getCartItemCount, getCartItemsTotalCount } from "./cart.utils";

export const toggleCartHidden = () => {
    const hidden = cartHiddenVar(); //getting the value
    cartHiddenVar(!hidden); //setting the value
    return !hidden;
};

const updateCart = (newCartItems) => {
    const cartItemCount = getCartItemCount(newCartItems);
    const cartItemsTotal = getCartItemsTotalCount(newCartItems);
    cartItemsVar(newCartItems);
    cartItemCountVar(cartItemCount);
    cartItemsTotalVar(cartItemsTotal);
}

export const addItemToCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = addItem(cartItems, item);
    updateCart(newCartItems);
    return newCartItems;
};

export const removeItemFromCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = removeItem(cartItems, item);
    updateCart(newCartItems);
    return newCartItems;
}

export const clearItemFromCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = clearItem(cartItems, item);
    updateCart(newCartItems);
    return newCartItems;
}

