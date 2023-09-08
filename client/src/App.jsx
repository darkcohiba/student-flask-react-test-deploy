import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import BaseLayout from './layouts/BaseLayout'
import StudentPage from "./pages/StudentPage";
import TeacherPage from "./pages/TeacherPage";


function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route index element={<Home />}/>
      <Route path="students" element={<StudentPage />}/>
      <Route path="teachers" element={<TeacherPage />}/>
    </Route>
  ))
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
