import Pages from './pages/Pages.jsx';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home.jsx'
import Food from './pages/Food.jsx'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
