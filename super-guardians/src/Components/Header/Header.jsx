import "./Header.css";
import NavigationSlider from "../NavigationSlider/NavigationSlider";
import { useState } from "react";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
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

  return (
    <header>
      <div onClick={handleNavigation} className="header__navigation-container">
        <img className="header__navigation-icon" src={navigationSRC} />
      </div>
      <div className="header__cart-container">
        <img className="header__cart-logo" src="src/assets/bag.svg" />
      </div>
      {isNavOpen ? <NavigationSlider /> : null}
    </header>
  );
};

export default Header;
