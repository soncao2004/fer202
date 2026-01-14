import React from 'react';

function About({ student }) {
  return (
    <div className="student-card">
      <div className="img-box">
        <img src={student.avatar} alt={student.name} />
      </div>
      <div className="student-content">
        <h3>{student.name}</h3>
        <p>ID: <b>{student.id}</b></p>
        <p>Tuổi: <b>{student.age}</b></p>
        <span className="grade-label">{student.grade}</span>
      </div>
    </div>
  );
}

export default About;