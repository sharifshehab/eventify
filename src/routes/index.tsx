import Event from "@/pages/Event/Event";
import Home from "@/pages/Home/Home";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Home,
    },
    {
        path: "/event",
        Component: Event,
    },
]);

export default router;