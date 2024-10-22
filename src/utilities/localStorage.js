const getStoredCart = () => {
  const haveCheckCartInStore = localStorage.getItem("cart");
  if (haveCheckCartInStore) {
    const parseStoreCart = JSON.parse(haveCheckCartInStore);
    return parseStoreCart;
  }
  return [];
};

const addCartInStore = (id) => {
  const getCartCollectionByCall = getStoredCart();
  // console.log(getCartCollectionByCall);
  getCartCollectionByCall.push(id);
  saveNewCartCollectionInStore(getCartCollectionByCall);
};

const saveNewCartCollectionInStore = (cart) => {
  const stringifyNewCollectionCart = JSON.stringify(cart);
  localStorage.setItem("cart", stringifyNewCollectionCart);
};

//ai function taw problem
const removeInLS = (id) => {
  const getCartCollectionByCall = getStoredCart();
  const remaining = getCartCollectionByCall.filter((idx) => idx !== id);
  saveNewCartCollectionInStore(remaining);
};
export { addCartInStore, getStoredCart, removeInLS };
