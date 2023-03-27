import "./NavigationSlider.css";
import { Link } from "react-router-dom";

function NavigationSlider() {
  return (
    <section className="navigation-slider">
      <Link className="nav-item" to="/">
        Meny
      </Link>
      <Link className="nav-item" to="/About">
        Vårt Kaffe
      </Link>
      <Link className="nav-item" to="/Status">
        Orderstatus
      </Link>
    </section>
  );
}

export default NavigationSlider;
