import React, { useReducer, useState } from 'react';

const initialState = { name: '', price: '', category: '' };

function reducer(state, action) {
  switch (action.type) {
    case 'CHANGE_INPUT':
      return { ...state, [action.field]: action.value };
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}

const Exercise3 = () => {
  const [form, dispatch] = useReducer(reducer, initialState);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    dispatch({ type: 'CHANGE_INPUT', field: e.target.name, value: e.target.value });
  };

  const handleSave = (e) => {
    e.preventDefault();
    setSubmittedData(form);
  };

  return (
    <div className="card border-0 shadow-lg p-4 text-white mx-auto" style={{ backgroundColor: '#1a1d23', maxWidth: '450px', borderRadius: '15px' }}>
      <h5 className="mb-4 text-center fw-bold text-danger">QUẢN LÝ SẢN PHẨM</h5>
      
      <form onSubmit={handleSave}>
        <div className="mb-3">
          <label className="form-label small text-secondary fw-bold">Tên sản phẩm</label>
          <input name="name" value={form.name} className="form-control bg-dark text-white border-secondary py-2 shadow-none" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label small text-secondary fw-bold">Giá bán ($)</label>
          <input name="price" type="number" value={form.price} className="form-control bg-dark text-white border-secondary py-2 shadow-none" onChange={handleChange} required />
        </div>
        <div className="mb-4">
          <label className="form-label small text-secondary fw-bold">Danh mục</label>
          <input name="category" value={form.category} className="form-control bg-dark text-white border-secondary py-2 shadow-none" onChange={handleChange} required />
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn flex-grow-1 fw-bold py-2 border-0 shadow" style={{ backgroundColor: '#d92b4c', color: 'white' }}>Lưu</button>
          <button type="button" className="btn btn-secondary fw-bold" onClick={() => dispatch({ type: 'RESET_FORM' })}>Reset</button>
        </div>
      </form>

      {submittedData && (
        <div className="mt-4 p-3 bg-dark rounded-3 border-start border-danger border-5">
          <div className="text-info fw-bold fs-5">{submittedData.name}</div>
          <div className="small text-light">Giá: {submittedData.price} $ | Loại: {submittedData.category}</div>
        </div>
      )}
    </div>
  );
};

export default Exercise3;