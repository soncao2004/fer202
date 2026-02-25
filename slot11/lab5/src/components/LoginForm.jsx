import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function LoginForm() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState('');
    const { login, error: authError } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalError('');

        // Validation dữ liệu
        if (!username.trim() || !password.trim()) {
            setLocalError("BẠN CHƯA NHẬP TÀI KHOẢN HOẶC MẬT KHẨU!");
            return;
        }

        login(username, password);
    };

    // Style cho dòng chữ đỏ cực mạnh
    const superRedStyle = {
        color: '#ff0000',           // Đỏ nguyên bản cực tươi
        fontWeight: '900',          // Độ đậm tối đa
        textTransform: 'uppercase', // In hoa toàn bộ
        fontSize: '14px',           // Kích thước vừa đủ nhìn
        letterSpacing: '0.5px',     // Khoảng cách chữ giúp dễ đọc khi in hoa
        border: '2px solid #ff0000', // Thêm viền đỏ cho khung thông báo
        backgroundColor: '#fff5f5'  // Nền hồng nhạt để nổi bật chữ đỏ
    };

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={6} lg={5}>
                    <Card className="shadow-lg border-0" style={{ borderRadius: '15px' }}>
                        <Card.Body className="p-5">
                            <div className="text-center mb-4">
                                <h2 className="fw-bold text-primary">ĐĂNG NHẬP</h2>
                                <p className="text-muted">Hệ thống quản lý Admin</p>
                            </div>

                            {/* Thông báo lỗi đỏ cực mạnh */}
                            {(localError || authError) && (
                                <Alert 
                                    variant="danger" 
                                    className="text-center shadow-sm" 
                                    style={superRedStyle}
                                >
                                    <i className="bi bi-exclamation-triangle-fill me-2"></i>
                                    {localError || authError}
                                </Alert>
                            )}

                            <Form onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập tài khoản admin..."
                                        value={username}
                                        onChange={(e) => {
                                            setUsername(e.target.value);
                                            if (localError) setLocalError('');
                                        }}
                                        className="py-2"
                                        style={{ border: localError ? '1px solid red' : '' }}
                                    />
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Nhập mật khẩu..."
                                        value={password}
                                        onChange={(e) => {
                                            setPassword(e.target.value);
                                            if (localError) setLocalError('');
                                        }}
                                        className="py-2"
                                        style={{ border: localError ? '1px solid red' : '' }}
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow-sm">
                                    ĐĂNG NHẬP
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginForm;