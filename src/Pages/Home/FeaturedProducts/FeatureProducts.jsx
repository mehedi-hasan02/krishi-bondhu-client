import FeaturedProduct from "./FeaturedProduct";
import PropTypes from 'prop-types';

const FeatureProducts = ({ products }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <h1 className="text-4xl text-center mt-20 font-bold text-gray-800">
        Featured Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
        {products.map((product, index) => (
          <div 
            key={product.id} 
            className={`animate__animated animate__fadeInUp animate__delay-${index % 5}s`}
          >
            <FeaturedProduct product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

FeatureProducts.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    })
  ),
};

export default FeatureProducts;