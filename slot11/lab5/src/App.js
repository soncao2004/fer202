import React from 'react';
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import LoginForm from "./components/LoginForm";
import CounterComponent from "./components/CounterComponent";
import LightSwitch from "./components/LightSwitch";
import { Button, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Component phụ trợ để kiểm tra trạng thái đăng nhập
const MainContent = () => {
    const { isAuthenticated, user, logout } = useAuth();

    // Nếu CHƯA đăng nhập -> Chỉ hiện Form đăng nhập (Ex 2)
    if (!isAuthenticated) {
        return <LoginForm />;
    }

    // Nếu ĐÃ đăng nhập thành công -> Hiện giao diện bài tập (Ex 1)
    return (
        <>
            {/* Thanh điều hướng chuyên nghiệp */}
            <Navbar bg="dark" variant="dark" className="px-4 mb-4 shadow">
                <Navbar.Brand>Admin Dashboard</Navbar.Brand>
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text className="me-3">
                        Xin chào: <strong className="text-white">{user.username}</strong>
                    </Navbar.Text>
                    <Button variant="outline-danger" size="sm" onClick={logout}>Đăng xuất</Button>
                </Navbar.Collapse>
            </Navbar>

            <Container>
                <div className="row">
                    <div className="col-md-6 mb-4">
                        <CounterComponent />
                    </div>
                    <div className="col-md-6 mb-4">
                        <LightSwitch />
                    </div>
                </div>
            </Container>
        </>
    );
};

function App() {
    return (
        <AuthProvider>
            <ThemeProvider>
                <div style={{ minHeight: '100vh', background: '#f5f7fb' }}>
                    <MainContent />
                </div>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default App;