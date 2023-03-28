import "./CoffeeCard.css";
import { add } from "../../Redux/Actions/addAction";
import { useDispatch } from "react-redux";

const CoffeeCard = ({ title, description, price }) => {
  const dispatch = useDispatch();

  function addToCart() {
    const coffeeObject = {
      title: title,
      description: description,
      price: price,
    };
    dispatch(add(coffeeObject));
  }

  return (
    <li className="coffee-card">
      <button onClick={addToCart} className="coffee-card__add-button">
        <img src="/src/assets/add.svg" />
      </button>
      <div className="coffee-card__title-and-description-container">
        <p className="coffee-card__title">{title}</p>
        <p className="coffee-card__description">{description}</p>
      </div>
      <p className="coffee-card__price">{price} kr</p>
    </li>
  );
};

export default CoffeeCard;
