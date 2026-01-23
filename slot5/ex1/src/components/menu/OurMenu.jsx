import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Modal } from "react-bootstrap";
import { pizzaData } from "../../data/pizzalist";

function OurMenu() {
  const [show, setShow] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (pizza) => {
    setSelectedPizza(pizza);
    setShow(true);
  };

  return (
    <Container className="my-5">
      <h2 className="text-center mb-5 fw-bold text-uppercase" style={{color: '#ffc107'}}>Pizza Palace Menu</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {pizzaData.map((pizza) => (
          <Col key={pizza.id}>
            <Card className="h-100 border-0 shadow-lg" style={{backgroundColor: '#262626', color: '#fff'}}>
              <div className="position-relative">
                {pizza.tag && <Badge bg="warning" text="dark" className="position-absolute m-2 top-0 start-0 fw-bold">{pizza.tag}</Badge>}
                <Card.Img variant="top" src={pizza.image} style={{ height: "250px", objectFit: "cover" }} />
              </div>
              <Card.Body className="d-flex flex-column text-center">
                <Card.Title className="fw-bold fs-4" style={{color: '#ffc107'}}>{pizza.name}</Card.Title>
                <Card.Text className="opacity-75 small flex-grow-1">{pizza.description}</Card.Text>
                <div className="mb-3">
                  <span className="h4 fw-bold" style={{color: '#ffc107'}}>${pizza.price}</span>
                  {pizza.oldPrice && <span className="text-decoration-line-through ms-2 opacity-50 small">${pizza.oldPrice}</span>}
                </div>
                {/* Sửa thành 2 nút: View Details và Buy */}
                <div className="d-flex gap-2">
                  <Button variant="outline-warning" className="w-50 rounded-0 fw-bold" onClick={() => handleShow(pizza)}>
                    VIEW DETAILS
                  </Button>
                  <Button variant="warning" className="w-50 rounded-0 fw-bold">
                    BUY
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Modal hiển thị thông tin chi tiết */}
      <Modal show={show} onHide={handleClose} centered size="lg">
        {selectedPizza && (
          <>
            <Modal.Header closeButton style={{backgroundColor: '#262626', color: '#ffc107', borderBottom: '1px solid #444'}}>
              <Modal.Title className="fw-bold">{selectedPizza.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body style={{backgroundColor: '#262626', color: '#fff'}}>
              <Row className="align-items-center">
                <Col md={6}>
                  <img src={selectedPizza.image} alt={selectedPizza.name} className="img-fluid rounded border border-warning" />
                </Col>
                <Col md={6}>
                  <h4 style={{color: '#ffc107'}}>${selectedPizza.price}</h4>
                  <p className="opacity-75">{selectedPizza.description}</p>
                  <p>Category: <Badge bg="info">Premium Pizza</Badge></p>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer style={{backgroundColor: '#262626', borderTop: '1px solid #444'}}>
              <Button variant="secondary" onClick={handleClose}>Close</Button>
              <Button variant="warning" className="fw-bold">Add to Cart</Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </Container>
  );
}

export default OurMenu;