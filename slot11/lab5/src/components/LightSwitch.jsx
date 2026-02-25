import React, { useReducer } from 'react';
import { Button } from 'react-bootstrap';
import { useTheme } from '../contexts/ThemeContext';

const initialState = { isOn: false };

function reducer(state, action) {
    switch (action.type) {
        case 'toggle': return { isOn: !state.isOn };
        case 'turnOn': return { isOn: true }; // Logic bật đèn [cite: 196-197]
        case 'turnOff': return { isOn: false }; // Logic tắt đèn [cite: 198-199]
        default: return state;
    }
}

function LightSwitch() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { theme, toggleTheme } = useTheme();

    const buttonStyle = { margin: '5px', padding: '10px 20px', borderRadius: '6px', fontWeight: 'bold' };

    return (
        <div style={{ padding: '20px', border: '1px solid #ccc', marginTop: '10px' }}>
            <h2>Công Tắc Đèn</h2>
            <p style={{ fontSize: '24px' }}>Đèn hiện đang: {state.isOn ? 'Bật' : 'Tắt'}</p>
            
            <Button onClick={toggleTheme} style={{ ...buttonStyle, background: theme === 'light' ? '#6c757d' : '#f8f9fa', color: theme === 'light' ? '#ffffff' : '#000000' }}>
                {theme === 'light' ? 'Dark' : 'Light'}
            </Button>

            <Button onClick={() => dispatch({ type: 'toggle' })} style={{ ...buttonStyle, background: '#007bff', color: 'white' }}>
                Chuyển Đổi
            </Button>

            {/* Nút Bật Đèn [cite: 243-247] */}
            <Button onClick={() => dispatch({ type: 'turnOn' })} style={{ ...buttonStyle, background: '#28a745', color: 'white' }}>
                Bật Đèn
            </Button>

            {/* Nút Tắt Đèn [cite: 249-253] */}
            <Button onClick={() => dispatch({ type: 'turnOff' })} style={{ ...buttonStyle, background: '#dc3545', color: 'white' }}>
                Tắt Đèn
            </Button>
        </div>
    );
}

export default LightSwitch;