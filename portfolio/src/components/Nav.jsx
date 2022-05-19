import Resume from '../resources/Mark Kennedy - 5-17-22 (1).pdf'

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <ol>
          <li>About</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Contact</li>
          <a href={Resume}>Resume</a>
        </ol>
      </div>
    </div>
  )
}

export default Nav