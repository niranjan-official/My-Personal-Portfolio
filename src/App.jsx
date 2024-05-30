import Home from './Pages/Home'
import About from './Pages/About'
import Projects from "./Pages/Projects";
import Contacts from "./Pages/Contacts";
import Footer from "./components/Footer";
import ScrollUp from "./Styles/ScrollUp/ScrollUp";
import Navbar from "./components/Navbar";
function App() {

    return (
    <div className="w-screen h-max text-white">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <ScrollUp/>
    </div>
    )
}

export default App;
