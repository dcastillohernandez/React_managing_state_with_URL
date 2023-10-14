import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";
import ProductItem from "./ProductItem";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="product" element={<ProductItem />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
