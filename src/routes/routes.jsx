import { createBrowserRouter } from "react-router-dom";
import SIgnIn from "../pages/SignIn/SIgnIn";
import MainLayout from "../layouts/MainLayout/MainLayout";
import AdminLayout from "../layouts/AdminLayout";
import Dashboard from "../components/Dashboard";

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
                element: <Dashboard/>
            }
        ]
    }
])

export default routes;