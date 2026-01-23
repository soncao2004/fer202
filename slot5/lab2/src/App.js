import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Banner from "./components/layout/Banner";
import OurMenu from "./components/menu/OurMenu"; 
import BookTable from "./components/book/BookTable";
import Footer from "./components/layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div style={{ backgroundColor: '#121212', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<><Banner /><OurMenu /></>} />
          <Route path="/about" element={<div className="py-5 text-center text-white"><h2>About Pizza Palace</h2></div>} />
          <Route path="/contact" element={<BookTable />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;