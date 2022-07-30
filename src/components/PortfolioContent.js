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
                <div className="portfolio__title"><p>{proj.proj.title}</p></div>
                <div className="view__project">
                    <div className="view__demo" style={showLive}><a href={proj.proj.live} target="_blank">View Demo</a></div>
                    <Popup trigger={<div className="read__more"><a>Read More</a></div>} modal aria-labelledby aria-describedby>
                        {close => (
                            <div className="modal">
                                <button className="close" onClick={close}>
                                &times;
                                </button>
                                <div className="header">{proj.proj.title}</div>
                                <div className="content">{proj.proj.description}</div>
                                <div className="bullet__points">{proj.proj.bullets.map(bul => <li>{bul}</li>)}</div>
                                <div className="actions">
                                    <a style={showLive} href={proj.proj.live} target="_blank">Live Demo</a>
                                    <a style={showRep} href={proj.proj.presentation} target="_blank">Full Report (PDF)</a>
                                    <a href={proj.proj.github} target="_blank">Github</a>
                                    <a onClick={() => {close();}}>Back</a>
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