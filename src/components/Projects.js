import Project from './Project'
import { useState } from 'react'
import { projects } from '../resources/ProjectData'

const Projects = () => {
  const [gonnerBtn, toggleGonnerBtn] = useState(true)
  const [spacePilgrimsBtn, toggleSpacePilgrims] = useState(false)
  const [pennStar4Btn, togglePennStar4Btn] = useState(false)

  const toggleFalse = () => {
    toggleGonnerBtn(false)
    toggleSpacePilgrims(false)
    togglePennStar4Btn(false)
  }

  return (
    <div className="section-container" id="projects">
      <div className="title">Projects</div>
      <div className="project-buttons">
        <button onClick={() => (toggleFalse(), toggleGonnerBtn(!gonnerBtn))}>
          Gonner
        </button>
        <button
          onClick={() => (
            toggleFalse(), toggleSpacePilgrims(!spacePilgrimsBtn)
          )}
        >
          Space Pilgrims
        </button>
        <button
          onClick={() => (toggleFalse(), togglePennStar4Btn(!pennStar4Btn))}
        >
          PennStar4
        </button>
      </div>
      {gonnerBtn ? <Project project={projects[0]} /> : null}
      {spacePilgrimsBtn ? <Project project={projects[1]} /> : null}
      {pennStar4Btn ? <Project project={projects[2]} /> : null}
    </div>
  )
}

export default Projects
