import "./Menu.css";
import { useState, useEffect } from "react";
import LoadingSlider from "../../Components/LoadingSlider/LoadingSlider";
import Header from "../../Components/Header/Header";
import CoffeeCard from "../../Components/CoffeeCard/CoffeeCard";
import { setIsLoadingPageShowedToTrue } from "../../Redux/Actions/addAction";
import { useSelector, useDispatch } from "react-redux";

function Menu() {
  const [showLoadingSlide, setShowLoadingSlide] = useState(true);
  const [coffeeMenu, setCoffeeMenu] = useState([]);
  const isLoadingPageShowed = useSelector((state) => {
    return state.isLoadingPageShowed;
  });
  const dispatch = useDispatch();

  useEffect(() => {
    const coffeeURL = "https://airbean.awesomo.dev/api/beans/";
    async function getCoffeesFromAPI() {
      const response = await fetch(coffeeURL);
      const data = await response.json();

      setCoffeeMenu(data.menu);
    }
    getCoffeesFromAPI();
  }, []);

  const coffeeComponents = coffeeMenu.map((coffee) => {
    return (
      <CoffeeCard
        key={coffee.id}
        title={coffee.title}
        description={coffee.desc}
        price={coffee.price}
      />
    );
  });

  // Loading Slider Timer...
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoadingSlide(false);
      dispatch(setIsLoadingPageShowedToTrue());
    }, 3000); // hur många ms tills slidern ska försvinna...

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="menu">
      {showLoadingSlide && !isLoadingPageShowed && <LoadingSlider />}
      <Header />
      <h1 className="menu__title">Meny</h1>
      <ul className="coffee-components-list">{coffeeComponents}</ul>
    </section>
  );
}

export default Menu;
