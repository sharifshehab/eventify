import { Button } from "@/components/ui/button";

// react icons
import {HiMiniShare} from "react-icons/hi2";


const SingleEvent = () => {


    return (
        <div className="w-full shadow-lg dark:bg-slate-800 bg-white rounded">
            <div className="flex w-full justify-between items-center p-4">
                <div className="flex items-center gap-4">

                    <div className="">
                        <h2 className="font-[500] dark:text-[#abc2d3] text-[1.2rem]">
                        Event Title
                        </h2>
                        <p className="text-[#424242] dark:text-[#abc2d3]/70 text-[0.9rem]">
                            September 14, 2016
                        </p>
                    </div>
                </div>
                <h4>Name</h4>
            </div>

            <img
                src="https://img.freepik.com/premium-photo/tasty-tofu-stir-fry-with-veggies-crispy-tofu-fresh-cilantro-perfect-vegan-meal-healthy_763042-1514.jpg"
                alt=""
                className="w-full h-[250px] object-cover"
            />
              
            <p className="text-[#424242] dark:text-[#abc2d3] p-4">
                This impressive paella is a perfect party dish and a fun
                meal to cook together with your guests. Add 1 cup of frozen
                peas along with the mussels, if you like.
            </p>

            <div className="flex flex-col items-center space-y- w-full p-4 ">
                <div className="flex items-center gap-4 ">
                    Location
                    <HiMiniShare className="text-[#424242] dark:text-[#abc2d3] text-[1.4rem] cursor-pointer" />
                    AttendeeCount
                    <HiMiniShare className="text-[#424242] dark:text-[#abc2d3] text-[1.4rem] cursor-pointer"/>
                </div>

           <Button>Join Event</Button>
            </div>


        </div>
    );
};

export default SingleEvent;