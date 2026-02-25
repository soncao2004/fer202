import React, { useEffect, useState, Suspense } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import { fetchAllUsers, fetchAllPosts } from './api';

const User = React.lazy(() => import('./User')); //
const Post = React.lazy(() => import('./Post')); //

const LazyDemo = ({ type }) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(!navigator.onLine); // Khởi tạo dựa trên trạng thái thực tế

    useEffect(() => {
        // Hàm lắng nghe sự kiện mất mạng đột ngột
        const handleStatusChange = () => {
            if (!navigator.onLine) setError(true);
        };

        window.addEventListener('offline', handleStatusChange);
        window.addEventListener('online', () => setError(false));

        // Logic fetch data cũ
        const loadData = async () => {
            setError(false);
            const result = type === 'users' ? await fetchAllUsers() : await fetchAllPosts();
            if (result === null) {
                setError(true);
            } else {
                setData(result);
            }
        };

        loadData();

        return () => {
            window.removeEventListener('offline', handleStatusChange);
        };
    }, [type]);

    return (
        <Container className="py-5">
            <h1 className="text-center mb-5 fw-bold text-primary">
                {type === 'users' ? 'Users List' : 'Posts List'}
            </h1>
            
            {error && (
                <Alert variant="danger" className="text-center fw-bold animate__animated animate__shakeX">
                    ⚠️ Mất kết nối mạng! Không thể tải dữ liệu ngay lúc này.
                </Alert>
            )}

            <Suspense fallback={<div className="text-center">Loading items...</div>}>
                <Row className="g-4">
                    {!error && data.map((item) => (
                        <Col key={item.id} md={type === 'users' ? 12 : 6}>
                            {type === 'users' ? <User user={item} /> : <Post post={item} />}
                        </Col>
                    ))}
                </Row>
            </Suspense>
        </Container>
    );
};

export default LazyDemo;