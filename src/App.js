import About from "./Components/About";
import Skills from "./Components/Skills"
import Home from "./Components/Home"
import NavBar from "./Components/NavBar"
import SocialLinks from "./Components/SocialLinks"
import Contact from "./Components/Contact";


export default function App() {
  return (
   <div>
    <NavBar />
    <Home/>
<About/>
<Skills/>

<Contact/>
    <SocialLinks/>
   </div>
    
  )
}


