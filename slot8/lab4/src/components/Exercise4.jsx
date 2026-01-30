import React, { useReducer, useState } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return [...state, { id: Date.now(), text: action.text }];
    case 'DELETE_TASK':
      return state.filter(task => task.id !== action.id);
    default:
      return state;
  }
}

const Exercise4 = () => {
  const [todos, dispatch] = useReducer(reducer, [
    { id: 1, text: 'Học lập trình .NET' },
    { id: 2, text: 'Học lập trình Java' }
  ]);
  const [task, setTask] = useState('');

  const handleAdd = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TASK', text: task });
      setTask('');
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1d23', padding: '40px' }} className="rounded-4 shadow-lg border border-secondary">
      <div className="d-flex gap-3 mb-5 justify-content-center">
        <input 
          className="form-control bg-dark text-white border-secondary py-2" style={{ maxWidth: '300px' }}
          placeholder="Input a Task" value={task} onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn fw-bold px-4 border-0 shadow" style={{ backgroundColor: '#d92b4c', color: 'white' }} onClick={handleAdd}>Add Todo</button>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
        <h4 className="text-center mb-4 text-dark fw-bold border-bottom pb-2">Todo List</h4>
        {todos.map((item) => (
          <div key={item.id} className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded-3 shadow-sm border">
            <span className="fw-semibold text-dark px-2">{item.text}</span>
            <button className="btn btn-danger btn-sm px-3 rounded-pill" onClick={() => dispatch({ type: 'DELETE_TASK', id: item.id })}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise4;