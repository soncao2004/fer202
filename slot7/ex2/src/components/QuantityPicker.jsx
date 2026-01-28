import React, { useState } from 'react';

const QuantityPicker = () => {
  const [quantity, setQuantity] = useState(1);

  const handleUpdate = (val) => {
    // Đảm bảo số lượng không nhỏ hơn 0
    setQuantity(Math.max(0, val));
  };

  return (
    <div className="card border-0 shadow-sm p-4" style={{ maxWidth: '300px' }}>
      <label className="form-label fw-bold mb-3 text-secondary">Chọn số lượng sản phẩm</label>
      <div className="input-group mb-3">
        <button 
          className="btn btn-primary px-3" 
          type="button" 
          onClick={() => handleUpdate(quantity - 1)}
          disabled={quantity <= 0}
        >
          <i className="bi bi-dash-lg">-</i>
        </button>
        
        <input 
          type="number" 
          className="form-control text-center fw-bold border-primary"
          value={quantity} 
          onChange={(e) => handleUpdate(parseInt(e.target.value) || 0)}
        />
        
        <button 
          className="btn btn-primary px-3" 
          type="button" 
          onClick={() => handleUpdate(quantity + 1)}
        >
          <i className="bi bi-plus-lg">+</i>
        </button>
      </div>
      <small className="text-muted">Tổng cộng: <span className="text-primary fw-bold">{quantity}</span> đơn vị</small>
    </div>
  );
};

export default QuantityPicker;