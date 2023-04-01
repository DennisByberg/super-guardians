import "./Status.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../../Redux/Actions/addAction";

function Status() {
  const dispatch = useDispatch();
  const [updateTime, setUpdateTime] = useState();

  // This code uses the useSelector hook from the React Redux library to retrieve the value of the "orderNr" property from the Redux store. The value of "orderNr" is then assigned to the constant variable "orderNumb".
  const orderNumb = useSelector((state) => {
    return state.orderNr;
  });

  // This code uses the useEffect hook to fetch data from an API endpoint and update the state of the component. Specifically, it fetches the estimated time of arrival (ETA) for an order with a given order number using the Airbean API. The useEffect hook is used to ensure that the data is fetched and the state is updated when the component mounts. The fetched ETA is then stored in the state variable updateTime using the setUpdateTime function.
  useEffect(() => {
    async function getTime() {
      const response = await fetch(
        `https://airbean.awesomo.dev/api/beans/order/status/${orderNumb}`
      );
      const data = await response.json();
      setUpdateTime(data.eta);
    }
    getTime();
  }, []);

  function clear() {
    dispatch(clearCart());
  }

  return (
    <section className="status">
      {orderNumb ? (
        <div className="order_Number_Container">
          <p className="status_Number_Text">Ordernummer</p>
          <p className="status_Number"># {orderNumb}</p>
        </div>
      ) : null}

      <img className="drone_pic" src="src/assets/DRONE.svg" />
      <h1 className="status_Timer_Text">
        {orderNumb ? "Din beställning är på väg" : "Ingen beställning lagd"}!
      </h1>
      {orderNumb ? (
        <h2 className="status_Timer">{updateTime} Minuter</h2>
      ) : null}
      <Link onClick={clear} className="button_Status" to="/">
        Ok, Cool!
      </Link>
    </section>
  );
}

export default Status;
