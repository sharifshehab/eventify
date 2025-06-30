import Container from "@/components/layout/Container";
import { useLoaderData } from "react-router";
import SingleUsersEvent from "./SingleUsersEvent/SingleUsersEvent";
import { type IEventData } from "../../../types";

const UsersEvent = () => {
    const usersEvents = useLoaderData();

    return (
        <main>
            <section>
                <Container>
                    <div>
                        {usersEvents.map((event: IEventData) => <SingleUsersEvent key={event._id} event={event}></SingleUsersEvent>)}
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default UsersEvent;