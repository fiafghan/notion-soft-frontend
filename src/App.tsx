import {Routes, Route} from "react-router-dom";
import Services from "./services";
import AboutUs from "./about-us";
import Home from "./home";
import Blog from "./blog";

export default function App() {
  
  return (
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/blog" element={<Blog />} />
          </Routes>
          );
}
