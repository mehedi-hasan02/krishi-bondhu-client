const Category = ({ category }) => {
  return (
    <div className="text-center p-10 timeline-box">
      <img className="w-24 mx-auto rounded-md" src={category?.img} />
      <h1 className="text-2xl">{category?.name}</h1>
    </div>
  );
};

export default Category;
