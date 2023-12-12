import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WelcomePage from "./../pages/WelcomePage";
import Home from "./../pages/Home.jsx";
import ErrorPage from "./../pages/ErrorPage.jsx";
import SearchPage from "./../pages/SearchPage.jsx";
import Photos from "../pages/Photos.jsx";
import Photo from "./../pages/Photo.jsx";

const router = createBrowserRouter([
  {
		path: '/',
    element: <WelcomePage />,
  },
  {
    path: "/gallery",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Photos />,
      },
      {
        path: "/gallery/:id",
        element: <Photo />,
      },
      {
        path: "/gallery/search",
        element: <SearchPage />,
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
