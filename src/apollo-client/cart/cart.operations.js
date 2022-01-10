import { cartVar } from "./cart.var"

export const toggleCartHidden = () => {
    const { hidden } = cartVar();
    cartVar({ hidden: !hidden });
}