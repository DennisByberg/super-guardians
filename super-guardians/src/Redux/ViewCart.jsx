import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function ViewCart() {
  const cartArray = useSelector((state) => {
    return state.cart;
  });

  const [cartItems, setCartItems] = useState([]);

  let id = 0;
  useEffect(() => {
    const items = cartArray.map((item) => {
      id++;
      return (
        <li key={id}>
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
