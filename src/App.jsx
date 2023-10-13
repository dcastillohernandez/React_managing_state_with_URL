import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
