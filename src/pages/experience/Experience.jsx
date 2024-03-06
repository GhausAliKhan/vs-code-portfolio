import './experience.css';

function Experience() {
  return (
    <div className="page">
      <div className="heading">
        <h1>Experience</h1>
      </div>
      <div className="experience">
        <div className="experienceTitleAndDate">
          <div>
            <h3>Full Stack Software Developer </h3>
            <p>Highlighted Personal Projects</p>
          </div>
          <div>
            <p>Remote</p>
            <p>June 2023 - Present</p>
          </div>
        </div>
        <div className="experienceDescription">
          <div className="description">
            <p>
              I have built over 20 projects independently and via pair
              programming using different tech-stack: HTML5/CSS3, JavaScript,
              React & Redux, ruby, and Ruby on Rails. Some of the projects
              include:
            </p>
          </div>
          <div className="highlightedProjects" />
          <div className="singleProject">
            <h4>Book A Motorcycle</h4>
            <p>
              A React & Redux app with Ruby on Rails backend for adding and
              managing bikes.
            </p>
            <div className="projectLinks">
              <a href="https://github.com/GhausAliKhan/Book-A-Motorcycle-Back-End">
                Back-End-Repo
              </a>

              <a href="https://github.com/GhausAliKhan/book-a-motorcycle-front-end">
                Front-End-Repo
              </a>

              <a href="https://www.loom.com/share/97f4b82ec40f431dbf3947de7a102239?sid=079561fc-f101-499e-887c-277330b93e51">
                Video Overview
              </a>
            </div>
          </div>
          <div className="singleProject">
            <h4>Spend Smart</h4>
            <p>
              A Ruby on Rails app where you can manage your budget. you have a
              list of transactions associated with a category so that you can
              see how much money you spent and on what.
            </p>
            <div className="projectLinks">
              <a href="https://github.com/GhausAliKhan/budget-app">GitHub</a>

              <a href="https://www.loom.com/share/139e0278309b404597f4661d2cd642cf?sid=bae3c777-75cc-4d8c-8f48-3f1ff916369f">
                Video Overview
              </a>
            </div>
          </div>
          <div className="singleProject">
            <h4>Space Travllers Hub</h4>
            <p>
              A React & Redux app where users are allowed to book rockets and
              join selected space missions
            </p>
            <div className="projectLinks">
              <a href="https://github.com/GhausAliKhan/space-travelers-hub">
                GitHub
              </a>

              <a href="https://space-travelers-hub-jade.vercel.app/">
                Live Project Link
              </a>
            </div>
          </div>
          <div className="singleProject">
            <h4>Cry for Crypto</h4>
            <p>
              A React & Redux app that shows real-time cryptocurrencies using
              the CoinCap API. Include a market over
            </p>
            <div className="projectLinks">
              <a href="https://github.com/GhausAliKhan/cry-for-crypto">
                GitHub
              </a>

              <a href="https://cry-for-crypto.vercel.app/">Live Project Link</a>
            </div>
          </div>
          <div className="singleProject">
            <h4>Math Magicians</h4>
            <p>
              Math-Magicians is made with React, and Redux and is intended to
              display a single-page application with a calculator, math quotes,
              and a home page.
            </p>
            <div className="projectLinks">
              <a href="https://github.com/GhausAliKhan/math-magicians">
                GitHub
              </a>

              <a href="https://math-magicians-zeta.vercel.app/">
                Live Project Link
              </a>
            </div>
          </div>
          <div className="singleProject">
            <div className="projectLinks">
              <p>
                <a href="https://github.com/GhausAliKhan?tab=repositories">
                  Click Here to view more Projects
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
