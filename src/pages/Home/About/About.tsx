import Container from "@/components/layout/Container";

const About = () => {
    return (
        <div>
            <Container>
            <div
            className="w-full relative flex sm:flex-row flex-col items-center p-4">
                
            <div className="w-full basis-1/2">
                <img
                    src="https://i.ibb.co/yBqKBsm6/image.webp"
                    alt="image"
                    className="w-[1200px] h-full object-cover rounded-full"
                />
            </div>

            <div className="basis-1/2">
                        <div className="mb-5 text-left">
                        <h2 className="border-b-2 border-cyan-300 inline-block pb-2 text-4xl text-black font-medium">About</h2>
                    </div>
                <p className="text-gray-600 mt-3">Eventify is a modern event management platform built to simplify how you plan, organize, and track events.
Whether you’re hosting corporate conferences, community meetups, or personal celebrations, Eventify gives you the tools to effortlessly create events, manage attendees, and keep everything running smoothly.

With real-time updates, attendee tracking, and an intuitive interface, Eventify ensures you spend less time worrying about logistics and more time enjoying your events.</p>
            </div>
        </div>
            </Container>
        </div>
    );
};

export default About;