import React from "react";
import "./PortfolioContent.css";
import Popup from "reactjs-popup";


const PortfolioContent = (proj) => {
    const style = {
        backgroundImage: "url(" + proj.proj.background + ")"
    };

    var showLive = {
        visibility: "visible"
    };

    var showRep = {
        display: "none"
    }

    if (!proj.proj.live) {
        showLive = {
            display: "none"
        };
    };

    if (proj.proj.presentation) {
        showRep = {
            visibility: "visible"
        }
    }

    return(
        <div className="portfolio__content" style={style} id={proj.proj.id}>
            <div className="overlay">
                <div className="portfolio__title"><h3>{proj.proj.title}</h3></div>
                <div className="view__project">
                    <div className="view__demo" style={showLive}>
                        <a className="pill-button" href={proj.proj.live} target="_blank" rel="noreferrer"><p>View Demo</p></a>
                    </div>
                    <Popup trigger={<button type="button" className="pill-button pill-button--solid read__more"><p>Read More</p></button>} modal aria-labelledby aria-describedby>
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                    <p aria-hidden="true">&times;</p>
                                </button>
                                <h3 className="header">{proj.proj.title}</h3>
                                <p className="content">{proj.proj.description}</p>
                                <ul className="bullet__points">{proj.proj.bullets.map(bul => <li><p>{bul}</p></li>)}</ul>
                                <div className="actions">
                                    <a className="pill-button" style={showLive} href={proj.proj.live} target="_blank" rel="noreferrer"><p>Live Demo</p></a>
                                    <a className="pill-button" style={showRep} href={proj.proj.presentation} target="_blank" rel="noreferrer"><p>Full Report (PDF)</p></a>
                                    <a className="pill-button" href={proj.proj.github} target="_blank" rel="noreferrer"><p>Github</p></a>
                                    <button type="button" className="pill-button" onClick={() => {close();}}><p>Back</p></button>
                                </div>
                            </div>
                        )}
                    </Popup>
                </div>
            </div>
        </div>
    )
}

export default PortfolioContent;
