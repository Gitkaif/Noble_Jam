import HeroSection from "@components/HeroSection";
import MergedBrandSection from "@components/MergedBrandSection";
import ProductCategories from "@components/ProductCategories";
import BestProducts from "@components/BestProducts";
import WhyChooseUs from "@components/WhyChooseUs";
import Testimonial from "@components/Testimonial";

const Home = () => {
  return (
    <>
      <section id="home">
        <HeroSection />
      </section>

      <MergedBrandSection />

      <section id="products">
        <ProductCategories />
        <BestProducts />
      </section>

      <section id="why-us">
        <WhyChooseUs />
      </section>

      <Testimonial />
    </>
  );
};

export default Home;
