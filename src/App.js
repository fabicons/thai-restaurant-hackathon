import Pages from "./pages/Pages.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Food from "./pages/Food.jsx";
import NavBar from "./components/NavBar.jsx";
import Footer from './components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
