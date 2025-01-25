import AboutUs from "../ui/AboutUs";
import Blog from "../ui/Blog";
import Category from "../ui/Category";
import Hero from "../ui/Hero";
import Selling from "../ui/Selling";
import Testimonial from "../ui/Testimonial";

function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Category />
      <Selling />
      <Testimonial />
      <Blog />
    </>
  );
}

export default Home;
