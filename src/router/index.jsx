import { Link, createBrowserRouter, createHashRouter } from 'react-router-dom'
import { Button, Space } from 'antd-mobile'
import Layout from '../views/Layout/index.jsx'
import FilterableProductTable from '../views/filterableProductTable/index.jsx'
import Assets from '../views/assets_public/index.jsx'
import Demo from '../views/Demo/index.jsx'
// createHashRouter or createBrowserRouter
export const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <Space wrap>
            <Button
              onClick={() => {
                alert('hello.')
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
        path: 'assets',
        element: <Assets />,

      },
      {
        path: 'filterableProductTable',
        element: <FilterableProductTable />,
      },
      {
        path: 'demo',
        element: <Demo person={{ name: 'hello' }} size={300} />,
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
])
