import React from "react";
import "./Navbar.css";
import { useState, useEffect } from "react";
import KangLogo from "../assets/KANG_LOGO.png";

const Navbar = () => {

    let listener = null;
    const [scrollState, setScrollState] = useState("top");
  
    useEffect(() => {
      listener = document.addEventListener("scroll", e => {
        var scrolled = document.scrollingElement.scrollTop
        if (scrolled >= 120) {
          if (scrollState !== "on") setScrollState("on")
        } else {
          if (scrollState !== "top") setScrollState("top")
        }
      })
      return () => {
        document.removeEventListener("scroll", listener)
      }
    }, [scrollState])

    return(
        <div className={`navbar-${scrollState}`}>
            <div className="navbar__name">
                <a href="#home" className="nav-link logo-link"><img src={KangLogo} alt="Kang logo"></img></a>
            </div>
            <div className="navbar__right">
                <a className="nav-link" href="#home">Home</a>
                <a className="nav-link" href="#portfolio">Portfolio</a>
                <a className="nav-link" href="#about">About</a>
                <a className="nav-link" href="#contact">Contact</a>
            </div>
        </div>
    )
}

export default Navbar;
