import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext'; // [cite: 112]

const initialState = { count: 0 }; // [cite: 114]

function reducer(state, action) { // [cite: 116]
    switch (action.type) {
        case 'increment': return { count: state.count + 1 };
        case 'decrement': return { count: state.count - 1 };
        case 'reset': return initialState;
        default: return state;
    }
}

function CounterComponent() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme(); // [cite: 136]

    const buttonStyle = { margin: '5px', padding: '10px 20px', fontWeight: 'bold' };

    return (
        <div className={`p-4 border mb-3 ${theme === 'dark' ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            <h2>Bộ Đếm Đa Năng</h2>
            <p style={{ fontSize: '24px' }}>Giá trị hiện tại: {state.count}</p>
            
            <Button 
                style={{ 
                    ...buttonStyle, 
                    background: theme === 'light' ? '#6c757d' : '#f8f9fa',
                    color: theme === 'light' ? '#ffffff' : '#000000' 
                }} 
                onClick={toggleTheme}
            >
                {theme === 'light' ? 'Chế độ: Dark' : 'Chế độ: Light'}
            </Button>

            <Button onClick={() => dispatch({ type: 'increment' })} variant="primary" style={buttonStyle}>Tăng (+1)</Button>
            <Button onClick={() => dispatch({ type: 'decrement' })} variant="warning" style={buttonStyle}>Giảm (-1)</Button>
            <Button onClick={() => dispatch({ type: 'reset' })} variant="danger" style={buttonStyle}>Reset</Button>
        </div>
    );
}
export default CounterComponent;