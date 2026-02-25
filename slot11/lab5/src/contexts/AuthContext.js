import React, { createContext, useContext, useReducer } from 'react';

// Dữ liệu mẫu thay thế cho API [cite: 262-287]
const mockAccounts = [
    { id: 1, username: 'admin', password: '123456', role: 'admin' },
    { id: 2, username: 'user1', password: '123456', role: 'user' },
    { id: 3, username: 'user2', password: '123456', role: 'user' },
];

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return { ...state, isAuthenticated: true, user: action.payload, error: null };
        case 'LOGIN_ERROR':
            return { ...state, isAuthenticated: false, user: null, error: action.payload };
        case 'LOGOUT':
            return { ...state, isAuthenticated: false, user: null, error: null };
        default:
            return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, {
        isAuthenticated: false,
        user: null,
        error: null
    });

    const login = (username, password) => {
        const user = mockAccounts.find(u => u.username === username && u.password === password);
        if (!user) {
            dispatch({ type: 'LOGIN_ERROR', payload: 'Sai tài khoản hoặc mật khẩu!' });
        } else if (user.role !== 'admin') {
            dispatch({ type: 'LOGIN_ERROR', payload: 'Chỉ Admin mới được phép đăng nhập!' }); // Phân quyền admin [cite: 291]
        } else {
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
        }
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout: () => dispatch({ type: 'LOGOUT' }) }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within AuthProvider");
    return context;
};