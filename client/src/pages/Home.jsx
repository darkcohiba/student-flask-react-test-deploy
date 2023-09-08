import { useEffect, useState } from 'react'
import StudentList from '../components/StudentList'
import TeacherList from '../components/TeacherList';


function Home() {

    // deployed fetch: successful
    // https://flask-student-jo7j.onrender.com/
    // useEffect(()=>{
    //   fetch('https://flask-student-jo7j.onrender.com/api/students')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // },[])
    // deployed fetch: failed when deployed
    // http://0.0.0.0:10000
    // useEffect(()=>{
    //   fetch('http://0.0.0.0:10000/api/students')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // },[])
    // local fetch
    // useEffect(()=>{
    //   fetch('http://127.0.0.1:8000/api/students')
    //   .then(response => response.json())
    //   .then(data => console.log(data))
    // },[])

    



    return (
        <>
            <p>App Page</p>
            <StudentList />
            <TeacherList />
        </>
    )
}

export default Home
