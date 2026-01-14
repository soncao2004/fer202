import React from 'react';
import { listOfStudents } from '../listOfStudent'; // Kiểm tra file này nằm ở src/ hay src/components/
import About from './About';

function StudentList() {
    return (
        <div className="student-grid">
            {listOfStudents.map((item) => (
                <About key={item.id} student={item} />
            ))}
        </div>
    );
}

export default StudentList;