import React, { useContext } from 'react'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from "react-router-dom";

// Import Pages
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Profile from './pages/profile/Profile'
import Heart from './pages/heart/Heart'
import Recommend from './pages/recommendation/Recommendation'
import Bmi from './pages/bmi/Bmi';
import DiseaseDetail from './pages/diseasedetail/DiseaseDetail';
import Diabetes from './pages/diabetes/Diabetes';
// Import Components
import Navbar from './components/navbar/Navbar'
import Leftbar from './components/leftbar/Leftbar'
import './style.scss'
import { DarkModeContext } from './context/DarkModeContext';

function App() {

  const isAuthorised = true
  const { darkMode } = useContext(DarkModeContext)
  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: '10' }}>
            <Outlet />
          </div>
        </div>
      </div>
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!isAuthorised) {
      return <Navigate to='/login' />
    }
    return children
  }
  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute >,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/profile',
          element: <Profile />
        },
        {
          path: '/heart-prediction',
          element: <Heart />
        },
        {
          path: '/diabetes-prediction',
          element: <Diabetes />
        },
        {
          path: '/recommendation',
          element: <Recommend />
        },
        {
          path: '/bmi',
          element: <Bmi />
        },
        {
          path: '/diseasedetail',
          element: <DiseaseDetail />
        },
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
