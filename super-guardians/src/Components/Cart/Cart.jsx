import "./Cart.css";
import ViewCart from "../../Redux/ViewCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const [total, setTotal] = useState(0); 
  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    let temp = 0;
    cart.map((cartObject) => {
      temp += cartObject.price;
    });
    setTotal(temp);
  },[cart]);

  function takeMyMoney() {
    const cartToSend = cart.map((cartObject) => {
  
      return {
        name: cartObject.title,
        price: cartObject.price,
      };
    });
    if (cartToSend.length === 0) {
      alert("Det finns inget i card att skicka");
    } else {
      navigate("/Status", { state: { cartToSend } });
    }
  }
  
  return (
    <section className="cart">
      <div className="order_Cart">
      <h1 className="cart__title">Din Beställning</h1>
      <ViewCart />
      </div>

      <div className="totalPrice_Button" >
      <h1 className="dot_Cart">Totalt pris {total} kr </h1>
      <p>inkl moms + drönarleverans</p>
      <button onClick={takeMyMoney} className="cart__button">
        Take my money!
      </button>
      </div>
    </section>
  );
}

export default Cart;
