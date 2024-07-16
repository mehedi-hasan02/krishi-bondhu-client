import FeaturedProduct from "./FeaturedProduct";

const FeatureProducts = ({ products }) => {
  return (
    <div>
      <h1 className="text-4xl text-center mt-20 font-bold">
        Featured Products
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 p-20">
        {products.map((product) => (
          <FeaturedProduct key={product.id} product={product}></FeaturedProduct>
        ))}
      </div>
    </div>
  );
};

export default FeatureProducts;
