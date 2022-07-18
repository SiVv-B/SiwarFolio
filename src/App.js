import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NavBar from './componenets/NavBar'
import Banner from './componenets/Banner'
import Skills from './componenets/Skills'
import Projects from './componenets/Projects'
import Contact from './componenets/Contact'
import Footer from './componenets/Footer'
function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
