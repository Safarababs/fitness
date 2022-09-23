import About from "./about";
import Header from "./header";
import Home from "./home";
import Register from "./register";
import Services from "./services";
import Trainer from "./trainer";
import Plan from "./plan";
import Footer from "./footer";

function App(){
    return (
        <>
            <Header />
            <Home />
            <About />
            <Services />
            <Trainer />
            <Plan />
            <Register />
            <Footer />
        </>
    )
}

export default App;