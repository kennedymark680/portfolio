import GonnerVideo from '../resources/Screen Recording 2022-05-18 at 4.45.07 PM.mov'
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
    tech: ['React', 'PostgreSQL', 'NodeJS', 'ExpressJS'],
    links: [
      'https://pennstar4.surge.sh/',
      'https://github.com/kennedymark680/gonner',
      'https://github.com/kennedymark680/gonner_backend'
    ]
  }

  return (
    <div className="section-container">
      <div className="title">Projects</div>
      <Project project={gonner} />
      <Project project={spacePilgrims} />
      <Project project={pennStar4} />
      {/* <video className='video' autoPlay controls muted loop>
        <source src={GonnerVideo} type='video/mp4'/>
      </video>
      <video className='video' autoPlay controls muted loop>
        <source src={PennStar4} type='video/mp4'/>
      </video>
      <video className='video' autoPlay controls muted loop>
        <source src={SpacePilgrims} type='video/mp4'/>
      </video> */}
    </div>
  )
}

export default Projects
