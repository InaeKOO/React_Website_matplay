import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom"
import "./Nav.css";

function Nav() {
const [show, handleShow] = useState(false);
const history = useNavigate();

const trainsitionNavBar = () => {
    if (window.scrollY > 100) {
        handleShow(true);
    }
    else {
        handleShow(false);
    }
}

useEffect(() => {
    window.addEventListener("scroll", trainsitionNavBar);
    return () => window.removeEventListener('scroll', trainsitionNavBar);
},[]);

  return (
    <div className={`nav in ${show && "nav__black"}`}>
        <div className='nav__contents'>
        <img 
        onClick={() => history.push("/")}
        className="nav__logo"
            src=""
            alt=""
        />

        <img 
        onClick={() => history.push("/profile")}
        className="nav__avatar"
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
        />
        </div>        
    </div>
  )
}

export default Nav
