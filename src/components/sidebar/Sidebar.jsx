import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sidebar.css';

function Sidebar() {
  const [isOpenArray, setIsOpenArray] = useState([true, true, true, true]);
  const [isRightTabOpen, setIsRightTabOpen] = useState(true);

  const toggleDropdown = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  const toggleRightTab = () => {
    setIsRightTabOpen(!isRightTabOpen);
  };

  return (
    <div className="sidebar">
      <div className="left-tab">
        <button
          className="toggle"
          type="button"
          aria-label="toggle"
          onClick={toggleRightTab}
        >
          <i className="fa-solid fa-bars" />
        </button>
        <i className="fa-solid fa-user" />
      </div>
      {isRightTabOpen && (
        <div className="right-tab">
          <div className="explorer">Explorer</div>
          <div className="dropdown">
            <button
              className="caret"
              type="button"
              onClick={() => toggleDropdown(0)}
            >
              <i className="fa-solid fa-caret-right" />
              About
            </button>
            {isOpenArray[0] && (
              <div>
                <ul className="items">
                  <li>
                    <i className="fa-brands fa-html5" />
                    <Link to="/" aria-label="Home">
                      index.html
                    </Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-css3" />
                    <Link to="/experience">experience.css</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-js" />
                    <Link to="/skills">skills.js</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="caret"
              type="button"
              onClick={() => toggleDropdown(1)}
            >
              <i className="fa-solid fa-caret-right" />
              Projects
            </button>
            {isOpenArray[1] && (
              <div>
                <ul className="items">
                  <li>
                    <i className="fa-brands fa-react" />
                    <Link to="/todo-list-app">Todo-List-App.jsx</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-react" />
                    <Link to="/cry-for-cypto">Cry-for-Crypto.jsx</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-react" />
                    <Link to="/math-magicians">Math-Magicians.jsx</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-react" />
                    <Link to="/space-travellers-hub">
                      Space-Travellers-Hub.jsx
                    </Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-gem" />
                    <Link to="/book-a-motorcycle">Book-A-Motorcycle.rb</Link>
                  </li>
                  <li>
                    <i className="fa-solid fa-gem" />
                    <Link to="/spend-smart">Spend-Smart.rb</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="caret"
              type="button"
              onClick={() => toggleDropdown(2)}
            >
              <i className="fa-solid fa-caret-right" />
              Contact
            </button>
            {isOpenArray[2] && (
              <div>
                <ul className="items">
                  <li>
                    <i className="fa-brands fa-google" />
                    <Link to="/contact">email.doc</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="dropdown">
            <button
              className="caret"
              type="button"
              onClick={() => toggleDropdown(3)}
            >
              <i className="fa-solid fa-caret-right" />
              Other
            </button>
            {isOpenArray[3] && (
              <div>
                <ul className="items">
                  <li>
                    <i className="fa-brands fa-readme" />
                    <Link to="/blogs">blogs.md</Link>
                  </li>
                  <li>
                    <i className="fa-brands fa-node-js" />
                    <Link to="/startup">startup.json</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
