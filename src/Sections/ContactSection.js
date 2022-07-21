import React from "react";
import "./ContactSection.css";
import ContactContent from "../components/ContactContent";
import { TbArrowBarToUp } from "react-icons/tb";
import { FaFileAlt } from "react-icons/fa";
import main from "../Info/Info";
import ScreenSize from "../Hooks/ScreenSize";


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

    return(
        <section id="contact">
            <div className="section contact">
                <div className="heading">
                    <div className="section__title">Contact</div>
                    <div className="line">{"_".repeat(lineRepeat)}</div>
                </div>
                <div className="section__contact">
                    <div className="contact__info">
                        <h4>Get in touch</h4>
                        <h5>Brandon Kang</h5>
                        <p><strong>Email: </strong>brandon021@gmail.com</p>
                        <p><strong>School: </strong>bjk170530@utdallas.edu</p>
                        <div className="contact__resume">
                            <p><strong>Resume: </strong></p>
                            <a href={main.main.resume} target="_blank"><FaFileAlt /></a>
                            <a href={main.main.resume} target="_blank"><p><span>(Google Drive link)</span></p></a>
                        </div>
                    </div>
                    <ContactContent />
                </div>
            </div>
            <div className="totop_arrow">
                <a href="#home"><TbArrowBarToUp /></a>
            </div>
        </section>
    )
}

export default ContactSection;
