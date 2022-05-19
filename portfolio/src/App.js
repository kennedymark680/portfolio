import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Projects />
    </div>
  )
}

export default App
