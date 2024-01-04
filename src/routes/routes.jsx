import { createBrowserRouter } from "react-router-dom";
import SIgnIn from "../pages/SignIn/SIgnIn";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Dashboard/Profile";

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
        path: '/dashboard',
        element: <AdminLayout/>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/dashboard/profile',
                element: <Profile/>
            }
        ]
    }
])

export default routes;