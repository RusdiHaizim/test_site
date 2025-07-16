import "./App.css";
import HomePage from "./pages/HomePage";
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from "react-router-dom";
import ProfilePage from "./pages/ProfilePage";
import NotFound from "./pages/NotFoundPage";
import Navbar from "./components/Navbar";
import ProfilesPage from "./pages/ProfilesPage";

const router = createHashRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <NotFound />,
  },
  {
    path: "/profiles",
    element: <ProfilesPage />,
  },
  {
    path: "/profiles/:profileId",
    element: <ProfilePage />,
  },
]);

function App() {
  return (
    <div className="App">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
