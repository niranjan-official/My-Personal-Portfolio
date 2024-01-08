import "./App.css";
import Main from './Pages/Home/Main'
import About from './Pages/About/About'
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/Projects/Projects";
import Contacts from "./Pages/Contacts/Contacts";
import Footer from "./components/Footer/Footer";
import { Fragment, useState } from "react";
import ScrollUp from "./Styles/ScrollUp/ScrollUp";
import Loading from "./components/loading/Loading";

function App() {

  const [load,setLoad] = useState(true)
  setInterval(() => {
    setLoad(false);
  }, 4000);

    return (
    <Fragment>
      {
        load && <Loading/>
      }
      {
        !load && <Main/>
      }
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <Footer/>
      <ScrollUp/>
    </Fragment>
    )
}

export default App;
