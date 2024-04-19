import { createBrowserRouter } from "react-router-dom";
import Error from "../pages/Error";
import Root from "../layout/Root";
import Home from "../pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error/>,
    element: <Root/>,
    children:[
        {
            path:'/',
            element:<Home/>
        }
    ]
  },
]);


export default router;