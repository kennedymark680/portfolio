import GonnerVideo from '../resources/Screen Recording 2022-05-18 at 4.45.07 PM.mov'
import PennStar4 from '../resources/Screen Recording 2022-05-18 at 4.55.01 PM.mov'
import SpacePilgrims from '../resources/Screen Recording 2022-05-18 at 5.05.29 PM.mov'
import Project from './Project'
import { useState } from 'react'


const Projects = () => {
  

  const gonner = 'Gonner'
  const spacePilgrims = 'Space Pilgrims'
  const pennStar4 = 'PennStar4'

  const gonnerDesc = 'A responsive, interactive, full CRUD, full stack PERN game played with friends simultaneously on multiple devices.'
  const spacePilgrimsDesc = ''
  const pennStar4Desc = ''


  return (
    <div className='section-container'>
      <div className="title">Projects</div>
      <Project title={gonner} video={GonnerVideo} description={gonnerDesc}/>
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