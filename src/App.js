import './App.css'
import Nav from './components/Nav'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
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
