import React, { useState } from 'react';

const Exercise3 = () => {
  // Quản lý form bằng một Object duy nhất
  const [form, setForm] = useState({ name: '', price: '', category: '' });
  // Biến lưu trữ dữ liệu để hiển thị sau khi nhấn nút Lưu
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    // Sử dụng spread operator để cập nhật đúng trường dữ liệu
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Lưu trạng thái hiện tại của form vào kết quả hiển thị
    setSubmittedData(form);
  };

  return (
    <div className="card border-0 shadow-lg p-4 text-white mx-auto" style={{ backgroundColor: '#1a1d23', maxWidth: '450px', borderRadius: '15px' }}>
      <h5 className="mb-4 text-center fw-bold text-danger">QUẢN LÝ SẢN PHẨM</h5>
      
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label small text-secondary fw-bold">Tên sản phẩm</label>
          <input 
            name="name" 
            className="form-control bg-dark text-white border-secondary py-2 shadow-none" 
            placeholder="Ví dụ: Laptop Dell XPS 15" 
            onChange={handleChange} 
            required 
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label small text-secondary fw-bold">Giá bán ($)</label>
          <input 
            name="price" 
            type="number" 
            className="form-control bg-dark text-white border-secondary py-2 shadow-none" 
            placeholder="Ví dụ: 1500" 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-4">
          <label className="form-label small text-secondary fw-bold">Danh mục sản phẩm</label>
          <input 
            name="category" 
            className="form-control bg-dark text-white border-secondary py-2 shadow-none" 
            placeholder="Ví dụ: Điện tử / Máy tính" 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn w-100 fw-bold py-2 border-0 shadow" style={{ backgroundColor: '#d92b4c', color: 'white' }}>
          Lưu thông tin
        </button>
      </form>

      {/* Hiển thị kết quả sau khi nhấn Submit */}
      {submittedData && (
        <div className="mt-4 p-3 bg-dark rounded-3 border-start border-danger border-5">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <small className="text-secondary fw-bold">DỮ LIỆU ĐÃ LƯU:</small>
            <span className="badge bg-success">Thành công</span>
          </div>
          <div className="text-info fw-bold fs-5 mb-1">{submittedData.name}</div>
          <div className="small text-light">
             <span className="text-secondary">Giá:</span> <span className="text-warning fw-bold">{submittedData.price} $</span> 
             <span className="mx-2 text-secondary">|</span> 
             <span className="text-secondary">Loại:</span> {submittedData.category}
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise3;