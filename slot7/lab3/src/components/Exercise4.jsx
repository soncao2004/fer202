import React, { useState } from 'react';

const Exercise4 = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(['Học lập trình .NET', 'Học lập trình Java']);

  const handleAdd = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };

  return (
    <div style={{ backgroundColor: '#1a1d23', padding: '40px' }} className="rounded-4 shadow-lg border border-secondary">
      <div className="d-flex gap-3 mb-5 justify-content-center">
        <input 
          className="form-control bg-dark text-white border-secondary py-2"
          style={{ maxWidth: '300px' }}
          placeholder="Please input a Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button className="btn fw-bold px-4 border-0 shadow" style={{ backgroundColor: '#d92b4c', color: 'white' }} onClick={handleAdd}>Add Todo</button>
      </div>

      <div className="bg-white p-4 rounded-4 shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
        <h4 className="text-center mb-4 text-dark fw-bold border-bottom pb-2">Todo List</h4>
        {todos.map((item, index) => (
          <div key={index} className="d-flex justify-content-between align-items-center mb-3 p-2 bg-light rounded-3 shadow-sm border">
            <span className="fw-semibold text-dark px-2">{item}</span>
            <button className="btn btn-danger btn-sm px-3 rounded-pill" onClick={() => setTodos(todos.filter((_, i) => i !== index))}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Exercise4;