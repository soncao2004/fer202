import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Logic kiểm tra đăng nhập đơn giản
    if (username === 'admin' && password === '123') {
      navigate('/manager'); // Chuyển sang trang quản lý
    } else {
      alert('Sai tài khoản hoặc mật khẩu (Thử: admin/123)');
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full max-w-5xl h-[650px] bg-[#f8f8f8] shadow-2xl overflow-hidden rounded-sm mx-auto my-10 font-sans">
      {/* Cánh trái: Branding (Giữ nguyên như code cũ) */}
      <div className="md:w-1/2 bg-[#111] text-white p-12 flex flex-col justify-between">
        <h1 className="text-5xl md:text-6xl leading-tight font-serif italic">Welcome back</h1>
      </div>

      {/* Cánh phải: Form Login */}
      <div className="md:w-1/2 p-12 flex flex-col justify-center bg-white">
        <h2 className="text-3xl font-serif mb-12">Sign In</h2>
        
        <form onSubmit={handleLogin} className="space-y-10">
          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Username</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
              placeholder="admin"
            />
          </div>

          <div>
            <label className="block text-[10px] uppercase tracking-widest text-gray-400 mb-1">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b border-gray-200 py-2 focus:outline-none focus:border-black transition-colors bg-transparent"
              placeholder="123"
            />
          </div>

          <div className="flex items-center gap-8 pt-4">
            <button type="submit" className="group flex items-center gap-2 text-xs uppercase tracking-widest font-bold hover:text-gray-500 transition">
              Login <span>→</span>
            </button>
            <button type="button" className="text-xs uppercase tracking-widest text-gray-300 hover:text-red-400 transition">
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;