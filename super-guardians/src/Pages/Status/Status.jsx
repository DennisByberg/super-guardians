import "./Status.css";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Actions/addAction";

function Status() {
  const navigationState = useLocation();
  const dispatch = useDispatch();

  const [updateTime, setUpdateTime] = useState();
  const [order, setOrder] = useState({
    orderNr: "Inget i din order",
    eta: 0,
  });

  useEffect(() => {
    if (navigationState.state) {
      async function getOrder() {
        const body = {
          details: {
            order: navigationState.state.cartToSend,
          },
        };

        try {
          const response = await fetch(
            "https://airbean.awesomo.dev/api/beans/order",
            {
              method: "POST",
              body: JSON.stringify(body),
              headers: {
                "content-type": "application/json",
              },
            }
          );

          const data = await response.json();
          setOrder(data);
        } catch (error) {
          console.error(error);
        }
      }
      getOrder();
    }
  }, []);

  useEffect(() => {
    async function getTime() {
      const response = await fetch(
        `https://airbean.awesomo.dev/api/beans/order/status/${order.orderNr}`
      );
      const data = await response.json();
      setUpdateTime(data.eta);
    }
    getTime();
  }, [order]);

  function clear() {
    dispatch(clearCart());
  }

  return (
    <section className="status">
      <div className="order_Number_Container">
        <p className="status_Number_Text">Ordernummer</p>
        <p className="status_Number">#{order.orderNr}</p>
      </div>

      <img className="drone_pic" src="src/assets/DRONE.svg" />
      <h1 className="status_Timer_Text">Din beställning är på väg!</h1>
      <h2 className="status_Timer">{updateTime} Minuter</h2>
      <Link onClick={clear} className="button_Status" to="/">
        Ok, Cool!
      </Link>
    </section>
  );
}

export default Status;
