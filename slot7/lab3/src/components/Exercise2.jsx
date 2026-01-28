import React, { useState } from 'react';

const Exercise2 = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleConfirm = () => {
    alert("Duyệt đơn hàng thành công!");
    setIsShowModal(false);
  };

  return (
    <div className="p-5 rounded-4 shadow-lg text-white text-center border border-secondary" style={{ backgroundColor: '#1a1d23' }}>
      <i className="bi bi-cart-check fs-1 text-danger mb-3 d-block"></i>
      <h4 className="fw-bold mb-4">Hệ thống Admin E-Commerce</h4>
      <button className="btn btn-lg fw-bold shadow px-5" style={{ backgroundColor: '#d92b4c', color: 'white' }} onClick={() => setIsShowModal(true)}>
        Xử lý đơn hàng
      </button>

      {isShowModal && (
        <div style={overlayStyle}>
          <div className="card border-0 shadow-lg" style={{ width: '420px', backgroundColor: '#2d333b', color: 'white', borderRadius: '15px' }}>
            <div className="card-body p-4 text-center">
              <h5 className="fw-bold mb-3 text-danger">Xác nhận duyệt đơn</h5>
              <p className="mb-4 text-secondary">Bạn có chắc chắn muốn duyệt đơn hàng này để chuyển sang bộ phận kho không?</p>
              <div className="d-flex justify-content-center gap-3">
                <button className="btn btn-outline-light px-4" onClick={() => setIsShowModal(false)}>Hủy bỏ</button>
                <button className="btn px-4 fw-bold shadow" style={{ backgroundColor: '#d92b4c', color: 'white' }} onClick={handleConfirm}>Xác nhận ngay</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const overlayStyle = { position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000 };

export default Exercise2;