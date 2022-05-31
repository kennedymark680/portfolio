import Resume from '../resources/Mark Kennedy - 5-17-22 (1).pdf'

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <ol>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href={Resume} target="_blank">
              Resume
            </a>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Nav
