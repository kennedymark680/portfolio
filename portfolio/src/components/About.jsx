import ProfilePicture from '../resources/IMG_9217.jpg'

const About = () => {
  return (
    <div className="about">
      <div className="about-title">About</div>
      <div className="about-info">
        <div className="about-info-text">I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.I am a software developer.</div>
        <div className="about-info-image">
          <img src={ProfilePicture} alt="Mark Kennedy" className="profile-picture"/>
          {/* <div className="profile-picture"></div> */}
        </div>
      </div>
    </div>
  )
}

export default About