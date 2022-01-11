import { cartHiddenVar, cartItemsVar, cartItemCountVar, cartItemsTotalVar } from "./cart.var"
import { addItem, removeItem, clearItem, getCartItemCount, getCartItemsTotalCount } from "./cart.utils";

export const toggleCartHidden = () => {
    const hidden = cartHiddenVar(); //getting the value
    cartHiddenVar(!hidden); //setting the value
};

export const addItemToCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = addItem(cartItems, item);
    const cartItemCount = getCartItemCount(newCartItems);
    const cartItemsTotal = getCartItemsTotalCount(newCartItems);
    cartItemCountVar(cartItemCount);
    cartItemsVar(newCartItems);
    cartItemsTotalVar(cartItemsTotal);
};

export const removeItemFromCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = removeItem(cartItems, item);
    const cartItemCount = getCartItemCount(newCartItems);
    const cartItemsTotal = getCartItemsTotalCount(newCartItems);
    cartItemCountVar(cartItemCount);
    cartItemsVar(newCartItems);
    cartItemsTotalVar(cartItemsTotal);
}

export const clearItemFromCart = (item) => {
    const cartItems  = cartItemsVar();
    const newCartItems = clearItem(cartItems, item);
    const cartItemCount = getCartItemCount(newCartItems);
    const cartItemsTotal = getCartItemsTotalCount(newCartItems);
    cartItemCountVar(cartItemCount);
    cartItemsVar(newCartItems);
    cartItemsTotalVar(cartItemsTotal);
}

