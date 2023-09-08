import StudentCard from './StudentCard'
import { useState, useEffect } from 'react';

function StudentList() {

    const urlStudent = "https://flask-test-student.onrender.com/api/students"
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data: stud, error } = useSWR(urlStudent, fetcher);
    const [students, setStudents] = useState([]);

    useEffect(() => {
        if (stud) {
            setStudents(stud);
        }
    }, [stud]);

    if (error) {
        return <div><p>Failed to load students</p></div>;
    }
    if (!stud) {
        return <div><p>Loading Students...</p></div>;
    }

    return (
        <div>StudentList
            <ul>
                {students.map((student, index) => (
                    <StudentCard key={index} student={student}/>
                ))}
            </ul>
        </div>
    )
}

export default StudentList