import { ReactNode } from "react";
import { Comic } from "types/getComic";

export type CartContextProviderProps = {
  children: ReactNode;
};

export type CartContextType = {
  handleAddComicToCart: (comic: Comic) => void;
  cart: Cart;
};

export type Cart = null | Comic;
