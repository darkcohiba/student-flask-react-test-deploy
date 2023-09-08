import React from 'react'

export default function TeacherCard({ teacher }) {
  console.log(teacher)
  return (
    <div>
      <h1>{teacher.name}</h1>
      <p>Favorite Subject: {teacher.favorite_subject}</p>
      <div>
        <p>Students</p>
        <ul>
          {teacher.student_relationship?.map((student) => (
            <li>{student.name}, favorite subject: {student.favorite_subject}</li>
          ))}
        </ul>

      </div>
    </div>
  )
}
