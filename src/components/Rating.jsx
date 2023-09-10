// eslint-disable-next-line react/prop-types
const Rating = ({ indx }) => {
  return (
    <div className="rating rating-md">
      <input
        type="radio"
        name={`rating-${indx}`}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={`rating-${indx}`}
        className="mask mask-star-2 bg-orange-400"
        checked
      />
      <input
        type="radio"
        name={`rating-${indx}`}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={`rating-${indx}`}
        className="mask mask-star-2 bg-orange-400"
      />
      <input
        type="radio"
        name={`rating-${indx}`}
        className="mask mask-star-2 bg-orange-400"
      />
    </div>
  );
};

export default Rating;
