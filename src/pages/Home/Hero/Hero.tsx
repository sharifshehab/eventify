import Container from "@/components/layout/Container";

const Hero = () => {
    return (
        <div className="w-full bg-linear-to-r/decreasing from-indigo-500 to-teal-400 h-screen p-8 flex items-center">
            <Container>
        {/* Main */}
        <header className="flex lg:flex-row flex-col gap-[50px] lg:gap-0 items-center justify-center lg:mt-3">
            <div>
                <h1 className="text-white text-[40px] lg:text-[60px] leading-[45px] lg:leading-[65px]  text-center">Plan, Manage & Celebrate Your Events with <br/> Eventify</h1>
                <p className="text-[16px] mt-2 text-center text-cyan-100">Effortlessly organize gatherings, track attendees, and make every event a success.</p>
                            <div
                    className="flex items-center flex-col md:flex-row gap-3 justify-center 425px:gap-6 mt-10 md:mt-12">
                    <button
                        className="bg-white pl-5 pr-4 border border-[#0FABCA] rounded-sm py-3 flex items-center gap-2 text-[1rem] group"
                    >
                        Get Started
                    </button>
                    <button
                        className="text-white border-2 border-white pl-5 pr-4 rounded-sm py-3 flex items-center gap-2 text-[1rem] group">
                        Contact Us
                    </button>
                </div>
            </div>

            </header>
            </Container>
        </div>
    );
};

export default Hero;