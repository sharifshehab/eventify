import Container from "@/components/layout/Container";
import SingleEvent from "./SingleEvent/SingleEvent";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { type IEventData } from "../../../types";

import React, {useState} from "react";


const Event = () => {
    // search
    const [searchValue, setSearchValue] = useState("");

    // date 
    const [dateValue, setDateValue] = useState("");

    const axiosPublic = useAxiosPublic();
    const { data:events = [],isLoading } = useQuery({
        queryKey: ["events", searchValue, dateValue],
        queryFn: async () => {
            const res = await axiosPublic.get(`/events/all-events?search=${searchValue}&date=${dateValue}`);
            return (res.data) as IEventData[];
        }
    });

    const handleSearch = (e: React.FormEvent<HTMLFormElement>)  => {
        e.preventDefault();
        const searchText = (e.currentTarget.search as HTMLInputElement).value;
        setSearchValue(searchText);
    }

    const handleDateFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDateValue(e.target.value)
    }

    if (isLoading) {
        <h1>Loading Data...</h1>
    }

    return (
        <main>
            <section className="min-h-screen">
        <Container>
            <div className="flex md:flex-row flex-col items-center justify-between gap-4 mt-16">
            <form action="#" onSubmit={handleSearch} className="w-full border border-cyan-300 py-3 rounded-sm">
                <label className="input input-bordered flex items-center gap-2">
                    <input
                        type="text"
                        className="grow outline-0 ps-4"
                        name="search"
                        placeholder="Search"
                    />
                    <button type="submit" className="flex items-center justify-center h-8 w-8 opacity-70">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="h-4 w-4">
                            <path
                                fillRule="evenodd"
                                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                clipRule="evenodd" />
                        </svg>
                    </button>
                    </label>
                    
                    <label className="input input-bordered flex items-center gap-2"></label>
                </form> {/* search box */}
                
                <div>
                    <input type="datetime-local" className="border border-cyan-300 p-4 rounded-sm" value={dateValue} onChange={handleDateFilter} />
                </div>{/* select date */}

            </div>{/* filters */}
            <div className="grid lg:grid-cols-4 grid-cols-1 gap-8 justify-items-center mt-24">
                        {events.length === 0 ?
                            <div className="flex justify-center-safe min-h-screen">
                                <h2 className="text-4xl">No event found!</h2>
                            </div> :
                            events.map((event: IEventData) => <SingleEvent key={event._id} event={event}></SingleEvent>)
                }                
        </div>
                </Container>
                </section>
            </main>
    );
};

export default Event;