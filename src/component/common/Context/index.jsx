import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {

  const [uid, setuid] = useState(null); // User Id
  const [userName, setUserName] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [farmHouseName, setFarmHouseName] = useState(null);
  console.log('farmHouseName: ', farmHouseName);
 


  // Load cart from sessionStorage or default to an empty array
  const [cart, setCart] = useState(() => {
    const savedCart = sessionStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Save cart to sessionStorage whenever it changes
  useEffect(() => {
    sessionStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);



  const addToCart = (product, selectedWeight) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.selectedWeight === selectedWeight
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedWeight === selectedWeight
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { ...product, selectedWeight, quantity: 1 }];
      }
    });
  };



  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };




  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0) // Remove if quantity becomes 0
    );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, uid, setuid, userName, setUserName, userEmail, setUserEmail,farmHouseName, setFarmHouseName }}>
      {children}
    </CartContext.Provider>
  );
};
