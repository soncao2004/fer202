import React, { useReducer } from 'react';

const initialState = { count: 1 };

function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: Math.max(0, state.count - 1) };
    case 'SET_COUNT':
      // Đảm bảo giá trị nhập vào là số và không nhỏ hơn 0
      const value = parseInt(action.value);
      return { count: isNaN(value) ? 0 : Math.max(0, value) };
    default:
      return state;
  }
}

const Exercise1 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="card border-0 shadow-lg text-white mx-auto" style={{ backgroundColor: '#1a1d23', maxWidth: '300px', borderRadius: '15px' }}>
      <div className="card-body p-4 text-center">
        <h6 className="text-secondary fw-bold mb-4">CHỌN SỐ LƯỢNG (useReducer)</h6>
        <div className="d-flex align-items-center justify-content-center gap-3">
          {/* Nút giảm */}
          <button 
            className="btn btn-outline-secondary rounded-circle fw-bold" 
            style={{ width: '45px', height: '45px' }}
            onClick={() => dispatch({ type: 'DECREMENT' })}
          > - </button>

          {/* Ô nhập số đã thêm mới */}
          <input 
            type="number"
            className="form-control bg-transparent text-white text-center fs-2 fw-bold border-0 shadow-none"
            style={{ width: '80px' }}
            value={state.count}
            onChange={(e) => dispatch({ type: 'SET_COUNT', value: e.target.value })}
          />

          {/* Nút tăng */}
          <button 
            className="btn btn-danger rounded-circle border-0 shadow" 
            style={{ width: '45px', height: '45px', backgroundColor: '#d92b4c' }}
            onClick={() => dispatch({ type: 'INCREMENT' })}
          > + </button>
        </div>
      </div>
    </div>
  );
};

export default Exercise1;