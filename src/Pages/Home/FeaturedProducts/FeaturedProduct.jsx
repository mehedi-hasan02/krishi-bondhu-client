import { FaCartPlus } from "react-icons/fa";

const FeaturedProduct = ({ product }) => {
  const { name, image_url, price_per_kg, unit } = product;
  return (
    <div className="card glass">
      <figure>
        <img src={image_url} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>
          Price per KG: {price_per_kg} {unit}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-success text-white">
            Add to Cart <FaCartPlus />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProduct;
