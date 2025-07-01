import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import useAxiosPublic from "@/hooks/useAxiosPublic";
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
        } catch (error: any) {
            if (error.response.data.error.code === 11000) {
                setMailErrMessage("This email address already exists");
            }
            setErrorMessage(error.response?.data?.error?.message);
        }
    }

    return (
        <main>
            <section>
                <Container>
                <div className="flex flex-col items-center justify-center min-h-screen">
                  
                  <div className="border-b-2 pb-2.5 border-cyan-300 mb-5">
                      <h2 className="text-center mt-10 text-4xl text-black">User Registration</h2>
                  </div>
                <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 min-w-9/12">
        <div className="flex gap-6">
            <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel className="text-cyan-400">Name</FormLabel>
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
                <FormLabel className="text-cyan-400">Email</FormLabel>
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
                <FormLabel className="text-cyan-400">Password</FormLabel>
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
                <FormLabel className="text-cyan-400">Photo</FormLabel>
                <FormControl>
                    <Input type="url" placeholder="Provide photo URL" required {...field}  />
                </FormControl>
                </FormItem>
                )} /> {/* Photo */}
                                
                    </div>{/* second-row */}

        <Button type="submit" className="bg-cyan-300 rounded-sm text-black hover:bg-cyan-200">Register</Button>
                        </form>
                        <p>Already have an account? <NavLink to={"/login"} className="underline font-medium">Login</NavLink></p>

                        </Form>
                        </div>
                </Container>
            </section>
        </main>
    );
};

export default Register;