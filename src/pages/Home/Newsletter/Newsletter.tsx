// react icons
import Container from "@/components/layout/Container";
import { AiOutlineMail } from "react-icons/ai";

const Newsletter = () => {
    return (
        <section className="w-full p-[20px]">
            
            <Container>
        <div className="flex lg:flex-row flex-col items-center justify-between gap-[20px]">
            <div className="w-full sm:w-[80%] lg:w-[30%]">
                <img src="https://i.ibb.co/WkhTsW1/undraw-Mailbox-re-dvds.png" alt="image"
                     className="w-full"/>
            </div>

            <div className="w-full lg:w-[50%]">
                        <div className="mb-5 text-left">
                        <h2 className="border-b-2 border-cyan-300 inline-block pb-2 text-4xl text-black font-medium">Newsletter</h2>
                    </div>
                <p className="text-[1.1rem] dark:text-[#abc2d3] mt-3">Get weekly updates on the newest design
                    stories, case studies and tips right
                    in your mailbox. <b>Subscribe now!</b></p>

                <form className="mt-5">
                    <div className="relative">
                        <input placeholder="Email Address"
                               className="w-full py-3 dark:border-slate-700 dark:bg-slate-900 dark:placeholder:text-slate-500 dark:text-[#abc2d3] pr-4 pl-14 outline-none focus:ring-0 border rounded-md border-[#00b0ff]"/>
                        <AiOutlineMail
                            className="absolute top-[50%] transform translate-y-[-50%] left-3 text-[#00b0ff] text-[1.7rem]"/>
                    </div>

                    <button
                        className="w-full py-3 rounded-md bg-[#00b0ff] hover:bg-[#029de0] text-white mt-4">Submit
                    </button>
                </form>
            </div>
                </div>
                </Container>
    </section>
    );
};

export default Newsletter;