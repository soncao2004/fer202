import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

const quizData = [
    { id: 1, question: "React là gì?", options: ["Thư viện UI", "Hệ điều hành", "Ngôn ngữ lập trình"], answer: "Thư viện UI" },
    { id: 2, question: "Hook nào dùng để quản lý state?", options: ["useEffect", "useState", "useContext"], answer: "useState" },
    { id: 3, question: "Component trong React là gì?", options: ["Một hàm hoặc lớp", "Một tệp tin HTML", "Một biến số"], answer: "Một hàm hoặc lớp" },
    { id: 4, question: "Lệnh nào dùng để tạo project React mới?", options: ["npm start", "npx create-react-app", "npm install"], answer: "npx create-react-app" }
];

function QuizPage() {
    // Lưu trữ các đáp án người dùng chọn (ví dụ: {1: "Thư viện UI", 2: "useState"})
    const [userAnswers, setUserAnswers] = useState({});
    // Trạng thái hiển thị kết quả
    const [score, setScore] = useState(null);
    const [submitted, setSubmitted] = useState(false);

    // Hàm xử lý khi người dùng chọn đáp án
    const handleOptionChange = (questionId, selectedOption) => {
        setUserAnswers({
            ...userAnswers,
            [questionId]: selectedOption
        });
    };

    // Hàm tính điểm khi nộp bài
    const handleSubmit = () => {
        let correctCount = 0;
        quizData.forEach((item) => {
            if (userAnswers[item.id] === item.answer) {
                correctCount++;
            }
        });
        setScore(correctCount);
        setSubmitted(true);
        window.scrollTo(0, 0); // Cuộn lên đầu trang để xem kết quả
    };

    return (
        <Container className="py-5">
            <h2 className="mb-5 text-center fw-bold text-primary">✍️ Online Quiz Challenge</h2>

            {/* Hiển thị kết quả sau khi nộp bài */}
            {submitted && (
                <Alert variant={score === quizData.length ? "success" : "info"} className="text-center shadow-sm mb-4">
                    <Alert.Heading className="fw-bold">Kết Quả Bài Làm</Alert.Heading>
                    <p className="fs-4 mb-0">
                        Bạn đã trả lời đúng <strong>{score}</strong> / <strong>{quizData.length}</strong> câu hỏi.
                    </p>
                </Alert>
            )}

            <Row className="justify-content-center">
                <Col md={8}>
                    {quizData.map((item) => (
                        <Card key={item.id} className="mb-4 shadow-sm border-0 transition-card">
                            <Card.Body>
                                <Card.Title className="fw-bold mb-3">
                                    Câu {item.id}: {item.question}
                                </Card.Title>
                                <hr />
                                {item.options.map((opt, index) => (
                                    <div key={index} className={`p-2 rounded mb-2 ${userAnswers[item.id] === opt ? 'bg-light border' : ''}`}>
                                        <div className="form-check">
                                            <input 
                                                className="form-check-input" 
                                                type="radio" 
                                                name={`quiz-${item.id}`} 
                                                id={`opt-${item.id}-${index}`}
                                                onChange={() => handleOptionChange(item.id, opt)}
                                                checked={userAnswers[item.id] === opt}
                                                disabled={submitted} // Khóa không cho chọn lại sau khi nộp
                                            />
                                            <label className="form-check-label w-100" htmlFor={`opt-${item.id}-${index}`}>
                                                {opt}
                                            </label>
                                        </div>
                                    </div>
                                ))}
                            </Card.Body>
                        </Card>
                    ))}
                    
                    <div className="text-center mt-4">
                        {!submitted ? (
                            <Button 
                                variant="danger" 
                                size="lg" 
                                className="px-5 fw-bold shadow" 
                                onClick={handleSubmit}
                                disabled={Object.keys(userAnswers).length === 0}
                            >
                                Nộp bài ngay
                            </Button>
                        ) : (
                            <Button 
                                variant="outline-primary" 
                                onClick={() => window.location.reload()}
                            >
                                Làm lại bài thi
                            </Button>
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default QuizPage;