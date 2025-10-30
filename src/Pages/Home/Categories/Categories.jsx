import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./Category";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    axios
      .get("categories.json")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  
  return (
    <div className="my-10 w-11/12 mx-auto animate__animated animate__fadeInUp">
      <h3 className="text-4xl font-semibold text-center mb-10">Our Product Categories</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 pt-5">
        {categories.map((category, index) => (
          <div 
            key={category.id} 
            className={`animate__animated animate__fadeInUp animate__delay-${index % 5}s`}
          >
            <Category category={category} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;