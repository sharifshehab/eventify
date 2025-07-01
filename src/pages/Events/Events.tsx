import Container from "@/components/layout/Container";
import SingleEvent from "./SingleEvent/SingleEvent";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { type IEventData } from "../../../types";

import React, {useState} from "react";
import SearchBox from "./SearchBox/SearchBox.js";

const Event = () => {
    // search
    const [searchValue, setSearchValue] = useState("");
    const placeholders = [
        "Search for events...",
    ];
    // date 
    const [dateValue, setDateValue] = useState("");

    const axiosPublic = useAxiosPublic();
    const { data:events = [] } = useQuery({
        queryKey: ["events", searchValue, dateValue],
        queryFn: async () => {
            const res = await axiosPublic.get(`/events/all-events?search=${searchValue}&date=${dateValue}`);
            return (res.data) as IEventData[];
        }
    });

    const handleDateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.target.value)
    }

    return (
        <Container>
            <div className="flex md:flex-row flex-col items-center justify-between gap-4 mt-16">
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} placeholders={placeholders}/>
                <input type="datetime-local" className="border p-4 rounded-sm" value={dateValue} onChange={handleDateFilter}/>
            </div>{/* filter */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 justify-items-center mt-10">
                        {events.length === 0 ?
                            <div className="flex items-center justify-center min-h-screen">
                                <h2 className="text-center text-4xl">No event found!</h2>
                            </div> :
                            events.map((event: IEventData) => <SingleEvent key={event._id} event={event}></SingleEvent>)
                }                
        </div>
        </Container>
    );
};

export default Event;