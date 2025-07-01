import useAxiosPublic from "@/hooks/useAxiosPublic";
import {type IEventData} from "../../../../types"
import Swal from 'sweetalert2';
import { Link } from "react-router";
import { useQueryClient } from "@tanstack/react-query";

const SingleUsersEvent = ({ event }: { event: IEventData }) => {
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();

    const { _id, title, name, dateTime, location, description, AttendeeCount } = event || {}

    const handleEventDelete = (id: string) => {
        
        Swal.fire({
            title: "Are you sure you want to delete this event?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#53d5ff",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                  axiosPublic.delete(`/events/delete-event/${id}`)
                      .then(res => {
                          queryClient.invalidateQueries({queryKey: ["usersEvent"]});
                          if (res) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your event has been deleted.",
                                icon: "success",
                                confirmButtonColor: "#53d5ff",
                            });
                    }
                  }
                    
                )
            }
          });
    };
    

    return (

        <div className="flex md:flex-row flex-col items-center justify-between gap-8 mt-16">

            <div className="basis-full w-full bg-white border-y-3 border-cyan-300 relative boxShadow flex sm:flex-row flex-col gap-[20px] p-4">

                <div>
                        <h1 className="text-[1.4rem] font-bold leading-[24px]">{title}</h1>
                    <span className="text-[16px] text-cyan-400">{name}</span>
        
                        <p className="text-gray-600 mt-3 text-[0.9rem]">{description}</p>
        
                        <div className="flex gap-x-4 text-sm">
                            <p className="mt-3 bg-cyan-300 px-2"><span className="font-semibold">Location:</span> {location}</p>
                            <p className="mt-3 bg-cyan-300 px-2"><span className="font-semibold">Date & Time:</span> {dateTime}</p>
                            <p className="mt-3 bg-cyan-300 px-2"><span className="font-semibold">Attendee Count:</span> {AttendeeCount}</p>
                        </div>
                </div>
            </div> {/* content */}

            <div className="space-x-4 flex items-center">
                    <button className="bg-teal-300 p-1 hover:bg-teal-200"><Link to={`/edit-event/${_id}`}>Update</Link></button>
                    
                    <button className="bg-red-400 p-1 cursor-pointer hover:bg-red-300" onClick={() => handleEventDelete(_id)}>Delete</button>
            </div>
            
       </div>
    );
};

export default SingleUsersEvent;

/* 

  


○  Update(buton) 
○  Delete(buton) 

*/