import { createBrowserRouter, Link } from "react-router-dom";

import Root from "../view/app/index.jsx";
import FilterableProductTable from "../view/filterableProductTable/index.jsx";

export const router = createBrowserRouter([
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
        path: "filterableProductTable",
        element: <FilterableProductTable />,
      },
    ],
  },

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
