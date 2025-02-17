import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home";
import Menu, {loader as menuLoader} from "./features/menu/Menu";
import Cart from "./features/cart/Cart";
import CreateOrder, {action as newOrderAction} from "./features/order/CreateOrder";
import Order, {loader as orderLoader} from "./features/order/Order";
import AppLayout from "./ui/AppLayout";
import NotFound from "./ui/Error";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <NotFound />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order/new",
        element: <CreateOrder />,
        action: newOrderAction
      },
      {
        path: "/order/:orderid",
        element: <Order />,
        loader: orderLoader
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
