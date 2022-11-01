import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home/Home';
import AddUser from './components/AddUser/AddUser';
import Update from './components/Update/Update';
import Main from '../src/components/layout/Main'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      errorElement: <h1>404 NOT FOUND</h1>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/users'),
          element: <Home></Home>
        },
        {
          path: '/users/add',
          element: <AddUser></AddUser>
        },
        {
          path: '/update/:id',
          element: <Update></Update>,
          loader: ({ params }) => fetch(`http://localhost:5000/users/${params.id}`)
        }
      ]
    }
])





  return (
    <div className="App">
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
