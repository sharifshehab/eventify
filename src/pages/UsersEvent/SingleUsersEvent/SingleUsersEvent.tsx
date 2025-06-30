import useAxiosPublic from "@/hooks/useAxiosPublic";
import {type IEventData} from "../../../../types"
import Swal from 'sweetalert2';
import { Link } from "react-router";

const SingleUsersEvent = ({ event }: { event: IEventData }) => {
    const axiosPublic = useAxiosPublic();

    const { _id, title, name, dateTime, location, description, AttendeeCount } = event || {}

    const handleEventDelete = (id: string) => {
        
        Swal.fire({
            title: "Are you sure you want to delete this event?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
              if (result.isConfirmed) {
                  axiosPublic.delete(`/events/delete-event/${id}`)
                      .then(res => {
                          if (res) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your event has been deleted.",
                            icon: "success"
                        });
                    }
                  }
                    
                )
            }
          });
    };
    

    return (

        <div className="flex items-center justify-between gap-8">

             <div className="basis-full w-full bg-slate-800 relative boxShadow rounded-xl flex sm:flex-row flex-col gap-[20px] p-4">
            
            <div className="basis-2xl">
                <img
                    src="https://img.freepik.com/free-photo/close-up-portrait-handsome-young-hipster-man-hazel-eyes-wearing-trendy-plaid-shirt-posing-near-city-cafe_291049-1495.jpg?t=st=1722616951~exp=1722620551~hmac=88c27af52ea53d69a3f15a046cd8f7fe8c8036a5c733e1e1449b78bc68aeef24&w=360"
                    alt="image"
                    className="w-full h-[200px] object-cover"
                />
            </div>
    
            <div className="basis-full">
                    <h1 className="text-[1.4rem] dark:text-[#abc2d3] font-bold leading-[24px]">{title}</h1>
                <span className="text-[0.9rem] text-gray-400">{name}</span>
    
                    <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem]">{description}</p>
    
                    <div className="flex gap-x-4">
                        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem] bg-amber-600">{location}</p>
                        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem] bg-amber-600">{ dateTime}</p>
                        <p className="text-gray-600 mt-3 dark:text-[#abc2d3]/90 text-[0.9rem] bg-amber-600">{AttendeeCount}</p>
                    </div>
            </div>
                
            </div> {/* content */}

            <div className="space-x-4 basis-2xs bg-red-500">
                <button><Link to={`/edit-event/${_id}`}>Update</Link></button>
                <button onClick={() => handleEventDelete(_id)}>Delete</button>
            </div>
            
       </div>
    );
};

export default SingleUsersEvent;

/* 

  


○  Update(buton) 
○  Delete(buton) 

*/