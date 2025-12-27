import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <Router>
      <Navbar />

      <main className="w-full overflow-x-hidden pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />

          {/* Fallback */}
          <Route path="*" element={<ErrorPage/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
