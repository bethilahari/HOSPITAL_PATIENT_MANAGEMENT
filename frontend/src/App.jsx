import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./Pages/Home";
import Register from "./Pages/Register";
import ViewPatients from "./Pages/ViewPatients";
import UpdatePatient from "./Pages/UpdatePatient";

import "./App.css";
import "./Style.css";

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patients" element={<ViewPatients />} />
            <Route path="/update/:id" element={<UpdatePatient />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;