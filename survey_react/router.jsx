import { Navigate, createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./src/views/Dashboard";
import { Surveys } from "./src/views/Surveys";
import { LoginForm } from "./src/views/LoginForm";
import { SignUp } from "./src/views/SignUp";
import { GuestLayout } from "./src/components/GuestLayout";
import DefaultLayout from "./src/components/DefaultLayout";

const routes = [
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        path: '/',
        element: <Navigate to='/dashboard'/>
      },
      {
        path: '/dashboard',
        element: <Dashboard />
      },
      {
        path: '/surveys',
        element: <Surveys />
      },
    ]
  },

  {
    path: '/auth',
    element: <GuestLayout />,
    children: [
      {
        path: 'login',
        element: <LoginForm />
      },
      {
        path: 'sign-up',
        element: <SignUp />
      }
    ]
  }
]

const router = createBrowserRouter(routes);
export default router;
