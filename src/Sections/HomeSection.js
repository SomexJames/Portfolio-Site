import React from "react";
import "./HomeSection.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import main from "../Info/Info";
import ScreenSize from "../Hooks/ScreenSize";
import { smoothScrollTo } from "../utils/smoothScroll";


const HomeSection = () => {

    const dimensions = ScreenSize();

    var lineRepeat;

    if (dimensions.width >= 768) {
        lineRepeat = 50;
    } else {
        lineRepeat = 30;
    }

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        smoothScrollTo(targetId);
    };

    return(
        <section id="home">
            <div className="bg__image" aria-hidden="true"></div>
            <div className="section__container">
                <div className="heading section-frame"></div>
                <div className="section__home section__scroll">
                    <div className="home__container">
                        <div className="home__content">
                            <h1 className="name">I am <span className="name__accent">{main.main.name}</span>.</h1>
                            <p className="description">{main.main.description}</p>
                            <p className="line" aria-hidden="true">{"_".repeat(lineRepeat)}</p>
                            <div className="socials">
                                <div className="github">
                                    <a className="icon-button" href="https://github.com/SomexJames" target="_blank" rel="noreferrer"><FaGithub /></a>
                                </div>
                                <div className="linkedin">
                                    <a className="icon-button" href="https://www.linkedin.com/in/bjkang17/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
                                </div>
                                <div className="filealt">
                                    <a className="icon-button" href={main.main.resume} target="_blank" rel="noreferrer"><FaFileAlt /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="navArrow">
                    <a
                        className="pill-button navArrow__button"
                        href="#portfolio"
                        onClick={(event) => handleNavClick(event, "#portfolio")}
                        aria-label="Scroll to portfolio"
                    >
                        <RiArrowDownSLine />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;

