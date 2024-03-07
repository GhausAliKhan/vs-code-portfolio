import { Link } from 'react-router-dom';
import './projects.css';
import CryForCrypto from '../../images/Cry-for-Crypto.PNG';
import MathMagicians from '../../images/Math-Magicians.PNG';
import SpaceTravellersHub from '../../images/Space-Travellers-Hub.PNG';
import TodoList from '../../images/Todo-List-App.PNG';
import BookAMotorcycle from '../../images/Book-A-Motorcycle.PNG';
import Categories from '../../images/Categories.PNG';

function Projects() {
  return (
    <div className="page">
      <div className="heading">
        <h1>Projects</h1>
      </div>
      <div className="projects">
        <div className="projectBox">
          <Link to="/cry-for-crypto">
            <img src={CryForCrypto} alt="Cry For Crypto" />
          </Link>
          <div className="projectBoxContent">
            <h4>Cry For Crypto</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/cry-for-crypto">
                GitHub
              </a>
              <a href="https://cry-for-crypto.vercel.app/">Live Project Link</a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <Link to="/math-magicians">
            <img src={MathMagicians} alt="Math Magicians" />
          </Link>
          <div className="projectBoxContent">
            <h4>Math Magicians</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/math-magicians">
                GitHub
              </a>
              <a href="https://math-magicians-zeta.vercel.app/">
                Live Project Link
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <Link to="/space-travellers-hub">
            <img src={SpaceTravellersHub} alt="Space Travellers Hub" />
          </Link>

          <div className="projectBoxContent">
            <h4>Space Travellers Hub</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/space-travelers-hub">
                GitHub
              </a>
              <a href="https://space-travelers-hub-jade.vercel.app/">
                Live Project Link
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <Link to="/todo-list-app">
            <img src={TodoList} alt="Todo List" />
          </Link>
          <div className="projectBoxContent">
            <h4>Todo List</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/Todo-App">GitHub</a>
              <a href="https://ghausalikhan.github.io/Todo-App/dist/">
                Live Project Link
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <Link to="/book-a-motorcycle">
            <img src={BookAMotorcycle} alt="Book A Motorcycle" />
          </Link>
          <div className="projectBoxContent">
            <h4>Book A Motorcycle</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/Book-A-Motorcycle-Back-End">GitHub</a>
              <a href="https://www.loom.com/share/97f4b82ec40f431dbf3947de7a102239?sid=7de5edf2-73c6-42d8-aa8d-0da6e29dd1ff">
                Video Overview
              </a>
            </div>
          </div>
        </div>
        <div className="projectBox">
          <Link to="/book-a-motorcycle">
            <img src={Categories} alt="Spend Smart" />
          </Link>
          <div className="projectBoxContent">
            <h4>Spend Smart</h4>
            <div className="Links">
              <a href="https://github.com/GhausAliKhan/budget-app">GitHub</a>
              <a href="https://rails-br62.onrender.com/categories/new">
                Live Project Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
