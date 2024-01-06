import React from "react";
import "./PortfolioSection.css";
import PortfolioContent from "../components/PortfolioContent";
import projects from "../Info/Info";
import { RiArrowDownSLine } from "react-icons/ri";
import ScreenSize from "../Hooks/ScreenSize";


const PortfolioSection = () => {
    
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
        <section id="portfolio">
            <div className="portfolio__container">
                <div className="section portfolio">
                    <div className="heading">
                        <div className="section__title">Portfolio</div>
                        <div className="line">{"_".repeat(lineRepeat)}</div>
                    </div>
                    <div className="section__portfolio">
                        {
                            projects.projects.map((proj) =>
                                <PortfolioContent
                                    proj={proj}
                                />
                            )
                        }
                    </div>
                </div>
                <div className="navArrow">
                    <a href="#about"><RiArrowDownSLine /></a>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;
