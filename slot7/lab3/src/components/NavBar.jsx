import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // Hàm này tự động thêm màu đỏ và gạch chân khi bạn nhấn vào đúng bài tập đó
  const linkClass = ({ isActive }) => 
    `nav-link px-3 fw-bold ${isActive ? "text-danger border-bottom border-danger border-3" : "text-secondary"}`;

  return (
    <nav className="navbar navbar-expand navbar-dark shadow-lg mb-4" style={{ backgroundColor: '#1a1d23' }}>
      <div className="container-fluid">
        <span className="navbar-brand fw-bold text-danger">LAB 3 - REACT HOOKS</span>
        <div className="navbar-nav gap-2">
          {/* Chú ý: Đường dẫn to="/ex1" phải khớp với path trong App.js */}
          <NavLink className={linkClass} to="/ex1">Exercise 1</NavLink>
          <NavLink className={linkClass} to="/ex2">Exercise 2</NavLink>
          <NavLink className={linkClass} to="/ex3">Exercise 3</NavLink>
          <NavLink className={linkClass} to="/ex4">Exercise 4</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;