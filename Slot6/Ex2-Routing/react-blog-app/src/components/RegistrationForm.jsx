// src/components/RegistrationForm.jsx 
// (Lưu ý: Theo đường dẫn trong App.jsx của bạn thì file này nằm ở thư mục components nhé)

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Card, Form, Button, Modal } from 'react-bootstrap';

function RegistrationForm() {
  const navigate = useNavigate();

  // Đổi tên state để tránh trùng lặp
  const [credentials, setCredentials] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);

  // Xử lý khi input thay đổi
  const onInputUpdate = (e) => {
    const { name, value } = e.target;
    setCredentials(prev => ({ ...prev, [name]: value }));
    
    // Clear lỗi ngay khi user gõ phím
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  // Logic Validate viết lại gọn hơn
  const checkValidity = () => {
    let errs = {};
    const { username, email, password, confirmPassword } = credentials;

    // 1. Tên tài khoản
    if (!username.trim()) errs.username = 'Vui lòng nhập tên tài khoản.';

    // 2. Email
    const mailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      errs.email = 'Trường email là bắt buộc.';
    } else if (!mailRegex.test(email)) {
      errs.email = 'Định dạng email chưa hợp lệ (VD: user@domain.com).';
    }

    // 3. Mật khẩu
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
    if (!password) {
      errs.password = 'Bạn chưa nhập mật khẩu.';
    } else if (!passRegex.test(password)) {
      errs.password = 'Mật khẩu yếu: Phải có ít nhất 6 ký tự, gồm chữ hoa, chữ thường, số và ký tự đặc biệt.';
    }

    // 4. Nhập lại mật khẩu
    if (!confirmPassword) {
      errs.confirmPassword = 'Cần xác nhận lại mật khẩu của bạn.';
    } else if (password !== confirmPassword) {
      errs.confirmPassword = 'Hai mật khẩu không khớp nhau.';
    }

    setFormErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Nút Submit
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (checkValidity()) {
      setIsSuccess(true);
    }
  };

  // Đóng Modal và về Home
  const finishRegistration = () => {
    setIsSuccess(false);
    navigate('/home'); 
  };

  // Xóa form
  const clearForm = () => {
    setCredentials({ username: '', email: '', password: '', confirmPassword: '' });
    setFormErrors({});
  };

  return (
    <Container className="py-5" style={{ maxWidth: 600 }}>
      <Card className="shadow-lg border-0 rounded-3">
        <Card.Header className="bg-dark text-white text-center py-3">
          <h4 className="mb-0">📝 Đăng Ký Thành Viên</h4>
        </Card.Header>
        <Card.Body className="p-4 p-md-5">
          <Form onSubmit={onSubmitForm} noValidate>
            
            <Form.Group className="mb-3" controlId="userInput">
              <Form.Label className="fw-bold text-secondary">Tên đăng nhập</Form.Label>
              <Form.Control
                type="text"
                name="username"
                value={credentials.username}
                onChange={onInputUpdate}
                isInvalid={!!formErrors.username}
                placeholder="Nhập nick name của bạn..."
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.username}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="emailInput">
              <Form.Label className="fw-bold text-secondary">Địa chỉ Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={credentials.email}
                onChange={onInputUpdate}
                isInvalid={!!formErrors.email}
                placeholder="name@example.com"
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="passInput">
              <Form.Label className="fw-bold text-secondary">Mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={credentials.password}
                onChange={onInputUpdate}
                isInvalid={!!formErrors.password}
                placeholder="Tạo mật khẩu an toàn..."
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.password}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-4" controlId="confirmPassInput">
              <Form.Label className="fw-bold text-secondary">Xác nhận mật khẩu</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                value={credentials.confirmPassword}
                onChange={onInputUpdate}
                isInvalid={!!formErrors.confirmPassword}
                placeholder="Nhập lại mật khẩu ở trên..."
              />
              <Form.Control.Feedback type="invalid">
                {formErrors.confirmPassword}
              </Form.Control.Feedback>
            </Form.Group>

            <div className="d-flex gap-2 justify-content-end mt-4">
              <Button variant="outline-danger" type="button" onClick={clearForm} className="px-4">
                Hủy bỏ
              </Button>
              <Button variant="dark" type="submit" className="px-4">
                Tạo tài khoản
              </Button>
            </div>
          </Form>
        </Card.Body>
      </Card>

      <Modal show={isSuccess} onHide={finishRegistration} centered backdrop="static">
        <Modal.Header closeButton className="bg-success text-white border-0">
          <Modal.Title>✨ Hoàn Tất!</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center py-4">
          <h5 className="mb-3">Chào mừng <strong>{credentials.username}</strong> gia nhập hệ thống!</h5>
          <p className="text-muted">Tài khoản của bạn đã được khởi tạo thành công. Ấn Tiếp tục để bắt đầu khám phá nhé.</p>
        </Modal.Body>
        <Modal.Footer className="border-0 justify-content-center">
          <Button variant="success" onClick={finishRegistration} className="px-5 rounded-pill">
            Tiếp tục
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default RegistrationForm;