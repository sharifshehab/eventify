import { Button } from "@/components/ui/button";

// react icons
import { type IEventData } from "../../../../types";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useQueryClient } from "@tanstack/react-query";

const SingleEvent = ({ event }: { event: IEventData }) => {
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();
    const { _id, title, name, dateTime, location, description, AttendeeCount, organizer } = event || {}

      const handleAttendCount = async () => {
          try {
            await axiosPublic.patch(`events/event-attend/${_id}`, {organizer});
            queryClient.invalidateQueries({queryKey: ["events"]});
          } catch (err) {
              console.log(err);
         }
        }

    return (
        <div className="w-full shadow-sm flex flex-col bg-white border-x-2 border-cyan-300 p-5">

            <span className="block text-right border-b-2 border-cyan-300 p-1">
                Attendee Count: {AttendeeCount}
            </span>

            <div className="flex flex-col  items-center gap-1 p-4">
                <h2 className="font-bold text-[20px]">
                        {title}
                        </h2>
                <h4 className="text-[15px]">Organizer: {name}</h4>
            </div>
            
            <div className="flex-grow">
            <p className="text-[#424242] dark:text-[#abc2d3]">{description}</p>
            </div>

            <div className="flex flex-col items-start w-full mt-4 mb-5">
                    <h3><span className="text-cyan-500 px-1 font-medium">Location:</span>{location}</h3>                    
                    <h3><span className="text-cyan-500 px-1 font-medium">Date & Time:</span>{dateTime}</h3>                    
            </div>
            <Button className="w-full bg-cyan-400 hover:bg-cyan-300 rounded-sm" onClick={() =>handleAttendCount()}>Join Event</Button>
        </div>
    );
};

export default SingleEvent;