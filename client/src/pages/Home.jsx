import { useEffect, useState } from 'react'
import StudentList from '../components/StudentList'
import useSWR from 'swr';


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

  const url = "https://flask-test-student.onrender.com/api/students"
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(url, fetcher);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    if (data) {
      setStudents(data);
    }
  }, [data]);

  if (error) {
    return <div><p>App Page</p><p>Failed to load students</p></div>;
  }
  if (!data) {
    return <div><p>App Page</p><p>Loading...</p></div>;
  }



  return (
    <>
      <p>App Page</p>
      <StudentList students={students} />
    </>
  )
}

export default Home
