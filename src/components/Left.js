import GitHub from '../resources/github-10-128.ico'
import LinkedIn from '../resources/linkedin-3-128.png'

const Left = () => {
  return (
    <div className="side-left">
      <ul className="link-list">
        <li>
          <a href="https://github.com/kennedymark680" target="_blank">
            <img src={GitHub} alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/kennedymark680/" target="_blank">
            <img src={LinkedIn} alt="linkedIn" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Left
