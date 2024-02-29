import React, { useState } from 'react';
import './sidebar.css';

function Sidebar() {
  const [isOpenArray, setIsOpenArray] = useState([true, true, true, true]);

  const toggleDropdown = (index) => {
    const updatedIsOpenArray = [...isOpenArray];
    updatedIsOpenArray[index] = !updatedIsOpenArray[index];
    setIsOpenArray(updatedIsOpenArray);
  };

  return (
    <div className="sidebar">
      <div className="left-tab">
        <i className="fa-solid fa-bars" />
        <i className="fa-solid fa-user" />
      </div>
      <div className="right-tab">
        <div className="explorer">Explorer</div>
        <div className="dropdown">
          <button type="button" onClick={() => toggleDropdown(0)}>
            <i className="fa-solid fa-caret-right" />
            About
          </button>
          {isOpenArray[0] && (
            <div>
              <ul className="items">
                <li>
                  <i className="fa-brands fa-html5" />
                  <a href="/" aria-label="Home">
                    index.html
                  </a>
                </li>
                <li>
                  <i className="fa-brands fa-css3" />
                  <a href="/experience">experience.css</a>
                </li>
                <li>
                  <i className="fa-brands fa-js" />
                  <a href="/skills">skills.js</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button type="button" onClick={() => toggleDropdown(1)}>
            <i className="fa-solid fa-caret-right" />
            Projects
          </button>
          {isOpenArray[1] && (
            <div>
              <ul className="items">
                <li>
                  <i className="fa-brands fa-react" />
                  <a href="/todo-list-app">Todo-List-App.jsx</a>
                </li>
                <li>
                  <i className="fa-brands fa-react" />
                  <a href="/cry-for-cypto">Cry-for-Crypto.jsx</a>
                </li>
                <li>
                  <i className="fa-brands fa-react" />
                  <a href="/math-magicians">Math-Magicians.jsx</a>
                </li>
                <li>
                  <i className="fa-solid fa-gem" />
                  <a href="/book-a-motorcycle">Book-A-Motorcycle.rb</a>
                </li>
                <li>
                  <i className="fa-solid fa-gem" />
                  <a href="/spend-smart">Spend-Smart.rb</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button type="button" onClick={() => toggleDropdown(2)}>
            <i className="fa-solid fa-caret-right" />
            Contact
          </button>
          {isOpenArray[2] && (
            <div>
              <ul className="items">
                <li>
                  <i className="fa-brands fa-google" />
                  <a href="/contact">email.doc</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="dropdown">
          <button type="button" onClick={() => toggleDropdown(3)}>
            <i className="fa-solid fa-caret-right" />
            Other
          </button>
          {isOpenArray[3] && (
            <div>
              <ul className="items">
                <li>
                  <i className="fa-brands fa-readme" />
                  <a href="/blogs">blogs.md</a>
                </li>
                <li>
                  <i className="fa-brands fa-node-js" />
                  <a href="/startup">startup.json</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
