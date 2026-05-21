import React from 'react';
import MyPizza from "./MyPizza";
import { pizzas } from '../data/pizzaData'; // Lưu ý: file data của bạn export biến tên là gì thì import đúng tên đó nhé
import { Container, Row, Col } from 'react-bootstrap';

function PizzaList() {
    return (
        <div>
            {/* Hiển thị danh sách pizza được tạo trong pizzaData.js bằng cách sử dụng component MyPizza
            Chứa trong container react-bootstrap , có Row, Col */}
            <Container style={{ marginTop: '20px' }}>
                <Row>
                    {pizzas.map((p) => (
                        <Col key={p.id} sm={12} md={6} lg={4}>
                            <MyPizza pizza={p} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default PizzaList;