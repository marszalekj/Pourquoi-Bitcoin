import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hier from "./pages/Hier";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Aujourdhui from "./pages/Aujourdhui";
import Buy from "./pages/Buy";
import Demain from "./pages/Demain";
import Sources from "./pages/Sources";


import Navbar from "./components/Navbar";


const App = () => {
  
  return (
    <>
      <div className="flex flex-col h-full ">
        <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/histoiredubitcoin" element={<Hier />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>

        </BrowserRouter>

      </div>

    </>
  );
};

export default App;
