import React from 'react';
import { Card, Badge, Button } from 'react-bootstrap';

function MyPizza({ pizza, onViewDetails }) {
    return (
        <Card className="h-100 shadow-sm border-0 rounded-4 overflow-hidden">
            <Card.Img variant="top" src={pizza.imageSrc} style={{ height: '220px', objectFit: 'cover' }} />
            <Card.Body className="d-flex flex-column p-4">
                <Card.Title className="fw-bold fs-5 mb-1">{pizza.name}</Card.Title>
                <div className="text-muted small mb-2">ID: {pizza.id}</div>
                
                <Card.Text className="text-secondary flex-grow-1" style={{ fontSize: '0.9rem' }}>
                    {pizza.description}
                </Card.Text>
                
                <div className="mt-3">
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <span className="fs-5 fw-bold text-danger">{pizza.newPrice}</span>
                        <Badge bg="warning" text="dark" className="rounded-pill">{pizza.tag}</Badge>
                    </div>
                    
                    <Button 
                        style={{
                            backgroundColor: '#FFE0B2', 
                            color: '#BF360C',           
                            borderColor: '#FFE0B2',     
                        }}
                        className="w-100 rounded-pill fw-bold"
                        onClick={() => onViewDetails(pizza)}
                    >
                        View Details
                    </Button>
                </div>
            </Card.Body>
        </Card>
    );
}

export default MyPizza;