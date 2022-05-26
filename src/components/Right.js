import GitHub from '../resources/github-10-128.ico'
import LinkedIn from '../resources/linkedin-3-128.png'

const Right = () => {
  return (
    <div>
      <div orientation="left" className="side-right">
        <ul className="link-list">
          <li>
            {/* <div className="email">kennedymark680@gmail.com</div> */}
            <div className="email">
              <a href="mailto:kennedymark680@gmail.com">
                kennedymark680@gmail.com
              </a>
            </div>
          </li>
          <li>
            <a href="https://github.com/kennedymark680" target="_blank">
              <img src={GitHub} alt="github logo" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/kennedymark680/"
              target="_blank"
            >
              <img src={LinkedIn} alt="linkedIn" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Right
