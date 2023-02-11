import { RouteObject } from "react-router-dom";
import AuthLayout from "../AuthLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Root from "../Root";

const RouterObjects: RouteObject[] = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                element: <Dashboard />,
                index: true,
            },
            {
                element: <AuthLayout />,
                children: [
                    {
                        path: "login",
                        element: <Login />,
                    },
                    {
                        path: "logout",
                    },
                ],
            },
        ],
    },
];

export default RouterObjects;
