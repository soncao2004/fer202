import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import QuantityPicker from './components/QuantityPicker';
import OrderModal from './components/OrderModal';

function App() {
  return (
    <Router>
      <div className="min-vh-100 bg-light">
        {/* Navbar hiện đại */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow mb-5">
          <div className="container">
            <span className="navbar-brand fw-bold text-uppercase border-end pe-3">React Lab</span>
            <div className="navbar-nav ms-3">
              <NavLink 
                className={({isActive}) => `nav-link px-3 ${isActive ? 'active fw-bold text-info' : ''}`} 
                to="/"
              >
                Bài 1: Quantity Picker
              </NavLink>
              <NavLink 
                className={({isActive}) => `nav-link px-3 ${isActive ? 'active fw-bold text-info' : ''}`} 
                to="/order"
              >
                Bài 2: Order Modal
              </NavLink>
            </div>
          </div>
        </nav>

        {/* Nội dung chính */}
        <div className="container mt-5">
          <div className="row justify-content-center">
            <div className="col-md-8 col-lg-5">
              <div className="card border-0 shadow-lg rounded-4 overflow-hidden">
                <div className="card-header bg-white py-3 border-bottom-0">
                  <h5 className="text-center mb-0 text-secondary fw-bold">KẾT QUẢ THỰC HÀNH</h5>
                </div>
                <div className="card-body p-5 bg-white">
                  <Routes>
                    <Route path="/" element={<QuantityPicker />} />
                    <Route path="/order" element={<OrderModal />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;