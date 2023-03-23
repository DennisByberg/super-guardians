import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Menu from "./Pages/Menu/Menu";
import About from "./Pages/About/About";
import Status from "./Pages/Status/Status";

function App() {
  // Our Paths
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Menu />,
    },
    {
      path: "/About",
      element: <About />,
    },
    {
      path: "/Status",
      element: <Status />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
