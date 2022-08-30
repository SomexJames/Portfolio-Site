import React from "react";
import "./AboutSection.css";
import about from "../Info/Info"
import ScreenSize from "../Hooks/ScreenSize";
import AboutContent from "../components/AboutContent";
import { RiArrowDownSLine } from "react-icons/ri";
import AboutSkills from "../components/AboutSkills";


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

    return(
        <section id="about">
            <div className="section about">
                <div className="heading">
                    <div className="section__title">About</div>
                    <div className="line">{"_".repeat(lineRepeat)}</div>
                </div>
                <div className="section__about">
                    <div className="about__content">
                        <div className="about__title">Skills</div>
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
            </div>
            <div className="navArrow"><a href="#contact"><RiArrowDownSLine /></a></div>
        </section>
    )
}

export default AboutSection;