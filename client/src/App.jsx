import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import BaseLayout from './layouts/BaseLayout'




function App() {

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<BaseLayout />}>
      <Route
        index
        element={<Home />}
      />
    </Route>
  ))
  return (
    <RouterProvider
      router={router}
    />
  )
}

export default App
