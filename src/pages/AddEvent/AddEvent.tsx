import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AuthContext } from "@/contexts/ProviderContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";



const AddEvent = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);


    const form = useForm();

    const onSubmit: SubmitHandler<FieldValues>  = async (data) => {
        const eventData = {
            ...data, 
            AttendeeCount: 0,
            organizer: user.email,
            attendees: [],
        }
        const newEvent =await axiosPublic.post('/events/create-event', eventData);
        if (newEvent) {
            form.reset({
                title: "",
                name: "",
                dateTime: "",
                location: "",
                description: "",
            }); 
        }
    }

    return (
        <main>
            <section>
                <Container>
                    
                    <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <div className="flex gap-6">
                        
            <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Event Title</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Write Title" required {...field}  className="peer bg-darkColor border-[#e5eaf2] border outline-none  pe-5 py-3 w-full focus:border-yellow-400 transition-colors duration-300"/>
                </FormControl>
                </FormItem>
                                        )} /> {/* title */}
                                    
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Author Name</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Write Name" required {...field}  />
                </FormControl>
                </FormItem>
                )} /> {/* name */}
                                
                            </div>{/* first-row */}
                            
        <div className="flex gap-6">
            <FormField
            control={form.control}
            name="dateTime"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Date and Time</FormLabel>
                <FormControl>
                    <Input type="datetime-local" placeholder="Provide Date and Time" required {...field} />
                </FormControl>
                </FormItem>
            )}/> {/* Date and Time */}
            <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Location</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Write Location" required {...field}  />
                </FormControl>
                </FormItem>
                )} /> {/* name */}
                                
                            </div>{/* second-row */}
                            
        <div className="">
            <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Description</FormLabel>
                <FormControl>
                    <Textarea placeholder="Write description here."required {...field}/>
                </FormControl>
                </FormItem>
            )}/> {/* description */}
            
        </div>{/* third-row */}
                            


        <Button type="submit">Add Event</Button>
      </form>
                
    </Form>
                 
                    </Container>
            </section>
        </main>
    );
};

export default AddEvent;