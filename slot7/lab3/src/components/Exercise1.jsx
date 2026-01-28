import React, { useState } from 'react';

const Exercise1 = () => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="card border-0 shadow-lg text-white mx-auto" style={{ backgroundColor: '#1a1d23', maxWidth: '300px', borderRadius: '15px' }}>
      <div className="card-body p-4 text-center">
        <h6 className="text-secondary fw-bold mb-4">CHỌN SỐ LƯỢNG</h6>
        <div className="d-flex align-items-center justify-content-center gap-4">
          <button 
            className="btn btn-outline-secondary rounded-circle fw-bold" 
            style={{ width: '45px', height: '45px' }}
            onClick={() => setQuantity(Math.max(0, quantity - 1))}
          > - </button>
          <span className="fs-1 fw-bold" style={{ minWidth: '40px' }}>{quantity}</span>
          <button 
            className="btn btn-danger rounded-circle border-0 shadow" 
            style={{ width: '45px', height: '45px', backgroundColor: '#d92b4c' }}
            onClick={() => setQuantity(quantity + 1)}
          > + </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise1;