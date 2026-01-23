import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function PizzaCard({ pizza }) {
  const navigate = useNavigate();
  return (
    <Card className="border-0 shadow-sm h-100">
      <div className="position-relative">
        {pizza.tag && <Badge bg="danger" className="position-absolute m-2">{pizza.tag}</Badge>}
        <Card.Img variant="top" src={pizza.image} style={{ height: '220px', objectFit: 'cover' }} />
      </div>
      <Card.Body className="text-center d-flex flex-column">
        <Card.Title className="fw-bold">{pizza.name}</Card.Title>
        <Card.Text className="text-muted small flex-grow-1">{pizza.description}</Card.Text>
        <div className="mb-3">
          <span className="h5 text-primary fw-bold">${pizza.price}</span>
          {pizza.oldPrice && <small className="text-decoration-line-through ms-2">${pizza.oldPrice}</small>}
        </div>
        <Button variant="dark" onClick={() => navigate(`/pizza/${pizza.id}`)}>View Details</Button>
      </Card.Body>
    </Card>
  );
}
export default PizzaCard;