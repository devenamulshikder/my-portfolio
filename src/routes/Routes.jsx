import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../layout/Root";
import Home from "../pages/Home";
import About from "../pages/About";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <Root/>,
    children:[
        {
            path:'/',
            element:<Home/>
        },
        {
          path:'/about',
          element:<About/>
        },
        {
          path:'/portfolio',
          element:<Portfolio/>
        },
        {
          path:'/contact',
          element:<Contact/>
        }
    ]
  },
]);


export default router;