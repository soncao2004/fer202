import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Student from './componnents/StudentList'; // Nhớ đổi tên import cho đúng với StudentList.jsx
import { listOfStudents } from './studenData/studentData'; 

function App() {
  return (
    <div className="App">
      <h1>Danh Sách Học Sinh</h1>
      
      {/* Thay thế row/col bằng student-grid để kích hoạt chia 5 cột cân đối */}
      <div className="student-grid">
        {listOfStudents.map((item) => (
          <Student key={item.id} student={item} />
        ))}
      </div>
    </div>
  );
}

export default App;