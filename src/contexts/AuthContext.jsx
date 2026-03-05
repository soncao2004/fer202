import React, { createContext, useContext, useReducer } from 'react';
import axios from 'axios';

const AuthContext = createContext();

const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS': return { ...state, user: action.payload, error: null };
        case 'LOGIN_FAIL': return { ...state, user: null, error: action.payload };
        case 'LOGOUT': return { ...state, user: null, error: null };
        default: return state;
    }
};

export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, { 
        user: JSON.parse(localStorage.getItem('user')) || null, 
        error: null 
    });

    const login = async (identifier, password) => {
        try {
            const res = await axios.get('http://localhost:3001/accounts');
            const user = res.data.find(u => 
                (u.username === identifier || u.email === identifier) && u.password === password
            ); 

            if (!user) {
                dispatch({ type: 'LOGIN_FAIL', payload: "SAI TÀI KHOẢN HOẶC MẬT KHẨU!" });
                return false;
            } 
            if (user.role !== 'admin') {
                dispatch({ type: 'LOGIN_FAIL', payload: "BẠN KHÔNG CÓ QUYỀN TRUY CẬP!" }); 
                return false;
            } 
            if (user.status === 'locked') {
                dispatch({ type: 'LOGIN_FAIL', payload: "TÀI KHOẢN ĐANG BỊ KHÓA!" }); 
                return false;
            } 

            localStorage.setItem('user', JSON.stringify(user));
            dispatch({ type: 'LOGIN_SUCCESS', payload: user });
            return true;
        } catch (err) {
            dispatch({ type: 'LOGIN_FAIL', payload: "LỖI KẾT NỐI SERVER!" });
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem('user');
        dispatch({ type: 'LOGOUT' });
    };

    return (
        <AuthContext.Provider value={{ ...state, login, logout, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);