import React from "react";
import "./AboutSection.css";
import AboutContent from "../components/AboutContent";
import AboutSkills from "../components/AboutSkills";
import about from "../Info/Info";
import { RiArrowDownSLine } from "react-icons/ri";
import ScreenSize from "../Hooks/ScreenSize";
import { smoothScrollTo } from "../utils/smoothScroll";


const AboutSection = () => {

    const dimensions = ScreenSize();

    var lineRepeat;

    if (dimensions.width >= 1100) {
        lineRepeat = 100;
    } else if (dimensions.width >= 768) {
        lineRepeat = 60;
    } else {
        lineRepeat = 30;
    }

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        smoothScrollTo(targetId);
    };

    return(
        <section id="about">
            <div className="section__container">
                    <div className="heading section-frame">
                    <h2 className="section__title">About</h2>
                    <p className="line" aria-hidden="true">{"_".repeat(lineRepeat)}</p>
                </div>
                <div className="section__about section__scroll section-frame">
                    <div className="about__content">
                        <h3 className="about__title">Skills</h3>
                        <div className="about__skills">
                            <AboutSkills />
                        </div>
                    </div>
                    {
                        about.about.map((abt) =>
                            <AboutContent
                                id={abt.id}
                                title={abt.title}
                                description={abt.description}
                            />
                        )
                    }
                </div>
                <div className="navArrow">
                    <a
                        className="pill-button navArrow__button"
                        href="#contact"
                        onClick={(event) => handleNavClick(event, "#contact")}
                        aria-label="Scroll to contact"
                    >
                        <RiArrowDownSLine />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;
