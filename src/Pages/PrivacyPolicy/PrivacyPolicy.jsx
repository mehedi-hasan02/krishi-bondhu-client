const PrivacyPolicy = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-100 min-h-screen py-10 animate__animated animate__fadeIn">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Privacy Policy</h1>
            <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            <p className="text-gray-600 mt-6">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>

          <div className="prose prose-green max-w-none">
            <p className="text-gray-700 mb-8 text-lg">
              At KrishiBondhu, we are committed to protecting your privacy. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website.
            </p>

            <div className="border-l-4 border-green-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
              <p className="text-gray-700 mb-4">
                We may collect information about you in a variety of ways. The information we may collect on the Site includes:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>Personal Data:</strong> Personally identifiable information, such as your
                  name, shipping address, email address, and telephone number.
                </li>
                <li>
                  <strong>Derivative Data:</strong> Information our servers automatically collect when
                  you access the Site, such as your IP address, browser type, and operating system.
                </li>
                <li>
                  <strong>Financial Data:</strong> Financial information, such as data related to your
                  payment method (e.g., valid credit card number, card brand, expiration date) that we 
                  may collect when you purchase, order, return, exchange, or request information about 
                  our services from the Site.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-emerald-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Use of Your Information</h2>
              <p className="text-gray-700 mb-4">
                Having accurate information about you permits us to provide you with a smooth, efficient, 
                and customized experience. Specifically, we may use information collected about you via the Site to:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Create and manage your account.</li>
                <li>Process your transactions and deliver your orders.</li>
                <li>Email you regarding your account or order.</li>
                <li>Offer new products, services, and/or recommendations to you.</li>
                <li>Improve our website and services.</li>
                <li>Assist law enforcement and respond to subpoenas.</li>
              </ul>
            </div>

            <div className="border-l-4 border-teal-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Disclosure of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>
                  <strong>By Law or to Protect Rights:</strong> If we believe the release of information about you 
                  is necessary to respond to legal process, to investigate or remedy potential violations of our policies, 
                  or to protect the rights, property, and safety of others, we may share your information as permitted 
                  or required by any applicable law, rule, or regulation.
                </li>
                <li>
                  <strong>Business Transfers:</strong> We may share or transfer your information in connection with, 
                  or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or 
                  a portion of our business to another company.
                </li>
                <li>
                  <strong>Third-Party Service Providers:</strong> We may share your information with third parties 
                  that perform services for us or on our behalf, including payment processing, data analysis, email 
                  delivery, hosting services, customer service, and marketing assistance.
                </li>
              </ul>
            </div>

            <div className="border-l-4 border-cyan-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security of Your Information</h2>
              <p className="text-gray-700 mb-4">
                We use administrative, technical, and physical security measures to help protect your personal information. 
                While we have taken reasonable steps to secure the personal information you provide to us, please be aware 
                that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission 
                can be guaranteed against any interception or other type of misuse.
              </p>
            </div>

            <div className="border-l-4 border-blue-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Policy for Children</h2>
              <p className="text-gray-700 mb-4">
                We do not knowingly solicit information from or market to children under the age of 13. 
                If we learn that we have collected personal information from a child under age 13 without 
                verification of parental consent, we will delete that information as quickly as possible.
              </p>
            </div>

            <div className="border-l-4 border-indigo-500 pl-4 mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Changes to This Privacy Policy</h2>
              <p className="text-gray-700 mb-4">
                We may update this Privacy Policy from time to time in order to reflect, for example, 
                changes to our practices or for other operational, legal, or regulatory reasons. We will 
                notify you of any changes by posting the new Privacy Policy on the Site. You are advised 
                to review this Privacy Policy periodically for any changes.
              </p>
            </div>

            <div className="border-l-4 border-purple-500 pl-4">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                If you have questions or comments about this Privacy Policy, please contact us at:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:email@example.com" className="text-green-600 hover:underline">
                    email@example.com
                  </a>
                </p>
                <p className="text-gray-700 mt-2">
                  <span className="font-semibold">Phone:</span> +880 1234-567890
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;