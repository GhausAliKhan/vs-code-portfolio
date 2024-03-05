import './home.css';

function Home() {
  return (
    <div className="home">
      <div className="heading">
        <h1>Ghaus Ali Khan</h1>
        <h2>Full Stack Web Developer</h2>
      </div>
      <div className="content">
        <div className="content-left">
          <div className="start">
            <h3>Start</h3>
            <a href="/skills">
              <i className="fa-solid fa-list" />
              Skills ...
            </a>
            <a href="/experience">
              <i className="fa-solid fa-hashtag" />
              Experience ...
            </a>
            <a href="/projects">
              <i className="fa-regular fa-folder-open" />
              Projects ...
            </a>
            <a href="/contact">
              <i className="fa-regular fa-comment-dots" />
              Contact ...
            </a>
          </div>
          <div className="recent">
            <h3>Recent</h3>
            <div>
              <h4>Projects</h4>
              <p>E:/ghausalikhan/projects/Space-Travellers-Hub</p>
            </div>
            <div>
              <h4>Experience</h4>
              <p>E:/ghausalikhan/pages/Experience</p>
            </div>
            <div>
              <h4>Projects</h4>
              <p>E:/ghausalikhan/projects/Cry-for-Crypto</p>
            </div>
            <div>
              <h4>Projects</h4>
              <p>E:/ghausalikhan/projects/Book-A-Motorcycle</p>
            </div>
          </div>
        </div>
        <div className="content-right">
          <div className="about">
            <h3>About</h3>
            <div className="box">
              <div className="flex">
                <i className="fa-brands fa-linkedin" />
                <a href="https://www.linkedin.com/in/ghausalikhan/">
                  LinkedIn Profile
                </a>
              </div>
              <div className="line" />
            </div>
            <div className="box">
              <div className="flex">
                <i className="fa-brands fa-github" />
                <a href="https://github.com/GhausAliKhan">GitHub Page</a>
              </div>
              <div className="line" />
            </div>
            <div className="box">
              <div className="flex">
                <i className="fa-brands fa-medium" />
                <a href="https://medium.com/@ghauskhan1616">Medium</a>
              </div>
              <div className="line" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
