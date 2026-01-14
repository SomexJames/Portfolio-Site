import React from "react";
import "./AboutContent.css";

const AboutContent = (abt) => {
    

    return(
        <div className="about__content" id={abt.id}>
            <h3 className="about__title">{abt.title}</h3>
            <p className="about__description">{abt.description}</p>
        </div>
    )
}

export default AboutContent;
