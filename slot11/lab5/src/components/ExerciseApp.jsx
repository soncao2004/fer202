import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import CounterComponent from './components/CounterComponent';
import LoginForm from './components/LoginForm';
import { Container } from 'react-bootstrap';

function ExerciseApp() {
    return (
        <ThemeProvider> {/* [cite: 98] */}
            <AuthProvider>
                <Container className="py-5" style={{ minHeight: '100vh' }}>
                    <h1 className="text-center mb-5">React Context & Reducer Exercise</h1>
                    <LoginForm />
                    <hr className="my-5" />
                    <CounterComponent />
                </Container>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default ExerciseApp;