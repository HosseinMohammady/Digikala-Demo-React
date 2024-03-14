import React, { ReactNode, createContext, useContext, useState } from "react";
import { useLocalStorage } from "../useLocalStorage";
import ShoppingCartBasket from "../ShoppingCartBasket";

type ShoppingCartProviderProps = {
  children: ReactNode;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (id: number) => void;
  decreaseCartQuantity: (id: number) => void;
  cartQuanitity: number;
  cartItems: CartItem[];
};

type CartItem = {
  id: number;
  quantity: number;
};

const ShoppingCartContext = createContext<ShoppingCartContext>(
  {} as ShoppingCartContext
);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>(
    "shopping-cart",
    []
  );

  const cartQuanitity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseCartQuantity(id: number) {
    setCartItems((currItems) => {
      const item = currItems.find((item) => item.id === id);
      if (item) {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...currItems, { id, quantity: 1 }];
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems) =>
      currItems
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        cartItems,
        cartQuanitity,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
