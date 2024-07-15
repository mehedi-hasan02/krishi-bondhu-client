const HowItWorks = () => {
  return (
    <div className="mx-auto">
      <div className="flex justify-center items-center gap-10 mb-10 ">
        <h1 className="text-5xl">How It Works...?</h1>
        <img
          src="https://i.ibb.co/4WD3B9z/How-might-we-workshop-template-Community-2.jpg"
          className="w-24"
        />
      </div>
      {/* For consumers */}
      <h3 className="text-3xl timeline-box text-center">For Consumers</h3>

      <div className="timeline">
        <ul className="flex-col lg:flex">
          {/* Browse local product */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  ">Browse Local Produce</p>
            <div className="bg-yellow-400 font-semibold  chat-bubble  p-10">
              <p className="text-gray-700 ">
                Explore a wide variety of fresh, locally-sourced produce
                directly from nearby farmers.
              </p>
            </div>
          </li>
          {/* Place your order */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  timeline-middle">
              Place Your Order
            </p>
            <div className="bg-yellow-400 font-semibold  chat-bubble  p-10">
              <p className="text-gray-700 ">
                Add your chosen items to the cart and proceed to a seamless
                checkout process. Choose your preferred payment method and
                delivery option.
              </p>
            </div>
          </li>

          {/* Enjoy Fresh, Farm-to-Table Produce */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  timeline-middle">
              Enjoy Fresh, Farm-to-Table Produce
            </p>
            <div className="bg-yellow-400 font-semibold chat-bubble  p-10">
              <p className="text-gray-700 ">
                Receive your order at your doorstep or pick it up from a
                designated location. Enjoy the freshness and quality of produce
                that comes straight from the farm to your table.
              </p>
            </div>
          </li>

          {/*  */}
        </ul>
      </div>

      {/* for farmers */}
      <h3 className="text-3xl timeline-box text-center mt-10">For Farmers</h3>

      <div className="timeline">
        <ul className="flex-col lg:flex">
          {/* Browse local product */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  ">List Your Products</p>
            <div className="bg-green-400 font-semibold  chat-bubble  p-10">
              <p className="text-gray-700 ">
                Create listings for your farm's produce with detailed
                descriptions, high-quality photos, prices, and availability.
                Categorize your products for easy browsing by customers.
              </p>
            </div>
          </li>
          {/* Place your order */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  timeline-middle">
              Manage Orders
            </p>
            <div className="bg-green-400 font-semibold  chat-bubble  p-10">
              <p className="text-gray-700 ">
                Keep track of incoming orders, manage inventory, and update
                stock levels. Accept or reject orders based on availability and
                communicate directly with customers for any inquiries.
              </p>
            </div>
          </li>

          {/* Enjoy Fresh, Farm-to-Table Produce */}
          <li className=" timeline-box">
            <p className="text-2xl  font-bold pb-2  timeline-middle">
              Grow Your Business
            </p>
            <div className="bg-green-400 text-white font-semibold chat-bubble  p-10">
              <p className="text-gray-700 ">
                Expand your market reach and increase your profits by connecting
                directly with consumers. Benefit from promotional tools and
                real-time feedback to improve your offerings and services.
              </p>
            </div>
          </li>

          {/*  */}
        </ul>
      </div>
    </div>
  );
};

export default HowItWorks;
