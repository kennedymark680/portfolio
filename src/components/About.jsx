import ProfilePicture from '../resources/IMG_9217.jpg'
import Skills from './Skills'

const About = () => {
  return (
    <div className="section-container">
      <div className="title">About</div>
      <div className="about-info">
        <div className="about-info-text">
          <p>I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.</p>
          <Skills />
          </div>
        <div className="about-info-image">
          <img src={ProfilePicture} alt="Mark Kennedy" className="profile-picture"/>
        </div>
      </div>
    </div>
  )
}

export default About