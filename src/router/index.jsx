import { createBrowserRouter, createHashRouter,Link } from "react-router-dom";

import Root from "../view/app/index.jsx";
import FilterableProductTable from "../view/filterableProductTable/index.jsx";
import Assets from '../view/assets_public/index.jsx'
// createHashRouter or createBrowserRouter
export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <div>
            <h1>Hello World</h1>
          </div>
        ),
      },
      {
        path: "assets",
        element: <Assets />,
      },
      {
        path: "filterableProductTable",
        element: <FilterableProductTable />,
      },
    ],
  }

  // {
  //   path: "about",
  //   element: (
  //     <>
  //       <div>About</div>
  //       <Link to="/">Home</Link>
  //     </>
  //   ),
  // },
]);
