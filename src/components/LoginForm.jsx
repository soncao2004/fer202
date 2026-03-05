import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';

function LoginForm({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [localError, setLocalError] = useState('');
    const { error: authError } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();
        setLocalError('');

        if (!username.trim()) {
            setLocalError("Username or Email is required."); 
            return;
        }
        if (!password.trim()) {
            setLocalError("Password is required.");
            return;
        }

        onLogin(username, password);
    };

    const superRedStyle = {
        color: '#ff0000', fontWeight: '900', textTransform: 'uppercase',
        fontSize: '14px', border: '2px solid #ff0000', backgroundColor: '#fff5f5'
    };

    return (
        <Card className="mx-auto shadow-lg border-0" style={{ borderRadius: '15px', width: '400px' }}>
            <Card.Body className="p-5">
                <div className="text-center mb-4">
                    <h2 className="fw-bold text-primary">ĐĂNG NHẬP</h2>
                </div>

                {(localError || authError) && (
                    <Alert variant="danger" className="text-center" style={superRedStyle}>
                        {localError || authError} [cite: 26, 27]
                    </Alert>
                )}

                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label className="fw-semibold">Username</Form.Label>
                        <Form.Control type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-4">
                        <Form.Label className="fw-semibold">Password</Form.Label>
                        <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="w-100 py-2 fw-bold shadow-sm">
                        ĐĂNG NHẬP
                    </Button>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default LoginForm;