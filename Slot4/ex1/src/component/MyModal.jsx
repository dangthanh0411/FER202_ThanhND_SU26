import React from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';

function MyModal({ show, handleClose, data }) {
    if (!data) return null; 

    return (
        <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
                <Modal.Title className="fw-bold">{data.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row>
                    <Col md={6}>
                        <img src={data.imageSrc} alt={data.name} className="img-fluid rounded-3 shadow-sm" />
                    </Col>
                    <Col md={6}>
                        <h4 className="text-primary mb-3">Thông tin chi tiết</h4>
                        <p><strong>Mô tả:</strong> {data.description}</p>
                        <p><strong>Mã sản phẩm:</strong> {data.id}</p>
                        <p><strong>Trạng thái:</strong> <span className="badge bg-info">{data.tag}</span></p>
                        <hr />
                        <div className="d-flex align-items-center">
                            <h3 className="text-danger fw-bold me-3 mb-0">{data.newPrice}</h3>
                            <span className="text-decoration-line-through text-muted">{data.oldPrice}</span>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Đóng</Button>
                <Button variant="primary">Thêm vào giỏ hàng</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MyModal;