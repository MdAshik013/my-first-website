
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../Layouts/RootLayout/RootLayout';
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout></RootLayout>,
      children:[
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        }
      ]
    },
  ]);

export default router;