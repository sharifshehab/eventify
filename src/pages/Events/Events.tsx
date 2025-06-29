import Container from "@/components/layout/Container";
import SingleEvent from "./SingleEvent/SingleEvent";

const Event = () => {
    return (
        <Container>
        <div className="grid grid-cols-4 gap-12 justify-items-center">
           <SingleEvent/>
           <SingleEvent/>
           <SingleEvent/>
           <SingleEvent/>
        </div>
        </Container>
    );
};

export default Event;