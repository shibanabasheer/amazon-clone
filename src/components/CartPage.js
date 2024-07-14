import React, { useEffect, useState } from 'react';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await fetch('/api/cart');
        const data = await response.json();
        setCartItems(data.items);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchCartItems();
  }, []);

  const handleCheckout = async () => {
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cartItems })
      });
      const result = await response.json();
      // Handle checkout response
      console.log(result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
      <button onClick={handleCheckout}>Proceed to Checkout</button>
    </div>
  );
};

export default CartPage;
