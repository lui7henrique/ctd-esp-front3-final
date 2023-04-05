import { createContext, useCallback, useContext, useState } from "react";
import { Cart, CartContextProviderProps, CartContextType } from "./types";
import { Comic } from "types/getComic";
import { useRouter } from "next/router";

export const CartContext = createContext({} as CartContextType);

export const CartContextProvider = (props: CartContextProviderProps) => {
  const { children } = props;

  const [cart, setCart] = useState<Cart>(null);

  const { push } = useRouter();

  const handleAddComicToCart = useCallback((comic: Comic) => {
    setCart(comic);
    push("/checkout");
  }, []);

  return (
    <CartContext.Provider value={{ cart, handleAddComicToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
};
