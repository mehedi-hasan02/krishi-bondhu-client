import { FaCartPlus } from "react-icons/fa";
import PropTypes from 'prop-types';

const FeaturedProduct = ({ product }) => {
  const { name, image_url, price_per_kg, unit } = product;
  return (
    <div className="card bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">
      <figure className="h-48 overflow-hidden">
        <img 
          src={image_url} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title text-lg font-bold text-gray-800">{name}</h2>
        <p className="text-green-600 font-semibold">
          Price: {price_per_kg} {unit}
        </p>
        <div className="card-actions justify-end mt-4">
          <button className="btn bg-green-500 hover:bg-green-600 text-white border-none flex items-center gap-2 transition-all duration-300 transform hover:scale-105">
            Add to Cart <FaCartPlus />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

FeaturedProduct.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    image_url: PropTypes.string,
    price_per_kg: PropTypes.number,
    unit: PropTypes.string,
  }),
};

export default FeaturedProduct;