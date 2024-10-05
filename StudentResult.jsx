// src/components/StudentResult.js
import React from 'react';

const StudentResult = () => {
    const student = {
        rollNumber: '1409234',
        studentName: 'Swati Garg',
        fatherName: 'Sonu Garg',
        motherName: 'Sunita Garg',
        subjects: [
            { name: 'C Programming', obtainedMarks: 55, practicalMarks: 22, total: 77, grade: 'B1' },
            { name: 'Data Structure', obtainedMarks: 45, practicalMarks: 21, total: 66, grade: 'B2' },
            { name: 'C++ OOPS Concept', obtainedMarks: 65, practicalMarks: 23, total: 88, grade: 'A2' },
            { name: 'Java', obtainedMarks: 60, practicalMarks: 20, total: 80, grade: 'A2' },
            { name: 'Organization Behaviour', obtainedMarks: 52, practicalMarks: 25, total: 77, grade: 'B1' },
            { name: 'Computer fundamentals', obtainedMarks: 46, practicalMarks: 24, total: 70, grade: 'B1' },
        ],
        totalMarks: 458,
        outOf: 600,
        percentage: '76.33%',
        result: 'Passed'
    };

    return (
        <div className="student-result">
            <h2>B.Tech First Semester Examination Result - Year 2020</h2>
            <div className="student-info">
                <p><strong>Roll Number: </strong>{student.rollNumber}</p>
                <p><strong>Student Name: </strong>{student.studentName}</p>
                <p><strong>Father Name: </strong>{student.fatherName}</p>
                <p><strong>Mother Name: </strong>{student.motherName}</p>
            </div>

            <table border="1" cellPadding="10">
                <thead>
                    <tr>
                        <th>Subjects</th>
                        <th>Obtained Marks</th>
                        <th>Practical Marks</th>
                        <th>Total</th>
                        <th>Grade</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {student.subjects.map((subject, index) => (
                        <tr key={index}>
                            <td>{subject.name}</td>
                            <td>{subject.obtainedMarks}</td>
                            <td>{subject.practicalMarks}</td>
                            <td>{subject.total}</td>
                            <td>{subject.grade}</td>
                            <td>{student.result}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="summary">
                <p><strong>Total Marks: </strong>{student.totalMarks}/{student.outOf}</p>
                <p><strong>Percentage: </strong>{student.percentage}</p>
                <p><strong>Result: </strong>{student.result}</p>
            </div>
        </div>
    );
}

export default StudentResult;

