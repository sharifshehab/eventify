import App from "@/App";
import AddEvent from "@/pages/AddEvent/AddEvent";
import Events from "@/pages/Events/Events";
import Home from "@/pages/Home/Home";
import Login from "@/pages/Login/Login";
import Register from "@/pages/Register/Register";
import { createBrowserRouter } from "react-router";
import PrivateRoute from "./PrivateRoute";
import UsersEvent from "@/pages/UsersEvent/UsersEvent";
import EditEvent from "@/pages/EditEvent/EditEvent";

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
                element: <PrivateRoute><Events/></PrivateRoute>,
            },
            {
                path: "users-event",
                element: <PrivateRoute><UsersEvent/></PrivateRoute>,
            },
            {
                path: "add-event",
                element: <PrivateRoute><AddEvent></AddEvent></PrivateRoute>,
            },
            {
                path: "edit-event/:eventId",
                loader: async ({ params })=> {
                    return fetch(`http://localhost:5000/events/event/${params.eventId}`);
                },
                element: <EditEvent/>,
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