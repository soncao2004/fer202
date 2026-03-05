import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

const AccountDetailPage = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:3001/accounts/${id}`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
    }, [id]);

    if (!user) return <div className="text-center mt-5">Loading...</div>;

    return (
        <Container className="mt-5">
            <Card className="shadow">
                <Card.Header className="bg-primary text-white">
                    <h3>Thông tin chi tiết: {user.username}</h3>
                </Card.Header>
                <Card.Body>
                    <Row>
                        <Col md={4} className="text-center">
                            <img 
                                src={`/image/${user.username}.png`} 
                                alt="avatar" 
                                style={{ width: '200px' }} 
                                className="img-thumbnail rounded-circle"
                                onError={(e) => e.target.src = "/image/admin.png"}
                            />
                        </Col>
                        <Col md={8}>
                            <p><strong>ID:</strong> {user.id}</p>
                            <p><strong>Email:</strong> {user.email}</p>
                            <p><strong>Quyền hạn:</strong> {user.role}</p>
                            <p><strong>Trạng thái:</strong> {user.status}</p>
                        </Col>
                    </Row>
                </Card.Body>
                <Card.Footer>
                    <Button variant="secondary" onClick={() => navigate('/accounts')}>Quay lại danh sách</Button>
                </Card.Footer>
            </Card>
        </Container>
    );
};

export default AccountDetailPage;