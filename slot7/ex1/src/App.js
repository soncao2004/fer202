import React, { useState } from 'react';
// Import các thành phần cần thiết từ thư viện
import { Container, Row, Col, Button, Form } from 'react-bootstrap';

function TestUseState() {
    // State để quản lý giá trị trong ô Input
    const [username, setUsername] = useState('traltb');
    const [age, setAge] = useState(18);

    // State để quản lý giá trị hiển thị ở nhãn kết quả sau khi Submit
    const [displayName, setDisplayName] = useState('traltb');
    const [displayAge, setDisplayAge] = useState(18);

    const handleSubmit = () => {
        setDisplayName(username);
        setDisplayAge(age);
    };

    return (
        <Container className="mt-5 shadow-sm p-4 mb-5 bg-white rounded" style={{ maxWidth: '600px' }}>
            <h2 className="text-center mb-4 text-primary">Test useState Hook</h2>
            
            {/* Dòng nhập Username */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} className="text-end fw-bold">Username:</Form.Label>
                <Col sm={9}>
                    <Form.Control 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />
                </Col>
            </Form.Group>

            {/* Dòng nhập Age */}
            <Form.Group as={Row} className="mb-3">
                <Form.Label column sm={3} className="text-end fw-bold">Age:</Form.Label>
                <Col sm={9}>
                    <Form.Control 
                        type="number" 
                        value={age} 
                        onChange={(e) => setAge(e.target.value)} 
                    />
                </Col>
            </Form.Group>

            {/* Dòng nút bấm */}
            <Row className="mb-4">
                <Col className="text-center">
                    <Button variant="primary" size="lg" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Col>
            </Row>

            {/* Dòng hiển thị kết quả */}
            <Row>
                <Col className="text-center border-top pt-3">
                    <h5 className="text-success">
                        Hello, <span className="text-dark">{displayName}</span>. 
                        You are <span className="text-dark">{displayAge}</span> years old.
                    </h5>
                </Col>
            </Row>
        </Container>
    );
}

export default TestUseState;