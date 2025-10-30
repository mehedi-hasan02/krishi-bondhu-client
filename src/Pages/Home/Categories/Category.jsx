import PropTypes from 'prop-types';

const Category = ({ category }) => {
  return (
    <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
      <div className="flex justify-center items-center h-32 mb-4">
        <img 
          className="max-h-24 mx-auto rounded-lg object-contain transition-transform duration-300 hover:scale-110" 
          src={category?.img} 
          alt={category?.name}
        />
      </div>
      <h1 className="text-xl font-semibold text-gray-800">{category?.name}</h1>
      <p className="text-gray-600 text-sm mt-2">{category?.description}</p>
      <button className="mt-4 text-green-600 hover:text-green-800 font-medium transition-colors duration-300">
        Explore →
      </button>
    </div>
  );
};

Category.propTypes = {
  category: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    img: PropTypes.string,
  }),
};

export default Category;