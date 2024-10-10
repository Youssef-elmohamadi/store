import "./App.css";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import ProductsList from "./components/ProductsList";
import { Route, Routes, useNavigate } from "react-router-dom";
import About from "./components/About";
import ProductDetails from "./components/ProductDetails";

function App() {
  const navigate = useNavigate();
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Slider /> <ProductsList />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Navbar /> <About />
            </>
          }
        />
        <Route path="/products/details/:id" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
