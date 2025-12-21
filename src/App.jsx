import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import BrandIntro from "./components/BrandIntro";
import ProductCategories from "./components/ProductCategories";
import BestProducts from "./components/BestProducts";

function App() {
  return (
    <Router>
      <main className="w-full overflow-x-hidden">
        {/* HERO */}
        <HeroSection />

        {/* BRAND INTRO */}
        <BrandIntro />

        {/* PRODUCT CATEGORIES */}  
        <ProductCategories/>

        {/* BEST PRODUCTS */}
        <BestProducts/>
      </main>
    </Router>
  );
}

export default App;
