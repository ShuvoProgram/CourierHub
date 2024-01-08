import { createBrowserRouter } from "react-router-dom";
import SIgnIn from "../pages/SignIn/SIgnIn";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard/department";
import Couriers from "../pages/Dashboard/department/Couriers";
import DProfile from "../pages/Dashboard/department/Profile";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: <SIgnIn/>
            }
        ]
    },
    {
        path: '/dashboard/department',
        element: <AdminLayout/>,
        children: [
            {
                path: '/dashboard/department',
                element: <Dashboard />
            },
            {
                path: '/dashboard/department/profile',
                element: <DProfile />
            },
            {
                path: '/dashboard/department/courier',
                element: <Couriers/>
            },

        ]
    }
])

export default routes;