import About from "./components/About";
import Home from "./components/Home.jsx";
import NavBar from "./components/Navbar";
import Features from "./components/Features";
import Story from "./components/Event.jsx";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Home />
      <About />
      <Features />
      <Story />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
