import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from '@/pages/login'
import SignupPage from '@/pages/signup'
import DashboardPage from '@/pages/dashboard'
import ForgotPasswordPage from "@/pages/forgot-password"
import VerifyOtpPage from "@/pages/verify-otp"
import ProfilePage from "@/pages/profile"

const router = createBrowserRouter([
  {
    path  : "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/app",
    element: <App />,
  },
  {
    path: "/login",
    element : <LoginPage/>
  },
  {
    path: "/signup",
    element : <SignupPage/>
  },
  {
    path: "/dashboard",
    element : <DashboardPage/>
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage/>
  },
  {
    path: "/verify-otp",
    element : <VerifyOtpPage/>
  },
  {
    path: "/profile",
    element : <ProfilePage/>
  }
]);
createRoot(document.getElementById('root')!).render(
  <StrictMode>
        <RouterProvider router={router} />

  </StrictMode>,
)
