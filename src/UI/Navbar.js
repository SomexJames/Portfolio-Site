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
            <div className="navbar__mobile">
                <a href="#home" className="nav-link logo-link navbar__logo"><img src={KangLogo} alt="Kang logo"></img></a>
            </div>
            <div className="navbar__pill">
                <div className="navbar__name">
                    <a href="#home" className="nav-link logo-link"><img src={KangLogo} alt="Kang logo"></img></a>
                </div>
                <div className="navbar__right">
                    <a className="nav-link" href="#home"><p>Home</p></a>
                    <a className="nav-link" href="#portfolio"><p>Portfolio</p></a>
                    <a className="nav-link" href="#about"><p>About</p></a>
                    <a className="nav-link" href="#contact"><p>Contact</p></a>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
