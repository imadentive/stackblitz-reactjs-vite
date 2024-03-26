import { createBrowserRouter, createHashRouter, Link } from "react-router-dom";
import { Button, Space } from 'antd-mobile'
import Root from "../view/app/index.jsx";
import FilterableProductTable from "../view/filterableProductTable/index.jsx";
import Assets from "../view/assets_public/index.jsx";
// createHashRouter or createBrowserRouter
export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: (
          <Space wrap>
            <Button
              onClick={() => {
                alert("hello.");
              }}
            >
              Default
            </Button>
            <Button color="primary">Primary</Button>
            <Button color="success">Success</Button>
            <Button color="danger">Danger</Button>
            <Button color="warning">Warning</Button>
          </Space>
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
