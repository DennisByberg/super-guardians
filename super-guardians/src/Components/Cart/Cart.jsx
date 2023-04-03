import "./Cart.css";
import ViewCart from "../../Redux/ViewCart";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateTime } from "../../Redux/Actions/addAction";
import { useEffect, useState } from "react";

function Cart() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  let orderNumberData = "";
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
      <div className="order_Cart">
        <h1 className="cart__title">Din Beställning</h1>
        <ViewCart />
      </div>

      <div className="totalPrice_Button">
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
