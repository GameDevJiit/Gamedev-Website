import { useState, useEffect } from 'react';
import About from "./components/About";
import Home from "./components/Home.jsx";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Event.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AboutMb from "./components/AboutMb.jsx";
import constants from "../constants.js";

function App() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // Tailwind's md breakpoint
        };
        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <main className="relative min-h-screen w-screen overflow-x-hidden">
            <NavBar />
            <Home />
            {isMobile ? <AboutMb /> : <About />}
            <Features />
            {constants.isEventOn && <Story/>}
            <Contact />
            <Footer />
        </main>
    );
}

export default App;