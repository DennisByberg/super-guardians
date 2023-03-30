import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ViewCart.css";

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
        <li className="cart_Container" key={id}>
          <h1 className="cart_Product">{item.title}</h1>
          <p className="cart_Price">{item.price}kr</p>
        </li>
      );
    });
    setCartItems(items);
  }, [cartArray]);

  return <ul>{cartItems}</ul>;
}

export default ViewCart;
