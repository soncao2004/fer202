import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NewCard({ newItem }) {
    return (
        <Card className="news-card h-100 shadow-sm">
            <div className="overflow-hidden">
                <Card.Img 
                    variant="top" 
                    src={newItem.images} 
                    className="hover-zoom" 
                    style={{ height: '200px', objectFit: 'cover' }} 
                />
            </div>
            <Card.Body className="d-flex flex-column">
                <Card.Title className="fw-bold fs-5">{newItem.title}</Card.Title>
                <Card.Text className="text-muted small">
                    {newItem.description.substring(0, 100)}...
                </Card.Text>
                <Button 
                    as={Link} 
                    to={`/news/${newItem.id}`} 
                    variant="outline-danger" 
                    className="mt-auto w-100 fw-bold"
                >
                    Xem chi tiết
                </Button>
            </Card.Body>
        </Card>
    );
}

export default NewCard;