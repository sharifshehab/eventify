import Container from "@/components/layout/Container";
import { GiStabbedNote } from "react-icons/gi";
import { GrNotes } from "react-icons/gr";
import { AiOutlineUsergroupAdd } from "react-icons/ai";

const Services = () => {
    return (
        <div className="py-24">
            <Container>
                <section className="px-8 pb-[30px] mt-8">
                    
                    <div className="mb-5 text-center">
                        <h2 className="border-b-2 border-cyan-300 inline-block pb-2 text-4xl text-black font-medium">Our Service</h2>
                    </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] mt-10 place-items-center justify-items-end">
                    <div>
                   
                    <GiStabbedNote className="text-cyan-400" size={29}/>
                            
                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Event Creation & Scheduling</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Easily create and customize events with detailed descriptions, locations, dates, and times.
                        Keep all your event info organized in one intuitive dashboard.</p>
                    </div>
                    
                    <div>
                            <GrNotes className="text-cyan-400" size={26} />
                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Management & Tracking</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Track RSVPs and monitor attendee counts in real-time.
                        See who’s coming, manage guest lists, and ensure every event runs smoothly.</p>
                    </div>
                    <div>
                    <AiOutlineUsergroupAdd className="text-cyan-400" size={35} />

                        <h4 className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Networking</h4>
                        <p className="text-[0.9rem] text-gray-500 mt-1 dark:text-slate-400">Foster meaningful connections at every event.
                        With Eventify, attendees can discover fellow participants, share interests, and build lasting relationships — turning each gathering into a vibrant networking opportunity.</p>
                    </div>
                </div>
                </section>
                </Container>
        </div>
    );
};

export default Services;