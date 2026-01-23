import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { pizzaData } from "../../data/pizzalist";
import { Container, Row, Col, Button, Badge } from "react-bootstrap";

function PizzaDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const pizza = pizzaData.find((p) => p.id === parseInt(id));

  if (!pizza) return <Container className="text-center my-5"><h2>Sản phẩm không tồn tại!</h2></Container>;

  return (
    <div style={{ backgroundColor: '#1a1a1a', color: '#fff', minHeight: '80vh', padding: '60px 0' }}>
      <Container>
        <Row className="align-items-center shadow-lg p-4 rounded" style={{ backgroundColor: '#262626' }}>
          <Col md={6} className="text-center mb-4 mb-md-0">
            <img src={pizza.image} alt={pizza.name} className="img-fluid rounded-3 border border-warning" style={{ maxHeight: '450px', objectFit: 'cover' }} />
          </Col>
          <Col md={6}>
            {pizza.tag && <Badge bg="warning" text="dark" className="mb-3 px-3 py-2 fw-bold">{pizza.tag}</Badge>}
            <h1 className="fw-bold mb-3" style={{ color: '#ffc107' }}>{pizza.name}</h1>
            <p className="fs-5 opacity-75 mb-4">{pizza.description}</p>
            <div className="mb-4">
              <span className="h1 fw-bold" style={{ color: '#ffc107' }}>${pizza.price}</span>
              {pizza.oldPrice && <span className="text-decoration-line-through ms-3 opacity-50 h3">${pizza.oldPrice}</span>}
            </div>
            <div className="d-flex gap-3">
              <Button variant="warning" size="lg" className="fw-bold px-4 rounded-0">ORDER NOW</Button>
              <Button variant="outline-light" size="lg" className="rounded-0" onClick={() => navigate("/")}>BACK TO MENU</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PizzaDetail;