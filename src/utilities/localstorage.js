const getCartStorage = () => {
  const savedStorage = localStorage.getItem("cart");
  if (savedStorage) {
    return JSON.parse(savedStorage);
  }
  return [];
};

const addCartLS = (cartId) => {
  const newCart = getCartStorage();
  newCart.push(cartId);
  localStorage.setItem("cart", JSON.stringify(newCart));
};

const removeCartItem = (id) => {
  const newCart = getCartStorage();
  const remaining = newCart.filter((cart) => cart !== id);
  localStorage.setItem("cart", JSON.stringify(remaining));
};

export { addCartLS, getCartStorage, removeCartItem };
