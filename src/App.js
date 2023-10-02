import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './component/navbar/Navbar';
import Menu from './component/menu/Menu';
import Login from "./pages/login/Login";
import Products from "./pages/products/Products";
import Product from "./pages/product/Product";
import Home from "./pages/home/Home";
import Footer from "./component/footer/Footer";
import Users from "./pages/users/Users";
import User from "./pages/user/User";
import "./styles/global.scss";


function App() {

  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar />
        <div className="container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet></Outlet>
          </div>
        </div>
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '',
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/products",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/products/:id",
          element: <Product />,
        },
      ]
    },
    {
      path: "/login",
      element: <Login />,
    },
  ])

  return <RouterProvider router={router} />
}

export default App;
