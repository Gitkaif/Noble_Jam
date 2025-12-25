// In your App.js
import { ImageOff } from 'lucide-react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from '@components/HeroSection';
import BestProducts from '@components/BestProducts';
import WhyChooseUs from '@components/WhyChooseUs';
import ProductCategories from '@components/ProductCategories';
// import BrandIntroNoble from '@components/BrandIntroNoble';
// import BrandIntroMayville from '@components/BrandIntroMayville';
import MergedBrandSection from '@components/MergedBrandSection';

function App() {
  return (
    <Router>
      <Navbar />
      <main className="w-full overflow-x-hidden">
        <section id="home">
          <HeroSection />
        </section>
        
        <MergedBrandSection />
        {/* <section id="noble">
          <BrandIntroNoble />
        </section>

        <section id="mayville">
          <BrandIntroMayville />
        </section> */}

        <section id="products">
          <ProductCategories />
          <BestProducts />
        </section>

        <section id="why-us">
          <WhyChooseUs />
        </section>

        {/* Add other sections with their respective IDs */}
      </main>
    </Router>
  );
}
export default App;