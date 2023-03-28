import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ViewCart() {
  const cartArray = useSelector((state) => {
    return state.cart;
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const items = cartArray.map((item) => {
      return (
        <li key={item.id}>
          <p>{item.title}</p>
          <p>{item.price}</p>
        </li>
      );
    });
    setCartItems(items);
  }, [cartArray]);

  return <ul>{cartItems}</ul>;
}

export default ViewCart;
