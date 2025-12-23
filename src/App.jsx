import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./components/HeroSection";
import BrandIntroNoble from "./components/BrandIntroNoble";
import BrandIntroMayville from "./components/BrandIntroMayville";
import ProductCategories from "./components/ProductCategories";
import BestProducts from "./components/BestProducts";

function App() {
  return (
    <Router>
      <main className="w-full overflow-x-hidden">
        {/* HERO */}
        <HeroSection />

        {/* BRAND INTRO */}
        <BrandIntroNoble />
        <BrandIntroMayville />

        {/* PRODUCT CATEGORIES */}  
        <ProductCategories/>

        {/* BEST PRODUCTS */}
        <BestProducts/>
      </main>
    </Router>
  );
}

export default App;
