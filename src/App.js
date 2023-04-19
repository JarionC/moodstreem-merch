import React, { Component } from "react";
import { browserHistory, Route, Routes } from 'react-router';
import Home from "./components/home";
import  About  from "./components/about";
import  Store  from "./components/store";
import  Contact  from "./components/contact";
import { Link } from "react-router-dom";
import { redirect } from "react-router-dom";
import Logo from "./icons/main";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/app.css";

const handleMenuClick = () => {
  const linkContainer = document.getElementById("link-container");
  const menuCover = document.querySelector(".menuCoverClass");
  linkContainer.classList.toggle("show");
  menuCover.classList.toggle("show");
};

class App extends Component {
  
  constructor(props) {
    super(props);
    //this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
    
    this.state = {
     // menuCoverClass: "menu-cover-closed"
    };
  }
  
  

  render() {
    return (
      <div>
  <div className="nav-container">
    <a href="/" className="brand">
      <span className="logo-span"><Logo></Logo></span>
      <span className="brand-text">MoodStreem</span>
    </a>
    
    <div className="nav-menu-btn" onClick={handleMenuClick}>≡</div>
    <div className="link-container" id="link-container">
      <li className="link">
        <Link to={"/store"} >
          Store
        </Link>
      </li>
      <li className="link">
        <Link to={"/about"} >
          What is MoodStreem?
        </Link>
      </li>
      <li className="link">
        <Link to={"/contact"} >
          Contact Us
        </Link>
      </li>
    </div>
  </div>
  
  <div className="menuCoverClass">
    <div className="close-btn" onClick={handleMenuClick}>×</div>
    <div className="mobile-link-wrapper">
      <div className="mobile-link-container">
        <li className="link">
          <Link to={"/store"} >
            Store
          </Link>
        </li>
        <li className="link">
          <Link to={"/about"} >
            What is MoodStreem?
          </Link>
        </li>
        <li className="link">
          <Link to={"/contact"} >
            Contact Us
          </Link>
        </li>
      </div>
    </div>
  </div>
 
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/store" element={<Store/>} />
    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
  </Routes>

  <div className="footer-container">
    <div className="footer-brand"><a>MoodStreem</a></div>
  </div>
</div>


    )
  }
}


//<Route path="/tutorials/:id" element={<Tutorial/>} />
export default App;