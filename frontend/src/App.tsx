import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { useEffect } from "react";

import LandingPage from "./pages/landing_page/landing";
import LoginPage from "./pages/auth/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/landing" replace />,
  },
  {
    path: "/landing",
    element: <LandingPage />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Navigate to="/landing" replace />,
  },
]);

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return <RouterProvider router={router} />;
}

export default App;
