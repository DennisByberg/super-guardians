import "./CoffeeCard.css";

const CoffeeCard = ({ title, description, price }) => {
  return (
    <li className="coffee-card">
      <button className="coffee-card__add-button">
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
