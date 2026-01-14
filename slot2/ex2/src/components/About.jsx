function About() {
  const student = {
    id: 1,
    name: "Cao Van Duy Son",
    avatar: "/picture.jpg", // Đảm bảo file picture.jpg nằm trong thư mục public
    age: 21,
    grade: "10A1"
  };

  return (
    <div className="student-card">
      <img 
        src={student.avatar} 
        alt={student.name} 
        className="student-avatar" 
      />
      <div className="student-info">
        <h2>{student.name}</h2>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Tuổi:</strong> {student.age}</p>
        <p><strong>Lớp:</strong> {student.grade}</p>
      </div>
    </div>
  );
}

export default About;