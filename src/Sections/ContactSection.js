import React from "react";
import "./ContactSection.css";
import ContactContent from "../components/ContactContent";
import { TbArrowBarToUp } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import main from "../Info/Info";
import ScreenSize from "../Hooks/ScreenSize";
import { smoothScrollTo } from "../utils/smoothScroll";


const ContactSection = () => {

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
        <section id="contact">
            <div className="section__container">
                <div className="heading section-frame">
                    <h2 className="section__title">Contact</h2>
                    <p className="line" aria-hidden="true">{"_".repeat(lineRepeat)}</p>
                </div>
                <div className="section__contact section__scroll section-frame">
                    <div className="contact__info">
                        <h5>Brandon Kang</h5>
                        <p><strong>Email: </strong>brandon021@gmail.com</p>
                        <div className="contact__resume">
                            <p><strong>Resume: </strong></p>
                            <a className="icon-button" href={main.main.resume} target="_blank" rel="noreferrer"><FaFileAlt /></a>
                            <a href={main.main.resume} target="_blank" rel="noreferrer"><p><span>(Google Drive link)</span></p></a>
                        </div>
                    </div>
                    <ContactContent />
                </div>
                <div className="navArrow">
                    <a
                        className="pill-button navArrow__button"
                        href="#home"
                        onClick={(event) => handleNavClick(event, "#home")}
                        aria-label="Scroll to home"
                    >
                        <TbArrowBarToUp />
                    </a>
                </div>
            </div>
        </section>
    )
}

export default ContactSection;
