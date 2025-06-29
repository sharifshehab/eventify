import App from "@/App";
import AddEvent from "@/pages/AddEvent/AddEvent";
import Events from "@/pages/Events/Events";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

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
                path: "home",
                Component: Home,
            },
            {
                path: "events",
                Component: Events,
            },
            {
                path: "add-event",
                Component: AddEvent,
            },
        ]
    },
    
]);

export default router;