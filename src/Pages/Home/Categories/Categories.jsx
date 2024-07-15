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
    <div className="mt-10 p-10">
      <h3 className="text-4xl font-semibold text-center">Categories</h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-5">
        {categories.map((category) => (
          <Category key={category.id} category={category}></Category>
        ))}
      </div>
    </div>
  );
};

export default Categories;
