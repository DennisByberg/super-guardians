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

  function handleDelete(item) {
    console.log(item.id);
    dispatch(deleteCoffee(item.id));
  }

  useEffect(() => {
    const items = cartArray.map((item, index) => {
      const id = index + 1;
      item.id = id;
      return (
        <li className="cart_Container" key={item.id}>
          <div className="view-cart__button-and-name-container">
            <h1 className="cart_Product">{item.name}</h1>
            <div className="view-cart__dot-container"></div>
          </div>
          <div className="view-cart__button-and-price-container">
            <button
              onClick={() => handleDelete(item)}
              className="cart__delete-btn"
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/9248/9248491.png"
                alt=""
              />
            </button>
            <p className="cart_Price">{item.price}kr</p>
          </div>
        </li>
      );
    });
    setCartItems(items);
  }, [cartArray]);

  return <ul>{cartItems}</ul>;
}

export default ViewCart;
