import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { newLists } from './newsList';
import { Container, Row, Col, Button, Card, Badge } from 'react-bootstrap';

function NewsDetail() {
    const { id } = useParams();
    const item = newLists.find(n => n.id === parseInt(id));

    if (!item) return <Container className="py-5"><h3>Không tìm thấy nội dung!</h3></Container>;

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={9}>
                    <Card className="border-0 shadow-lg transition-card">
                        <div className="overflow-hidden">
                             <Card.Img variant="top" src={item.images} className="hover-zoom" />
                        </div>
                        <Card.Body className="p-5 text-start">
                            <Badge bg="danger" className="mb-2">Tin nổi bật</Badge>
                            <h1 className="fw-bold text-dark mb-3">{item.title}</h1>
                            
                            <div className="d-flex text-muted mb-4 small">
                                <span className="me-3">📅 Ngày đăng: {item.date || '20/03/2024'}</span>
                                <span>✍️ Tác giả: {item.author || 'Admin'}</span>
                            </div>

                            <p className="lead fw-semibold mb-4" style={{ color: '#555' }}>
                                {item.description}
                            </p>

                            <div className="content-body" style={{ lineHeight: '1.9', fontSize: '1.1rem' }}>
                                <p>{item.content || 'Nội dung chi tiết của bài viết đang được cập nhật...'}</p>
                                <p>Cảm ơn bạn đã quan tâm đến tin tức ẩm thực của chúng tôi. Hãy thường xuyên theo dõi trang để cập nhật những xu hướng Pizza mới nhất trên toàn thế giới.</p>
                            </div>

                            <hr className="my-5" />
                            
                            <Link to="/news">
                                <Button variant="outline-danger" className="px-4 fw-bold">
                                    ← Quay lại danh sách tin
                                </Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default NewsDetail;