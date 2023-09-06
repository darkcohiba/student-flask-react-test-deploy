
function StudentList({ students }) {
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