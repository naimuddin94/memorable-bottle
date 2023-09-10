import { useEffect } from "react";
import Bottle from "./Bottle";
import { useState } from "react";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  return (
    <div className="px-12">
      <h1 className="text-xl font-semibold text-right my-3">Cart: 0</h1>
      <div className="grid grid-cols-4 gap-5">
        {bottles &&
          bottles.map((bottle, indx) => (
            <Bottle key={bottle.id} bottle={bottle} indx={indx} />
          ))}
      </div>
    </div>
  );
};

export default Bottles;
