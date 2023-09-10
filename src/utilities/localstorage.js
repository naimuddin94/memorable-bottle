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

export { addCartLS, getCartStorage };
