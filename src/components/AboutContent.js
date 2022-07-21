import React from "react";
import "./AboutContent.css";

const AboutContent = (abt) => {
    

    return(
        <div className="about__content" id={abt.id}>
            <div className="about__title">{abt.title}</div>
            <div className="about__description"><p>{abt.description}</p></div>
        </div>
    )
}

export default AboutContent;