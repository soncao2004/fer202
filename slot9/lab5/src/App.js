import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPizza from './components/NavBarPizza';
import Home from './components/Home';
import NewPage from './components/NewPage';
import DangKyForm from './components/DangKyForm'; 
import QuizPage from './components/QuizPage'; // Cần tạo mới file này

function App() {
  return (
    <Router>
      <NavBarPizza />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news" element={<NewPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/contact" element={<DangKyForm />} />
        <Route path="/register" element={<DangKyForm />} />
        {/* Trang About có thể dùng chung Home hoặc tạo component riêng */}
        <Route path="/about" element={<Home />} />
      </Routes>   
    </Router> 
  );
}

export default App;