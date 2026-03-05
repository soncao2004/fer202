import React, { useEffect, useState } from 'react';
import { Table, Button, Container, Form, Row, Col, Card, Badge, Modal, Toast, ToastContainer } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const AccountListPage = () => {
    const [accounts, setAccounts] = useState([]);
    const [search, setSearch] = useState('');
    const [confirmUser, setConfirmUser] = useState(null);
    const [toast, setToast] = useState({ show: false, msg: '', bg: 'success' });
    const { user: currentUser, logout } = useAuth();
    const navigate = useNavigate();

    useEffect(() => { loadData(); }, []);

    const loadData = async () => {
        try {
            const res = await axios.get('http://localhost:3001/accounts');
            setAccounts(res.data);
        } catch (error) {
            console.error("Lỗi khi tải dữ liệu:", error);
        }
    };

    const handleLogout = () => {
        logout(); // Xóa sạch user trong Context và LocalStorage
        navigate('/login'); // Chuyển về trang đăng nhập sạch sẽ
    };

    const handleAction = async () => {
        if (confirmUser.id === currentUser.id) {
            setToast({ show: true, msg: "KHÔNG THỂ TỰ KHÓA CHÍNH MÌNH!", bg: 'danger' });
            setConfirmUser(null);
            return;
        }

        const newStatus = confirmUser.status === 'active' ? 'locked' : 'active';
        
        try {
            await axios.patch(`http://localhost:3001/accounts/${confirmUser.id}`, { status: newStatus });
            setToast({ 
                show: true, 
                msg: `ĐÃ ${newStatus === 'locked' ? 'KHÓA' : 'MỞ KHÓA'} THÀNH CÔNG!`, 
                bg: 'success' 
            });
            setConfirmUser(null);
            loadData(); // Cập nhật lại danh sách tại chỗ
        } catch (error) {
            setToast({ show: true, msg: "LỖI KHI CẬP NHẬT TRẠNG THÁI!", bg: 'danger' });
        }
    };

    const filtered = accounts.filter(a => 
        a.username.toLowerCase().includes(search.toLowerCase()) || 
        a.email.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Container className="py-5">
            <Card className="shadow-lg border-0">
                <Card.Header className="bg-primary text-white p-3 d-flex justify-content-between align-items-center">
                    <h3 className="mb-0">QUẢN LÝ TÀI KHOẢN</h3>
                    <Button variant="outline-light" onClick={handleLogout}>Đăng xuất</Button>
                </Card.Header>
                <Card.Body className="p-4">
                    <Form.Control 
                        className="mb-4 rounded-pill shadow-sm" 
                        placeholder="🔍 Tìm kiếm tên hoặc email..." 
                        onChange={e => setSearch(e.target.value)}
                    />
                    <Table hover responsive className="align-middle border">
                        <thead className="table-light">
                            <tr>
                                <th>ẢNH</th>
                                <th>USERNAME</th>
                                <th>EMAIL</th>
                                <th>QUYỀN</th>
                                <th>TRẠNG THÁI</th>
                                <th className="text-center">THAO TÁC</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filtered.map(acc => (
                                <tr key={acc.id}>
                                    <td>
                                        <img 
                                            src={acc.avatar} 
                                            width="45" 
                                            height="45" 
                                            className="rounded-circle border" 
                                            alt="avt" 
                                            onError={(e) => e.target.src = "/image/admin.png"}
                                        />
                                    </td>
                                    <td className="fw-bold">{acc.username}</td>
                                    <td>{acc.email}</td>
                                    <td>
                                        <Badge bg={acc.role === 'admin' ? 'info' : 'secondary'}>
                                            {acc.role.toUpperCase()}
                                        </Badge>
                                    </td>
                                    <td>
                                        <Badge bg={acc.status === 'active' ? 'success' : 'danger'}>
                                            {acc.status.toUpperCase()}
                                        </Badge>
                                    </td>
                                    <td className="text-center">
                                        <Button 
                                            variant="outline-primary" 
                                            size="sm" 
                                            className="me-2"
                                            onClick={() => navigate(`/accounts/${acc.id}`)}
                                        >
                                            CHI TIẾT
                                        </Button>
                                        <Button 
                                            variant={acc.status === 'active' ? "outline-danger" : "outline-success"} 
                                            size="sm" 
                                            onClick={() => setConfirmUser(acc)}
                                        >
                                            {acc.status === 'active' ? "KHÓA" : "MỞ"}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Card.Body>
            </Card>

            {/* Modal Xác nhận Khóa/Mở khóa */}
            <Modal show={!!confirmUser} onHide={() => setConfirmUser(null)} centered>
                <Modal.Body className="text-center p-4">
                    <h5 className="fw-bold">XÁC NHẬN THAO TÁC</h5>
                    <p className="mt-3">
                        Bạn thực sự muốn <b>{confirmUser?.status === 'active' ? 'KHÓA' : 'MỞ KHÓA'}</b> tài khoản <b>{confirmUser?.username}</b>?
                    </p>
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        <Button variant="secondary" onClick={() => setConfirmUser(null)}>HỦY BỎ</Button>
                        <Button variant="primary" onClick={handleAction}>ĐỒNG Ý</Button>
                    </div>
                </Modal.Body>
            </Modal>

            {/* Toast Thông báo */}
            <ToastContainer position="top-end" className="p-3">
                <Toast 
                    show={toast.show} 
                    bg={toast.bg} 
                    onClose={() => setToast({ ...toast, show: false })} 
                    delay={3000} 
                    autohide
                >
                    <Toast.Body className="text-white fw-bold text-center">
                        {toast.msg}
                    </Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
    );
};

export default AccountListPage;