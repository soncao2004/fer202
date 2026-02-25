import React from 'react';
import { newLists } from './newsList'; 
import NewCard from './NewCard';
import { Container, Row, Col } from 'react-bootstrap';  

function NewPage() {
    return (
        <Container className="py-5">
            <h2 className="text-center mb-5 fw-bold text-uppercase" style={{color: '#d9534f'}}>Tin Tức Ẩm Thực</h2>
            <Row className="g-4"> {/* g-4 tạo khoảng cách đều giữa các cột */}
                {newLists.map((newItem) => (
                    <Col key={newItem.id} xs={12} sm={6} lg={3}>
                        <NewCard newItem={newItem} />
                    </Col>  
                ))}
            </Row>
        </Container>
    );
}
export default NewPage;