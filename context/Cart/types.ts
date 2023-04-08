import { CheckoutSchemaType } from "dh-marvel/components/CheckoutTemplate/type";
import { ReactNode } from "react";
import { Comic } from "types/getComic";

export type CartContextProviderProps = {
  children: ReactNode;
};

export type CartContextType = {
  handleAddComicToCart: (comic: Comic) => void;
  handleFinishCheckout: (checkout: Checkout) => void;

  cart: Cart;
  checkout: Checkout;
};

export type Cart = null | Comic;

export type Checkout = null | CheckoutSchemaType;
