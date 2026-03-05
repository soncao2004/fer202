import React, { useState } from 'react';
import LoginForm from '../components/LoginForm';
import { Modal, Button } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { user, login, error: authError } = useAuth();
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    // Hàm xử lý đăng nhập từ Form
    const handleLoginAction = async (username, password) => {
        const ok = await login(username, password); 
        if (ok) {
            setShowModal(true); 
        }
    };

    return (
        <div style={{ background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            {/* Truyền hàm xử lý vào LoginForm của cậu */}
            <LoginForm onLogin={handleLoginAction} /> 

            <Modal show={showModal} centered backdrop="static">
                <Modal.Header className="bg-success text-white justify-content-center">
                    <Modal.Title>ĐĂNG NHẬP THÀNH CÔNG</Modal.Title> 
                </Modal.Header>
                <Modal.Body className="text-center py-4">
                    <h5>Chào mừng Admin <strong>{user?.username}</strong> quay trở lại!</h5> 
                </Modal.Body>
                <Modal.Footer className="justify-content-center">
                    <Button variant="success" size="lg" onClick={() => navigate('/accounts')}>
                        VÀO HỆ THỐNG 
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default LoginPage;