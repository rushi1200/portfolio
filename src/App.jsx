import './App.css'
import Home from '../src/HOME/Home.jsx'
import Project from '../src/Project/Project.jsx'
import Skills from './Skills/Skills.jsx'
import Contact from './Contact/Contact.jsx'
import Experience from './Experience/Experience.jsx'
function App() {
 
  return (
    <>

      <div class="allpages">

      

          <Home/>
         <Project/> 
         <Skills/> 
         <Experience/>
                   
          <Contact/>       
      
      </div>
    </>
  )
}

export default App
