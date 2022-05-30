import GonnerVideo from '../resources/Screen Recording 2022-05-18 at 4.45.07 PM.mp4'
import PennStar4 from '../resources/Screen Recording 2022-05-18 at 4.55.01 PM.mov'
import SpacePilgrims from '../resources/Screen Recording 2022-05-18 at 5.05.29 PM.mov'
import Project from './Project'
import { useState } from 'react'

const Projects = () => {
  const gonner = {
    title: 'Gonner',
    description:
      'A responsive, interactive, full CRUD, full stack PERN game played with friends simultaneously.',
    video: GonnerVideo,
    tech: ['React', 'PostgreSQL', 'NodeJS', 'ExpressJS'],
    links: [
      'https://gonner.herokuapp.com/',
      'https://github.com/kennedymark680/gonner',
      'https://github.com/kennedymark680/gonner_backend'
    ]
  }

  const spacePilgrims = {
    title: 'Space Pilgrims',
    description:
      'A responsive, interactive, full CRUD, full stack PERN game played with friends simultaneously.',
    video: SpacePilgrims,
    tech: ['React', 'PostgreSQL', 'NodeJS', 'ExpressJS'],
    links: [
      'https://space-pilgrims-frontend.herokuapp.com/',
      'https://github.com/kuntzd99/Space-Pilgrims-Frontend',
      'https://github.com/kuntzd99/Space-Pilgrims-Backend'
    ]
  }
  const pennStar4 = {
    title: 'PennStar4',
    description:
      'A responsive, interactive, full CRUD, full stack PERN game played with friends simultaneously.',
    video: PennStar4,
    tech: ['JavaScript', 'CSS', 'HTML', 'Custom Art'],
    links: [
      'https://pennstar4.surge.sh/',
      'https://github.com/kennedymark680/pennStar4'
    ]
  }

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
      {gonnerBtn ? <Project project={gonner} /> : null}
      {spacePilgrimsBtn ? <Project project={spacePilgrims} /> : null}
      {pennStar4Btn ? <Project project={pennStar4} /> : null}
    </div>
  )
}

export default Projects
