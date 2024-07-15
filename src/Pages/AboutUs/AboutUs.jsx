import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10">
      <header className="text-center mb-10">
        <h1 className="text-4xl font-bold text-gray-800">About KrishiBondhu</h1>
      </header>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Welcome to KrishiBondhu
        </h2>
        <p className="text-gray-700 mb-6">
          Welcome to KrishiBondhu, your trusted platform connecting farmers
          directly to consumers in Bangladesh. We are committed to bridging the
          gap between local farmers and consumers, ensuring fresh, quality
          produce reaches your table while empowering farmers to get fair prices
          for their hard work.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 mb-6">
          At KrishiBondhu, our mission is simple: to create a sustainable,
          transparent, and efficient marketplace for agricultural products. We
          aim to support the local farming community by providing them with the
          tools they need to succeed and grow, while also delivering fresh,
          healthy, and affordable produce to consumers.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          What We Offer
        </h2>
        <ul className="list-disc list-inside text-gray-700">
          <li className="mb-4">
            <strong>Direct Connection:</strong> KrishiBondhu eliminates the
            middlemen, allowing farmers to sell their products directly to
            consumers. This ensures farmers get a fair price for their produce,
            and consumers receive fresher goods at competitive prices.
          </li>
          <li className="mb-4">
            <strong>Wide Variety of Products:</strong> Our platform offers a
            diverse range of agricultural products, including fruits,
            vegetables, grains, dairy, fish, flowers, herbs, spices, nuts, and
            seeds. This variety ensures that consumers have access to everything
            they need, all sourced locally.
          </li>
          <li className="mb-4">
            <strong>Geolocation Integration:</strong> We utilize geolocation
            technology to help consumers find local farmers in their area,
            promoting a hyperlocal shopping experience. This not only supports
            local farmers but also reduces the carbon footprint associated with
            transporting goods over long distances.
          </li>
          <li className="mb-4">
            <strong>Easy-to-Use Platform:</strong> Our user-friendly interface
            makes it easy for both farmers and consumers to navigate the
            platform. Farmers can effortlessly list their products, manage
            orders, and communicate with customers, while consumers can easily
            browse, order, and track their purchases.
          </li>
          <li className="mb-4">
            <strong>Secure Transactions:</strong> We prioritize the security of
            all transactions on our platform, offering multiple payment options
            and secure processing to ensure a safe shopping experience for
            everyone.
          </li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Impact
        </h2>
        <p className="text-gray-700 mb-6">
          Since our inception, KrishiBondhu has been dedicated to making a
          positive impact on the agricultural community in Bangladesh. By
          connecting farmers directly with consumers, we have helped numerous
          farmers increase their income and improve their livelihoods. Our
          efforts also contribute to the local economy, support sustainable
          farming practices, and promote healthy eating habits among consumers.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-10">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Join Us</h2>
        <p className="text-gray-700 mb-6">
          Whether you are a farmer looking to expand your market reach or a
          consumer seeking fresh, local produce, KrishiBondhu is here to serve
          you. Join us in our mission to create a more sustainable and equitable
          food system in Bangladesh.
        </p>
      </section>

      <section className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-700 mb-6">
          Have questions or need assistance? Our dedicated support team is
          always ready to help. Contact us at{" "}
          <a href="mailto:email@example.com" className="text-blue-500">
            email@example.com
          </a>{" "}
          or call us at +880 1234-567890.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
