import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Load from localStorage
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : {};
  });

  useEffect(() => {
    // Save to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prevCart) => ({
      ...prevCart,
      [product.id]: prevCart[product.id]
        ? { ...prevCart[product.id], quantity: prevCart[product.id].quantity + 1 }
        : { ...product, quantity: 1 },
    }));
  };

  const incrementQuantity = (productId) => {
    setCart((prevCart) => ({
      ...prevCart,
      [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity + 1 },
    }));
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) => {
      if (prevCart[productId].quantity === 1) {
        const updatedCart = { ...prevCart };
        delete updatedCart[productId];
        return updatedCart;
      }
      return {
        ...prevCart,
        [productId]: { ...prevCart[productId], quantity: prevCart[productId].quantity - 1 },
      };
    });
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};
