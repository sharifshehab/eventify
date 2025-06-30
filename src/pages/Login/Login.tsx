import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/contexts/ProviderContext";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { useContext } from "react";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLocation, useNavigate } from "react-router";

const Login = () => {
    const axiosPublic = useAxiosPublic();
    const form = useForm();
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state ? location?.state : '/';


    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        try {
            const user = await axiosPublic.get(`/users/get-user?email=${data.email}&password=${data.password}`);
            login(user?.data?.data);
            navigate(from, {replace: true});
        } catch (error) {
            console.log(error);
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
            name="email"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                    <Input type="email" placeholder="Write your email" required {...field}  className="peer bg-darkColor border-[#e5eaf2] border outline-none  pe-5 py-3 w-full focus:border-yellow-400 transition-colors duration-300"/>
                </FormControl>
                </FormItem>
            )}/> {/* email */}
            <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
                <FormItem className="w-full">
                <FormLabel>Password</FormLabel>
                <FormControl>
                    <Input type="password" placeholder="Write your password" required {...field}  />
                </FormControl>
                </FormItem>
                )} /> {/* password */}
                                
                </div>
    
        <Button type="submit">Login</Button>
      </form>
    </Form>
                </Container>
            </section>
        </main>
    );
};

export default Login;