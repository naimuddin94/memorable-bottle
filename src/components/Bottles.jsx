import { useEffect } from "react";
import Bottle from "./Bottle";
import { useState } from "react";
import {
  addCartLS,
  getCartStorage,
  removeCartItem,
} from "../utilities/localstorage";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storeCart = getCartStorage();
      const savedCart = [];
      for (const id of storeCart) {
        const storeItem = bottles.find((bottle) => bottle.id === id);
        savedCart.push(storeItem);
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleCart = (bottle) => {
    setCart([...cart, bottle]);
    addCartLS(bottle.id);
  };

  const handleRemove = (id) => {
    const remainingCart = cart.filter((cart) => cart.id !== id);
    setCart(remainingCart);
    removeCartItem(id);
  };

  return (
    <div className="px-12">
      <h1 className="text-xl font-semibold text-right my-3">
        Cart: {cart.length}
      </h1>
      <div className="flex gap-5">
        {cart &&
          cart.map((bottle) => (
            <div key={bottle.id} className="flex flex-col items-center gap-2">
              <img src={bottle.img} className="w-16 rounded-full" />
              <button
                onClick={() => handleRemove(bottle.id)}
                className="btn btn-sm btn-outline btn-warning text-xs"
              >
                Remove
              </button>
            </div>
          ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {bottles &&
          bottles.map((bottle, indx) => (
            <Bottle
              key={bottle.id}
              bottle={bottle}
              indx={indx}
              handleCart={handleCart}
            />
          ))}
      </div>
    </div>
  );
};

export default Bottles;
