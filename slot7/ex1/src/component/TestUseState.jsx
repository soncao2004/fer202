import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

function TestUseState() {
    const [username, setUsername] = useState('ntpnhi');
    const [age, setAge] = useState(20);
    
    // QUAN TRỌNG: Phải để chuỗi rỗng '' để lúc đầu không có gì hiện ra
    const [message, setMessage] = useState(''); 

    const handleSubmit = (e) => {
        e.preventDefault();
        // Chỉ khi hàm này chạy (nhấn Submit), message mới có nội dung
        setMessage(`Hello, ${username}. You are ${age} years old.`);
    };

    return (
        <Container className="mt-5">
            <h2 className="text-primary text-center"> Test useState Hook </h2>
            <Form className="mt-3 p-4 border rounded shadow-sm" onSubmit={handleSubmit}>
                <Row className="mb-3">
                    <Col md={2}><Form.Label>Username:</Form.Label></Col>
                    <Col md={10}>
                        <Form.Control
                            type="text"
                            value={username}
                            onChange={(e) => {
                                setUsername(e.target.value);
                                setMessage(''); // Ẩn dòng hello ngay khi người dùng bắt đầu gõ mới
                            }}
                        />
                    </Col>
                </Row>
                <Row className="mb-3">
                    <Col md={2}><Form.Label>Age:</Form.Label></Col>
                    <Col md={10}>
                        <Form.Control
                            type="number"
                            value={age}
                            onChange={(e) => {
                                setAge(e.target.value);
                                setMessage(''); // Ẩn dòng hello ngay khi người dùng bắt đầu gõ mới
                            }}
                        />
                    </Col>
                </Row>
                <div className="text-center">
                    <Button variant="primary" type="submit" className="px-4">
                        Submit
                    </Button>
                </div>

                {/* QUAN TRỌNG: Cấu trúc này giúp ẩn/hiện dựa trên biến message */}
                {message && (
                    <div className="mt-3 text-success text-center fw-bold border-top pt-3">
                        {message}
                    </div>
                )}
            </Form>
        </Container>
    );
}

export default TestUseState;