import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import {
  Homepage,
  ContactUs,
  Pricing,
  Product,
  LoginSignup,
} from "./Pages/page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
