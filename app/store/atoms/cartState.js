import { atom } from "recoil";
import { selector } from "recoil";

export const cartState = atom({
  key: "cartState",
  default: [],
});

export const cartCountState = selector({
  key: "cartCountState",
  get: ({ get }) => {
    const cart = get(cartState);
    return cart.reduce((total, item) => total + item.quantity, 0);
  },
});
