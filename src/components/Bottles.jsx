import { useEffect } from "react";
import Bottle from "./Bottle";
import { useState } from "react";
import { addCartLS, getCartStorage } from "../utilities/localstorage";

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

  return (
    <div className="px-12">
      <h1 className="text-xl font-semibold text-right my-3">
        Cart: {cart.length}
      </h1>
      <div className="flex gap-5">
        {cart &&
          cart.map((bottle) => (
            <img
              src={bottle.img}
              key={bottle.id}
              className="w-16 rounded-full"
            />
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
