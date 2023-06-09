import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'registration',
                element: <Registration />
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoute><Checkout /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://car-doctor-server-crud.vercel.app/services/${params.id}`)
            },
            {
                path: 'bookings',
                element: <PrivateRoute><Bookings /></PrivateRoute>
            }
        ]
    },
]);

export default router;