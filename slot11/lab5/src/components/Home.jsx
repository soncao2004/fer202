import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import SlideBar from './SlideBar';

function Home() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault();
        if (form.checkValidity() === false) {
            event.stopPropagation();
        }
        setValidated(true);
    };

    return (
        <>
            <SlideBar /> {/* Đảm bảo SlideBar.jsx có export default */}
            <Container className="my-5">
                <Row className="justify-content-center text-start mb-5">
                    <Col md={10}>
                        <Card className="shadow-lg p-4 bg-light border-0 rounded-4 transition-card">
                            <Card.Body>
                                <Card.Title className="text-danger fw-bold fs-2 mb-4">This is Home Page</Card.Title>
                                <hr />
                                <h4 className="text-primary mb-3">1. Thông tin tác giả</h4>
                                <ul className="list-unstyled ms-3">
                                    <li>* <strong>Mã SV:</strong> DE180586</li>
                                    <li>* <strong>Họ tên:</strong> Huỳnh Vũ Tường Vy</li>
                                    <li>* <strong>GitHub:</strong> <a href="https://github.com/soncao2004/fer202">Link Github</a></li>
                                </ul>
                                <hr />
                                <h4 className="text-primary mb-3">2. Cấu trúc project</h4>
                                <p className="ms-3 text-secondary">Project xây dựng dựa trên React Router và kỹ thuật Lazy Loading[cite: 3, 27].</p>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Phần Contact cũ chuyển xuống cuối Home */}
                <Row className="justify-content-center text-start">
                    <Col md={10}>
                        <h2 className="text-danger fw-bold mb-4">Contact Us</h2>
                        <Card className="shadow-sm p-4 border-0 rounded-4">
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Row className="mb-3">
                                    <Form.Group as={Col} md="4">
                                        <Form.Label className="fw-bold">First name</Form.Label>
                                        <Form.Control required type="text" placeholder="Mark" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label className="fw-bold">Last name</Form.Label>
                                        <Form.Control required type="text" placeholder="Otto" />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label className="fw-bold">Username</Form.Label>
                                        <Form.Control required type="text" placeholder="Username" />
                                    </Form.Group>
                                </Row>
                                <Button type="submit" variant="primary">Submit form</Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Home;