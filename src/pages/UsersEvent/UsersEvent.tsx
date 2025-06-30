import Container from "@/components/layout/Container";
import SingleUsersEvent from "./SingleUsersEvent/SingleUsersEvent";
import { type IEventData } from "../../../types";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext } from "react";
import { AuthContext } from "@/contexts/ProviderContext";

const UsersEvent = () => {

    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);

    const { data:usersEvent = [] } = useQuery({
        queryKey: ["usersEvent", user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/events/users-event/${user?.email}`);
            return (res.data) as IEventData[];
        }
    });

    return (
        <main>
            <section>
                <Container>
                    <div>
                        {usersEvent.length === 0 ?
                            <div className="flex items-center justify-center min-h-screen">
                                <h2 className="text-center text-4xl">No event found!</h2>
                            </div> :
                            usersEvent.map((event: IEventData) => <SingleUsersEvent key={event._id} event={event}></SingleUsersEvent>)
                        }
                    </div>
                </Container>
            </section>
        </main>
    );
};

export default UsersEvent;