import {Routes, Route} from "react-router-dom";
import Services from "./services";
import Home from "./home";

export default function App() {
  
  return (
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<Services />} />
          </Routes>
          );
}
