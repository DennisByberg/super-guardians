import "./Menu.css";
import { useState, useEffect } from "react";
import LoadingSlider from "../../Components/LoadingSlider/LoadingSlider";

function Menu() {
  const [showLoadingSlide, setShowLoadingSlide] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoadingSlide(false);
    }, 9000); // hur många ms tills slidern ska försvinna...

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="menu">
      {showLoadingSlide && <LoadingSlider />}
      MENU
    </section>
  );
}

export default Menu;
