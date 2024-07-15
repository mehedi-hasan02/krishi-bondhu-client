import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  // Example state for products (replace with actual data fetching logic)
  const [products, setProducts] = useState([]);

  // Example useEffect to fetch products (replace with actual API call)
  useEffect(() => {
    // Replace with actual API call to fetch products
    // For demonstration, using dummy data
    const dummyProducts = [
      { id: 1, name: "Apple", category: "Fruits", price: 2.99, quantity: 100 },
      {
        id: 2,
        name: "Tomato",
        category: "Vegetables",
        price: 1.49,
        quantity: 50,
      },
      { id: 3, name: "Rice", category: "Grains", price: 4.99, quantity: 200 },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div className="container mx-auto p-4 h-screen">
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <Link
        to="/products/add"
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4 inline-block"
      >
        Add Product
      </Link>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-left">Price</th>
              <th className="py-2 px-4 text-left">Quantity</th>
              <th className="py-2 px-4 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {products.map((product) => (
              <tr key={product.id} className="border-b">
                <td className="py-2 px-4">{product.name}</td>
                <td className="py-2 px-4">{product.category}</td>
                <td className="py-2 px-4">${product.price.toFixed(2)}</td>
                <td className="py-2 px-4">{product.quantity}</td>
                <td className="py-2 px-4">
                  <Link
                    to={`/products/${product.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    View
                  </Link>
                  <span className="mx-2">|</span>
                  <Link
                    to={`/products/edit/${product.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Edit
                  </Link>
                  <span className="mx-2">|</span>
                  <button className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductList;
