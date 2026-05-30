import React, { useState } from 'react'; 
import { Container, Row, Col } from 'react-bootstrap';
import MyPizza from './MyPizza';
import MyModal from './MyModal'; 
import { pizzas } from '../data/pizzaData';

function PizzaList() {
    const [show, setShow] = useState(false);
    const [selectedPizza, setSelectedPizza] = useState(null);

    const handleViewDetails = (pizza) => {
        setSelectedPizza(pizza); 
        setShow(true);           
    };

    const handleClose = () => setShow(false);

    return (
        <Container className="my-5">
            <Row className="g-4">
                {pizzas.map((p) => (
                    <Col key={p.id} sm={12} md={6} lg={4}>
                        <MyPizza pizza={p} onViewDetails={handleViewDetails} />
                    </Col>
                ))}
            </Row>
            <MyModal show={show} handleClose={handleClose} data={selectedPizza} />
        </Container>
    );
}

export default PizzaList;