import { currentUserVar } from "./user.var";

export const setCurrentUser = (user) => {
    currentUserVar(user);
    return user;
}