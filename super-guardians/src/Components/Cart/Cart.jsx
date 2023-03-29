import "./Cart.css";
import ViewCart from "../../Redux/ViewCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const navigate = useNavigate();
  const cart = useSelector((state) => {
    return state.cart;
  });

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
      <h1 className="cart__title">Din Beställning</h1>
      <ViewCart />
      <button onClick={takeMyMoney} className="cart__button">
        Take my money!
      </button>
    </section>
  );
}

export default Cart;
