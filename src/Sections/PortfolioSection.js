import React from "react";
import "./PortfolioSection.css";
import PortfolioContent from "../components/PortfolioContent";
import projects from "../Info/Info";
import { RiArrowDownSLine } from "react-icons/ri";


const PortfolioSection = () => {

    return(
        <section id="portfolio">
            <div className="section portfolio">
                <div className="heading">
                    <div className="section__title">Portfolio</div>
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
        </section>
    )
}

export default PortfolioSection;
