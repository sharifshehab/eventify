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
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";



const EditEvent = () => {
    const axiosPublic = useAxiosPublic();

    const navigate = useNavigate();
    
    const {_id, title, name, dateTime, location, description, organizer } = useLoaderData();

    const form = useForm({
        defaultValues: {
            title: title,
            name: name,
            dateTime: dateTime,
            location: location,
            description: description
        }
    });

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        await axiosPublic.patch(`events/edit-event/${_id}`, data);
        navigate(`/users-event/${organizer}`);
    }

    return (
        <main>
            <section>
                <Container>
                    <div className="flex flex-col items-center justify-center min-h-screen">
                  
                        <div className="border-b-2 pb-2.5 border-cyan-300">
                            <h2 className="text-center mt-10 text-4xl text-black">Update Event</h2>
                        </div>
                        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full mt-6">
                                <div className="flex gap-6">
                            
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormLabel className="text-cyan-400">Event Title</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="Write Title" required {...field} className="rounded-sm"/>
                    </FormControl>
                    </FormItem>
                                            )} /> {/* title */}
                                        
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormLabel className="text-cyan-400">Name</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="Write Name" required {...field}  className="rounded-sm"/>
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
                    <FormLabel className="text-cyan-400">Date and Time</FormLabel>
                    <FormControl>
                        <Input type="datetime-local" placeholder="Provide Date and Time" required {...field} className="rounded-sm"/>
                    </FormControl>
                    </FormItem>
                )}/> {/* Date and Time */}
                <FormField
                control={form.control}
                name="location"
                render={({ field }) => (
                    <FormItem className="w-full">
                    <FormLabel className="text-cyan-400">Location</FormLabel>
                    <FormControl>
                        <Input type="text" placeholder="Write Location" required {...field}  className="rounded-sm"/>
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
                    <FormLabel className="text-cyan-400">Description</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Write description here."required {...field} className="rounded-sm"/>
                    </FormControl>
                    </FormItem>
                )}/> {/* description */}
                
            </div>{/* third-row */}
                                
            <Button type="submit" className="bg-cyan-300 rounded-sm text-black hover:bg-cyan-200">Update Event</Button>
        </form>

                        </Form>
                        </div>
                        
                </Container>
            </section>
        </main>
    );
};

export default EditEvent;