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
      const existingItemIndex = prevCart.findIndex(
        (item) => item.id === product.id && item.selectedWeight === selectedWeight
      );
  
      if (existingItemIndex !== -1) {
        // If product already in cart with same weight, increase quantity
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += 1;
        return updatedCart;
      } else {
        // If new product or different weight, add new entry
        return [
          ...prevCart,
          {
            id: product.id,
            name: product.name,
            image: product.image,
            price: product.price,
            selectedWeight,
            quantity: 1,
            inStock: product.inStock,
          },
        ];
      }
    });
  };



  // const incrementQuantity = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart.map((item) =>
  //       item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
  //     )
  //   );
  // };

  // const decrementQuantity = (productId) => {
  //   setCart((prevCart) =>
  //     prevCart
  //       .map((item) =>
  //         item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
  //       )
  //       .filter((item) => item.quantity > 0) // Remove if quantity becomes 0
  //   );
  // };

  const incrementQuantity = (productId, selectedWeight) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.selectedWeight === selectedWeight
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };
  
  const decrementQuantity = (productId, selectedWeight) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === productId && item.selectedWeight === selectedWeight
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0) // Remove item if quantity is 0
    );
  };


  const removeFromCart = (id, selectedWeight) => {
    
    let storedCart = JSON.parse(sessionStorage.getItem('cart')) || [];
    
  
    const updatedCart = storedCart.filter(item => {
      // Assuming each item has 'id' and 'selectedWeight' properties
      return !(item.id === id && item.selectedWeight === selectedWeight);
    });
  
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("storage"));
    }

    setCart((prevCart) => {
      const updatedCart = prevCart.filter(item => !(item.id === id && item.selectedWeight === selectedWeight));
      return updatedCart;
    });
  
    // Also update sessionStorage
    const updatedStoredCart = storedCart.filter(item => !(item.id === id && item.selectedWeight === selectedWeight));
    sessionStorage.setItem('cart', JSON.stringify(updatedStoredCart));
  };
  
  const clearCart = () => setCart([])

  return (
    <CartContext.Provider value={{ cart, addToCart, incrementQuantity, decrementQuantity, uid, setuid, userName, setUserName, userEmail, setUserEmail, removeFromCart,farmHouseName, setFarmHouseName, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
