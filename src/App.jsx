import React from 'react';

import ListPage from './components/listPage/ListPage';
import HomePage from './routes/homepage/homePage';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Layout from './routes/layout/Layout';
import SinglePage from './routes/SinglePage/SinglePage';
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/Login";
import Register from "./routes/register/Register";
import ProfileUpdatePage from './routes/profileUpdate/ProfileUpdate';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "list",
          element: <ListPage />,
        },
        {
          path: "/:id",
          element: <SinglePage/>,
        },
        {
          path:"/profile",
          element:<ProfilePage/>
        },
        {
          path:"/login",
          element:<Login/>
        },
        {
          path:"/register",
          element:<Register/>
        },
        {
          path:"/profileupdate",
          element:<ProfileUpdatePage/>
        },
        {
          path:"/list",
          element:<ListPage/>
        },
        {
          path:"/singlepage",
          element: <SinglePage/>

        }
       
      ],
   
}]);
  
  return (
    // <div className="layout">
    //   <div className="navbar">     <Navbar/></div>
    //   <div className="content"><HomePage/></div>

     
    // </div>
    <RouterProvider router={router} />
  );
    
    

}

export default App;
