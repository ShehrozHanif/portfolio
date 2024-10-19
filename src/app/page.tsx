import About from "./components/About"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Navbar from "./components/Nav"
import Project from "./components/Project"
import Skill from "./components/Skill"




export default function Home() {
  return (
    <div>
     <Navbar/>
     <Hero/>
     <About/>
     <Skill/>
     <Project/>
     <Contact/>
     <Footer/>
    </div>
  );
}
