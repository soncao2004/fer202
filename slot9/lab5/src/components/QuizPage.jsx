import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const quizData = [
    { id: 1, question: "React là gì?", options: ["Thư viện UI", "Hệ điều hành", "Ngôn ngữ lập trình"], answer: "Thư viện UI" },
    { id: 2, question: "Hook nào dùng để quản lý state?", options: ["useEffect", "useState", "useContext"], answer: "useState" }
];

function QuizPage() {
    return (
        <Container className="mt-4">
            <h2 className="mb-4 text-center">Online Quiz Application</h2>
            <Row>
                {quizData.map((item) => (
                    <Col key={item.id} md={12} className="mb-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>{item.id}. {item.question}</Card.Title>
                                {item.options.map((opt, index) => (
                                    <div key={index} className="form-check">
                                        <input className="form-check-input" type="radio" name={`quiz-${item.id}`} id={`opt-${item.id}-${index}`} />
                                        <label className="form-check-label" htmlFor={`opt-${item.id}-${index}`}>
                                            {opt}
                                        </label>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button variant="primary" className="mt-3">Nộp bài</Button>
        </Container>
    );
}

export default QuizPage;