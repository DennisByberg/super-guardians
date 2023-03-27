import "./Menu.css";
import { useState, useEffect } from "react";
import LoadingSlider from "../../Components/LoadingSlider/LoadingSlider";
import Header from "../../Components/Header/Header";

function Menu() {
  const [showLoadingSlide, setShowLoadingSlide] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoadingSlide(false);
    }, 1); // hur många ms tills slidern ska försvinna...

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="menu">
      {showLoadingSlide && <LoadingSlider />}
      <Header />
    </section>
  );
}

export default Menu;
