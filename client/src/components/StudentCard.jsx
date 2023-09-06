import React from 'react'

export default function SutdentCard({student}) {
    console.log(student)
  return (
    <div>
        <h1>{student.name}</h1>
        <p>Favorite Subject: {student.favorite_subject}</p>
        <p>Teacher: {student.teacher.name}</p>
    </div>
  )
}
