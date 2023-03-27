import "./Status.css";
import { Link } from "react-router-dom";

function Status() {
  return <section className="status">  
  <div className="order_Number_Container">
  <p className="status_Number_Text">Ordernumber </p>
  <p className="status_Number">#12DV23F</p>
  </div>
 
  <img className="drone_pic" src="src/assets/DRONE.svg"/>
       <h1 className="status_Timer_Text">Din beställning är på väg!</h1>
       <h2 className="status_Timer">13 minuter</h2>
       <Link className="button_Status" to="/">
        Ok, Cool!
      </Link>
      
  </section>;
}

export default Status;
/* status_button */