import About from "./About/About";
import Hero from "./Hero/Hero";
import Newsletter from "./Newsletter/Newsletter";
import Services from "./Services/Services";

const Home = () => {
    return (
        <main>
            <section>
                <Hero></Hero>
                <About></About>
                <Services></Services>
                <Newsletter></Newsletter>
            </section>
        </main>
    );
};

export default Home;