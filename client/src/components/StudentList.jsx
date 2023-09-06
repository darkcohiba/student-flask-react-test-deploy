
function StudentList({ students }) {
    return (
        <div>StudentList
            <ul>
                {students.map((student, index) => (
                    <li key={index}>{student.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default StudentList