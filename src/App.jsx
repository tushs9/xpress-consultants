import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

// Import pages...
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Destinations from "./pages/Destinations";
import Vacancies from "./pages/Vacancies";
import VisaProcess from "./pages/VisaProcess";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Apply from "./pages/Apply";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <div className="pt-20">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/vacancies" element={<Vacancies />} />
          <Route path="/visa-process" element={<VisaProcess />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/apply" element={<Apply />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}