import logo from "./logo.svg";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layouts/Main";
import Home from "./components/Home/Home";
import Orders from "./components/Orders/Orders";
import Grandpa from "./components/Grandpa/Grandpa";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          loader: () => fetch(`tshirts.json`),
          element: <Home />,
        },
        { path: "/orders", element: <Orders /> },
        { path: "/grandpa", element: <Grandpa /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
