const Project = ({project}) => {
  return (
    <div className="project">
      <video className='video' autoPlay controls muted loop>
        <source src={project.video} type='video/mp4'/>
      </video>
      <div className="project-text-section">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <a href={project.links[0]} target="_blank">Webpage</a>
        <a href={project.links[1]} target="_blank">FrontEnd</a>
        <a href={project.links[2]} target="_blank">BackEnd</a>
      </div>
      <ul className="tech-list">
        {project.tech.map((tech) => (
          <li key={tech}><span>√ </span>{tech}</li>
        ))}
        {/* <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li>
        <li><span>√ </span>PostgreSQL</li> */}
      </ul>
    </div>
  )
}

export default Project