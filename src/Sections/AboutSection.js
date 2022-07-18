import React from "react";
import "./AboutSection.css";
import AboutContent from "../components/AboutContent";
import AboutSkills from "../components/AboutSkills";
import about from "../Info/Info";
import { RiArrowDownSLine } from "react-icons/ri";


const AboutSection = () => {


    return(
        <section id="about">
            <div className="section about">
                <div className="heading">
                    <div className="section__title">About</div>
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
            <div className="navArrow">
                <a href="#contact"><RiArrowDownSLine /></a>
            </div>
        </section>
    )
}

export default AboutSection;