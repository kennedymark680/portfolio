const Project = ({title, video, description}) => {
  return (
    <div className="project">
      <video className='video' autoPlay controls muted loop>
        <source src={video} type='video/mp4'/>
      </video>
      <div className="project-text-section">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <ul className="tech-list">
        <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li>
      </ul>
    </div>
  )
}

export default Project