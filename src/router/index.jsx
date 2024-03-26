import { createBrowserRouter, Link } from "react-router-dom";

import App from "../view/app/index.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "hello",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="/">Home</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: (
      <>
        <div>About</div>
        <Link to="/">Home</Link>
      </>
    ),
  },
]);
