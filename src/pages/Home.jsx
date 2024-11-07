import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {
  const categories = useLoaderData();
  console.log(categories);
  return (
    <div>
      {/* banner */}
      <Banner></Banner>
      {/* heading */}
      <Heading
        title={"Browse Coffees By Categories"}
        subtitle={
          "Choose Your Desire Categories To browse Through Specific Coffee That Fit In Your Taste"
        }
      ></Heading>
      {/* categories */}
      <Categories categories={categories}></Categories>
      {/* dynamic part */}
      <Outlet></Outlet>
    </div>
  );
};

export default Home;
