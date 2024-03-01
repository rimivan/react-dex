import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout, { loader as rootLoader } from "./routes/layout.tsx";
import ErrorPage from "./error-page.tsx";
import PokeGeneral from "./pages/poke-general.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        errorElement: <ErrorPage/>,
        loader: rootLoader,
        children: [
          {
            path: "poke/:pokeId",
            element: <PokeGeneral />,
          },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      {/*<App />*/}
      <RouterProvider router={router} />
  </React.StrictMode>,
)
