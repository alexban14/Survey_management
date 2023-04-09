import { createBrowserRouter } from "react-router-dom";
import { Dashboard } from "./src/views/Dashborad";
import { Survey } from "./src/views/Survey";
import { LoginForm } from "./src/views/LoginForm";
import { SignUp } from "./src/views/SignUp";
import { GuestLayout } from "./src/components/GuestLayout";

const routes = [
  {
    path: '/',
    element: <Dashboard />
  },
  {
    path: '/survey',
    element: <Survey />
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
