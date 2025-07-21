import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

import LandingPage from "./pages/landing_page/landing";

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
    path: "*",
    element: <Navigate to="/landing" replace />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
