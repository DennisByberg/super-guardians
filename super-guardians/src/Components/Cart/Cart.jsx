import "./Cart.css";
import ViewCart from "../../Redux/ViewCart";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { updateTime } from "../../Redux/Actions/addAction";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let orderNumberData = "";

  const cart = useSelector((state) => {
    return state.cart;
  });

  useEffect(() => {
    if (cart.length) {
      getOrder();
    } else {
      console.log("Inget att skicka");
    }

    async function getOrder() {
      const body = {
        details: {
          order: cart,
        },
      };
      const response = await fetch(
        "https://airbean.awesomo.dev/api/beans/order",
        {
          method: "POST",
          body: JSON.stringify(body),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      console.log(data);
      orderNumberData = data.orderNr;
    }
  }, []);

  function takeMyMoney() {
    console.log(orderNumberData);
    dispatch(updateTime(orderNumberData));
    navigate("./Status");
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
