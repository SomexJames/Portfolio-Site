import React from "react";
import "./HomeSection.css";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import { RiArrowDownSLine } from "react-icons/ri";
import main from "../Info/Info";
import ScreenSize from "../Hooks/ScreenSize";


const HomeSection = () => {

    const dimensions = ScreenSize();

    var lineRepeat;

    if (dimensions.width >= 768) {
        lineRepeat = 50;
    } else {
        lineRepeat = 30;
    }

    return(
        <section id="home">
            <div className="bg__image">
                <div className="section__home">
                    <div className="home__content">
                        <div className="name">I am {main.main.name}.</div>
                        <div className="description">{main.main.description}</div>
                        <div className="line">{"_".repeat(lineRepeat)}</div>
                        <div className="socials">
                            <div className="github">
                                <a href="https://github.com/SomexJames" target="_blank"><FaGithub /></a>
                            </div>
                            <div className="linkedin">
                                <a href="https://www.linkedin.com/in/bjkang17/" target="_blank"><FaLinkedin /></a>
                            </div>
                            <div className="filealt">
                                <a href={main.main.resume} target="_blank"><FaFileAlt /></a>
                            </div>
                        </div>
                    </div>
                    <div className="navArrow">
                        <a href="#portfolio"><RiArrowDownSLine /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection;
