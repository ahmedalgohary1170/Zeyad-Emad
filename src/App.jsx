
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ExperienceSection from './components/Experience'
import Service from './components/Service'

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <Service />
        <ExperienceSection />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
