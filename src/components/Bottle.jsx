import Rating from "./Rating";

// eslint-disable-next-line react/prop-types
const Bottle = ({ bottle, indx, handleCart }) => {
  // eslint-disable-next-line react/prop-types
  const { name, img, seller, price } = bottle;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Bottle Image" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>Price: ${price}</p>
        <p>Brand: {seller}</p>
        <Rating indx={indx} />
        <div className="card-actions my-3">
          <button
            onClick={() => handleCart(bottle)}
            className="btn btn-sm btn-primary"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Bottle;
