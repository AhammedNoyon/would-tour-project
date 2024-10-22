import PropTypes, { object } from "prop-types";
import "./bottle.css";
const Bottle = ({ bottle, handlePurchase }) => {
  // console.log(bottle);
  const { id, img, category, name, seller, price, ratings } = bottle;
  // console.log(id, img, category, name, seller, price, ratings);
  return (
    <>
      <div className="bottle-container">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <p>
          <small>{id}</small>
        </p>
        <p>
          <small>{price}</small>
        </p>
        <p>
          <small>{ratings}</small>
        </p>
        <p>
          <small>{category}</small>
        </p>
        <p>
          <small>{seller}</small>
        </p>
        <button onClick={() => handlePurchase(bottle)}>Purchase</button>
      </div>
    </>
  );
};

Bottle.propTypes = {
  bottle: PropTypes.object,
  handlePurchase: PropTypes.func,
};
export default Bottle;
