import { Link } from 'react-router-dom';
import './topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="links">
        <ul>
          <li>
            <Link to="/">
              <i className="fa-solid fa-house" aria-label="Home" />
            </Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li>
            <Link to="/experience">Experience</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
      <div className="icons">
        <i className="fa-solid fa-circle-xmark" />
        <i className="fa-solid fa-window-restore" />
        <i className="fa-solid fa-minimize" />
      </div>
    </div>
  );
}

export default Topbar;
