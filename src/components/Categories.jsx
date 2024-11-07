import { Link } from "react-router-dom";
const Categories = ({ categories }) => {
  console.log(categories);
  return (
    <div role="tablist" className="tabs tabs-lifted">
      {categories.map((category) => (
        <Link
          key={category.category}
          to="/categories"
          role="tab"
          className="tab"
        >
          {category.category}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
