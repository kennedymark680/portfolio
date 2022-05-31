import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro.js'
import About from './components/About.js'
import Projects from './components/Projects'
import Left from './components/Left'
import Right from './components/Right'

function App() {
  return (
    <div className="App">
      <Nav />
      <Right />
      <Intro />
      <About />
      <Projects />
    </div>
  )
}

export default App
