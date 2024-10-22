import { useState } from "react";
import { useEffect } from "react";
import Bottle from "../bottle/Bottle";
import "./bottles.css";
import { addCartInStore } from "../../utilities/localStorage";
import { getStoredCart } from "../../utilities/localStorage";
import { removeInLS } from "../../utilities/localStorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [purchaseBottles, setPurchaseBottle] = useState([]);
  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);
  //problem again see in this items
  useEffect(() => {
    if (bottles.length > 0) {
      const getStoredCartId = getStoredCart();

      const saveBottleLS = [];
      for (const id of getStoredCartId) {
        const bottleLS = bottles.find((bottle) => bottle.id === id);
        if (bottleLS) {
          saveBottleLS.push(bottleLS);
        }
      }
      setPurchaseBottle(saveBottleLS);
    }
  }, [bottles]);
  // ai porjonto
  const handlePurchase = (bottle) => {
    console.log(bottle);
    const newPurchaseBottle = [...purchaseBottles, bottle];
    setPurchaseBottle(newPurchaseBottle);
    addCartInStore(bottle.id);
  };
  // aikhan theke problem
  const handleRemove = (id) => {
    //visual remove
    const remainingCart = purchaseBottles.filter(
      (purchaseBottle) => purchaseBottle.id !== id
    );
    setPurchaseBottle(remainingCart);
    //remove from ls
    removeInLS(id);
  };
  //ai projonto
  return (
    <>
      <div>
        {purchaseBottles.map((purchaseBottle) => {
          return (
            <div
              className="purchase-product-container"
              key={purchaseBottle?.id}
            >
              <img src={purchaseBottle?.img} alt="" />
              {/* btn a kih kora hoyece aitaw problem */}
              <button onClick={() => handleRemove(purchaseBottle?.id)}>
                Remove
              </button>
            </div>
          );
        })}
      </div>
      <div>
        <h3>this is Bottles component</h3>
      </div>
      <div className="bottle-main-container">
        {bottles.map((bottle) => {
          return (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              handlePurchase={handlePurchase}
            ></Bottle>
          );
        })}
      </div>
    </>
  );
};

export default Bottles;
