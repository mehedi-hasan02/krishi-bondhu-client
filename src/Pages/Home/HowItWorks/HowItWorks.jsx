const HowItWorks = () => {
  return (
    <div className="mx-auto my-20 w-11/12 animate__animated animate__fadeInUp">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
        <div className="h-px bg-gray-300 flex-grow"></div>
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800">
          How It Works
        </h1>
        <div className="h-px bg-gray-300 flex-grow"></div>
        <img
          src="https://i.ibb.co/4WD3B9z/How-might-we-workshop-template-Community-2.jpg"
          className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
        />
      </div>

      {/* For consumers */}
      <h3 className="text-3xl font-bold text-center mb-12 text-gray-800">For Consumers</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        {/* Browse local product */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-yellow-600 mb-4">1</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">Browse Local Produce</h4>
          <p className="text-gray-700">
            Explore a wide variety of fresh, locally-sourced produce directly from nearby farmers.
          </p>
        </div>

        {/* Place your order */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-yellow-600 mb-4">2</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">Place Your Order</h4>
          <p className="text-gray-700">
            Add your chosen items to the cart and proceed to a seamless checkout process. 
            Choose your preferred payment method and delivery option.
          </p>
        </div>

        {/* Enjoy Fresh, Farm-to-Table Produce */}
        <div className="bg-yellow-50 p-8 rounded-xl shadow-lg border border-yellow-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-yellow-600 mb-4">3</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">Enjoy Fresh Produce</h4>
          <p className="text-gray-700">
            Receive your order at your doorstep or pick it up from a designated location. 
            Enjoy the freshness and quality of produce that comes straight from the farm to your table.
          </p>
        </div>
      </div>

      {/* for farmers */}
      <h3 className="text-3xl font-bold text-center mt-16 mb-12 text-gray-800">For Farmers</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* List Your Products */}
        <div className="bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-green-600 mb-4">1</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">List Your Products</h4>
          <p className="text-gray-700">
            Create listings for your farm&#39;s produce with detailed descriptions, 
            high-quality photos, prices, and availability. Categorize your products for easy browsing by customers.
          </p>
        </div>

        {/* Manage Orders */}
        <div className="bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-green-600 mb-4">2</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">Manage Orders</h4>
          <p className="text-gray-700">
            Keep track of incoming orders, manage inventory, and update stock levels. 
            Accept or reject orders based on availability and communicate directly with customers for any inquiries.
          </p>
        </div>

        {/* Grow Your Business */}
        <div className="bg-green-50 p-8 rounded-xl shadow-lg border border-green-200 transform transition-all duration-300 hover:scale-105">
          <div className="text-5xl font-bold text-green-600 mb-4">3</div>
          <h4 className="text-2xl font-bold pb-4 text-gray-800">Grow Your Business</h4>
          <p className="text-gray-700">
            Expand your market reach and increase your profits by connecting directly with consumers. 
            Benefit from promotional tools and real-time feedback to improve your offerings and services.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;