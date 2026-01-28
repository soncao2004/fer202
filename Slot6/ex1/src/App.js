import React from 'react';
import LoginForm from './component/LoginForm';
import ManageUsers from './component/ManageUsers';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm'; // Đảm bảo file tên là LoginForm.js
import ManageUsers from './ManageUsers'; // Đảm bảo file tên là ManageUsers.js

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/manager" element={<ManageUsers />} />
      </Routes>
    </Router>
  );
}

export default App;