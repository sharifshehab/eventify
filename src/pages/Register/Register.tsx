import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import type { AxiosError } from "axios";
import { useState } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";

const Register = () => {
    const axiosPublic = useAxiosPublic();
    const form = useForm();
    const navigate = useNavigate();
    const [errMessage, setErrorMessage] = useState();
    const [mailErrMessage, setMailErrMessage] = useState<string>();

    const onSubmit: SubmitHandler<FieldValues> = async (userData) => {
        try {
            await axiosPublic.post('/users/create-user', userData); 
            navigate("/login");
        } catch (error) {
            if ((error as AxiosError).response.data.error.code === 11000) {
                setMailErrMessage("This email address already exists");
            }
            setErrorMessage((error as AxiosError).response?.data?.error?.message);
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
            name="name"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Name</FormLabel>
                <FormControl>
                    <Input type="text" placeholder="Write user name" required {...field}  className="peer bg-darkColor border-[#e5eaf2] border outline-none  pe-5 py-3 w-full focus:border-yellow-400 transition-colors duration-300"/>
                </FormControl>
                </FormItem>
            )}/> {/* name */}
            <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="Write email address" required {...field}  />
                    </FormControl>
                    {mailErrMessage && <p className="text-red-500">{mailErrMessage}</p>}
                </FormItem>
                )} /> {/* email */}
                                
                </div>{/* first-row */}
                            
        <div className="flex gap-6">
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Write password" required {...field} />
                    </FormControl>
                   {errMessage && <p className="text-red-500">{errMessage}</p>}
                </FormItem>
            )}/> {/* password */}
            <FormField
            control={form.control}
            name="photoURL"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Photo</FormLabel>
                <FormControl>
                    <Input type="url" placeholder="Provide photo URL" required {...field}  />
                </FormControl>
                </FormItem>
                )} /> {/* Photo */}
                                
                    </div>{/* second-row */}

        <Button type="submit">Register</Button>
                        </form>
                        <p>Already have an account? <NavLink to={"/login"} className="underline font-medium">Login</NavLink></p>

    </Form>
                </Container>
            </section>
        </main>
    );
};

export default Register;