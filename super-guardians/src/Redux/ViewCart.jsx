import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import "./ViewCart.css";
import { useDispatch } from "react-redux";
import { deleteCoffee } from "./Actions/addAction";

function ViewCart() {
  const cartArray = useSelector((state) => {
    return state.cart;
  });

  const dispatch = useDispatch();
  const [cartItems, setCartItems] = useState([]);

  function handleDelete(id) {
    dispatch(deleteCoffee(id));
  }

  let id = 0;
  useEffect(() => {
    const items = cartArray.map((item) => {
      id++;
      return (
        <li className="cart_Container" key={id}>
          <button
            onClick={() => handleDelete(item.id)}
            className="cart__delete-btn"
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/43/43625.png"
              alt=""
            />
          </button>
          <h1 className="cart_Product">{item.name}</h1>
          <p className="cart_Price">{item.price}kr</p>
        </li>
      );
    });
    setCartItems(items);
  }, [cartArray]);

  return <ul>{cartItems}</ul>;
}

export default ViewCart;
