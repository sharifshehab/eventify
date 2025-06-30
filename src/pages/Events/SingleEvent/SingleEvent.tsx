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
        <div className="w-full shadow-lg bg-white rounded">
            <div>
            Date and Time: {dateTime}
                
                AttendeeCount: {AttendeeCount}
            </div>
            <div className="flex flex-col w-full justify-between items-center p-4">
                <h2 className="font-bold text-xl">
                        {title}
                        </h2>
                <h4>Organizer:{name}</h4>
            </div>
            
            <p className="text-[#424242] dark:text-[#abc2d3] p-4">{description}</p>

            <div className="flex flex-col items-center w-full p-4">
                
                <div className="">
                    <h3>Location: {location}</h3>
                </div>

                <Button className="w-full" onClick={() =>handleAttendCount()}>Join Event</Button>
            </div>
        </div>
    );
};

export default SingleEvent;