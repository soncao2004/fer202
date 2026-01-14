import React from 'react';

function Student({ student }) {
  return (
    <div className="student-card">
      <div className="img-box">
        <img src={student.avatar} alt={student.name} />
      </div>
      
      <div className="student-content">
        <h3>{student.name}</h3>
        <p>ID: {student.id}</p>
        <p>Age: {student.age}</p>
        <div>
          <span className="grade-label">Grade: {student.grade}</span>
        </div>

        {/* Thêm nút bấm ở đây */}
        <button className="view-details-btn">View Details</button>
      </div>
    </div>
  );
}

export default Student;