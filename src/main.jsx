import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import HomePage from './pages/HomePage/index.jsx';
import LoginPage from './pages/LoginPage/index.jsx';
import lie from "@/assets/lie.png"

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/login',
        element: <LoginPage />,
      },
      {
        path: '/getScore',
        element: <img src={lie} alt="" onClick={() => window.location.href = "/"} style={{ cursor: "pointer" }} />
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
