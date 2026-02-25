import React, { useState, useReducer } from 'react';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

// Giữ nguyên logic useReducer như cũ của bạn...
// ...

// B1. Khởi tạo trạng thái form
const initialState = {
    values: { username: '', email: '', password: '' },
    errors: { username: '', email: '', password: '' }
};

// B2. Hàm reducer quản lý logic chuyển đổi trạng thái
const formReducer = (state, action) => {
    switch (action.type) {
        case 'SET_VALUE':
            return {
                ...state,
                values: { ...state.values, [action.field]: action.value },
                errors: { ...state.errors, [action.field]: '' }
            };
        case 'SET_ERROR':
            return {
                ...state,
                errors: { ...state.errors, [action.field]: action.error }
            };
        case 'RESET_FORM':
            return initialState;
        default:
            return state;
    }
};

function DangKyForm() {
    const [state, dispatch] = useReducer(formReducer, initialState);
    const [validated, setValidated] = useState(false);

    const validateField = (field, value) => {
        let error = '';
        switch (field) {
            case 'username':
                if (value.trim() === '') error = 'Username không được để trống';
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) error = 'Email không hợp lệ';
                break;
            case 'password':
                if (value.length < 6) error = 'Password phải có ít nhất 6 ký tự';
                break;
            default: break;
        }
        return error;
    };

    const handleBlur = (field) => {
        const error = validateField(field, state.values[field]);
        if (error) dispatch({ type: 'SET_ERROR', field, error });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let isValid = true;
        Object.keys(state.values).forEach((field) => {
            const error = validateField(field, state.values[field]);
            if (error) {
                dispatch({ type: 'SET_ERROR', field, error });
                isValid = false;
            }
        });

        if (isValid) {
            alert('Đăng ký thành công!');
            dispatch({ type: 'RESET_FORM' });
            setValidated(false);
        } else {
            setValidated(true);
        }
    };

    return (
        <Container className="py-5">
            <Row className="justify-content-center">
                <Col md={6}>
                    <Card className="shadow border-0 rounded-4">
                        <Card.Body className="p-4">
                            <Card.Title className="text-center mb-4 fw-bold text-uppercase" style={{color: '#d9534f'}}>
                                Đăng Ký Tài Khoản
                            </Card.Title>
                            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Username</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Nhập username"
                                        value={state.values.username}
                                        isInvalid={!!state.errors.username}
                                        onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'username', value: e.target.value })}
                                        onBlur={() => handleBlur('username')}
                                    />
                                    <Form.Control.Feedback type="invalid">{state.errors.username}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label className="fw-semibold">Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="example@gmail.com"
                                        value={state.values.email}
                                        isInvalid={!!state.errors.email}
                                        onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'email', value: e.target.value })}
                                        onBlur={() => handleBlur('email')}
                                    />
                                    <Form.Control.Feedback type="invalid">{state.errors.email}</Form.Control.Feedback>
                                </Form.Group>

                                <Form.Group className="mb-4">
                                    <Form.Label className="fw-semibold">Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Tối thiểu 6 ký tự"
                                        value={state.values.password}
                                        isInvalid={!!state.errors.password}
                                        onChange={(e) => dispatch({ type: 'SET_VALUE', field: 'password', value: e.target.value })}
                                        onBlur={() => handleBlur('password')}
                                    />
                                    <Form.Control.Feedback type="invalid">{state.errors.password}</Form.Control.Feedback>
                                </Form.Group>

                                <Button variant="danger" type="submit" className="w-100 py-2 fw-bold shadow-sm">
                                    GỬI NGAY
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
}

export default DangKyForm;