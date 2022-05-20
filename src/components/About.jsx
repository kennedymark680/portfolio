import ProfilePicture from '../resources/IMG_9217.jpg'
import Skills from './Skills'

const About = () => {
  return (
    <div className="section-container">
      <div className="title">About</div>
      <div className="about-info">
        <div className="about-info-text">
          <p>I am a software engineer skilled in both the front and back-end of web development. As a former professional helicopter pilot I’ve learned the skill of solving problems independently and the art of effectively communicating and collaborating with a team. My curiosity led me to software engineering and an industry whose limits are only self imposed.</p>
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