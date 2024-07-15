const Category = ({ category }) => {
  console.log(category);
  return (
    <div className="text-center">
      <img className="w-24 mx-auto rounded-md" src={category?.img} />
      <h1 className="text-2xl">{category?.name}</h1>
    </div>
  );
};

export default Category;
