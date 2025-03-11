import React from "react";
import "./PortfolioSection.css";
import PortfolioContent from "../components/PortfolioContent";
import projects from "../Info/Info";
import { RiArrowDownSLine } from "react-icons/ri";
import ScreenSize from "../Hooks/ScreenSize";
import { smoothScrollTo } from "../utils/smoothScroll";


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

    const handleNavClick = (event, targetId) => {
        event.preventDefault();
        smoothScrollTo(targetId);
    };

    return(
        <section id="portfolio">
            <div className="section__container">
                <div className="heading section-frame">
                    <h2 className="section__title">Portfolio</h2>
                    <p className="line" aria-hidden="true">{"_".repeat(lineRepeat)}</p>
                </div>
                <div className="section__portfolio section__scroll section-frame">
                    {
                        projects.projects.map((proj) =>
                            <PortfolioContent
                                proj={proj}
                            />
                        )
                    }
                </div>
                <div className="navArrow">
                    <a
                        className="pill-button navArrow__button"
                        href="#about"
                        onClick={(event) => handleNavClick(event, "#about")}
                        aria-label="Scroll to about"
                    >
                        <RiArrowDownSLine />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default PortfolioSection;
