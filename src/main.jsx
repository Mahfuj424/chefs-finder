import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from './components/MainLayout.jsx';
import Home from './components/Home.jsx';
import Blog from './components/Blog.jsx';
import Login from './components/Login';
import ChefsDetails from './components/ChefsDetails';
import AuthProvider from './components/AuthProvider';
import Register from './components/Register';
import PrivetRoute from './components/PrivetRoute';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register/>
      },
      {
        path: '/chefdetails/:id',
        element: <PrivetRoute><ChefsDetails></ChefsDetails></PrivetRoute>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
