import './topbar.css';

function Topbar() {
  return (
    <div className="topbar">
      <div className="links">
        <ul>
          <li>
            <a href="/">
              <i className="fa-solid fa-house" aria-label="Home" />
            </a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/experience">Experience</a>
          </li>
          <li>
            <a href="/skills">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
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
