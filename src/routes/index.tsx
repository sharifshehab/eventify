import App from "@/App";
import AddEvent from "@/pages/AddEvent/AddEvent";
import Events from "@/pages/Events/Events";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "events",
                Component: Events,
            },
            {
                path: "add-event",
                element: <PrivateRoute><AddEvent></AddEvent></PrivateRoute>,
            },
            {
                path: "register",
                Component: Register,
            },
            {
                path: "login",
                Component: Login,
            },
        ]
    },
    
]);

export default router;