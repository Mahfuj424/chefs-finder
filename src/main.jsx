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



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/blog',
        element: <Blog/>,
      },
      {
        path: '/login',
        element: <Login/>
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
