import TeacherCard from './TeacherCard'
import { useState, useEffect} from 'react'
import useSWR from 'swr';


function TeacherList() {

    const urlTeacher = "https://flask-test-student.onrender.com/api/teachers"
    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data: teach, error } = useSWR(urlTeacher, fetcher);
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        if (teach) {
            setTeachers(teach);
        }
    }, [teach]);

    if (error) {
        return <div><p>Failed to load teachers</p></div>;
    }
    if (!teach) {
        return <div><p>Loading Teachers...</p></div>;
    }

    return (
        <div>Teacher List
            <ul>
                {teachers.map((teacher, index) => (
                    <TeacherCard key={index} teacher={teacher}/>
                ))}
            </ul>
        </div>
    )
}

export default TeacherList