import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/_global.scss";
import { Homepage } from "./pages/Home/Homepage/Homepage.js";
import { NotFound } from "./pages/Home/NotFoundpage/NotFound.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
