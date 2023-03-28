import "./Cart.css";
import ViewCart from "../../Redux/ViewCart";

function Cart() {
  return (
    <section className="cart">
      <h1 className="cart__title">Din Beställning</h1>
      <ViewCart />
      <button className="cart__button">Take my money!</button>
    </section>
  );
}

export default Cart;
