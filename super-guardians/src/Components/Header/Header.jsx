import "./Header.css";
import NavigationSlider from "../NavigationSlider/NavigationSlider";
import Cart from "../Cart/Cart";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [navigationSRC, setNavigationSRC] = useState(
    "src/assets/navicon-burger.svg"
  );

  // Denna funktion växlar navigeringsstatusen och ändrar navigeringsikonen därefter.
  function handleNavigation() {
    setIsNavOpen(!isNavOpen);
    setNavigationSRC(
      isNavOpen
        ? "src/assets/navicon-burger.svg"
        : "src/assets/navicon-cross.svg"
    );
  }

  function handleCart() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <header>
      <div onClick={handleNavigation} className="header__navigation-container">
        <img className="header__navigation-icon" src={navigationSRC} />
      </div>
      <div onClick={handleCart} className="header__cart-container">
        <img className="header__cart-logo" src="src/assets/bag.svg" />
      </div>
      {isNavOpen ? <NavigationSlider /> : null}
      {isCartOpen ? <Cart /> : null}
    </header>
  );
};

export default Header;
