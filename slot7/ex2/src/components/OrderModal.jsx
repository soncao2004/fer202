import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const OrderModal = () => {
  const [isShowModal, setIsShowModal] = useState(false);

  const handleClose = () => setIsShowModal(false);
  const handleShow = () => setIsShowModal(true);
  
  const handleConfirm = () => {
    alert("🚀 Duyệt đơn hàng thành công!");
    handleClose();
  };

  return (
    <div className="text-center p-5 border rounded bg-light shadow-sm">
      <h5 className="mb-3 text-uppercase fw-bold text-dark">Quản lý đơn hàng kho</h5>
      <p className="text-muted">Nhấn nút bên dưới để bắt đầu quy trình xét duyệt.</p>
      
      <Button 
        variant="primary" 
        size="lg" 
        className="px-4 shadow"
        onClick={handleShow}
      >
        <span className="me-2">📦</span> Xử lý đơn hàng
      </Button>

      <Modal show={isShowModal} onHide={handleClose} centered backdrop="static">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title className="h5">Xác nhận đơn hàng</Modal.Title>
        </Modal.Header>
        <Modal.Body className="p-4">
          <div className="text-center mb-3">
            <span style={{ fontSize: '3rem' }}>⚠️</span>
          </div>
          <p className="text-center fw-medium mb-0">
            Bạn có chắc chắn muốn <span className="text-danger fw-bold">duyệt đơn hàng</span> này để chuyển sang bộ phận kho không?
          </p>
        </Modal.Body>
        <Modal.Footer className="border-0 pb-4 justify-content-center">
          <Button variant="outline-secondary" className="px-4" onClick={handleClose}>
            Hủy bỏ
          </Button>
          <Button variant="success" className="px-4 shadow-sm" onClick={handleConfirm}>
            Xác nhận ngay
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default OrderModal;