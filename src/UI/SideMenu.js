import React, { useState } from 'react';
import './SideMenu.css';
import ScreenSize from "../Hooks/ScreenSize";
import Popup from "reactjs-popup";
import { FaTimes } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

const SideMenu = () => {

    const dimensions = ScreenSize();

    var style = {
        visibility: "hidden"
    };

    if (dimensions.width < 768) {
        style = {
            visibility: "visible"
        };
    }

    const [open, setOpen] = useState(false);

    const closeModal = () => setOpen(false);

    return (
        <>
            <button type="button" style={style} className="sidemenu__button icon-button icon-button--ghost" onClick={() => setOpen(o => !o)} aria-label="Open menu">
                <GiHamburgerMenu />
            </button>
            <div className="sidemenu">
                <Popup className="sidemenu-popup" open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <button type="button" className="sidemenu__close icon-button icon-button--ghost" onClick={closeModal} aria-label="Close menu">
                            <FaTimes />
                        </button>
                        <div className='sideMenu__content' onClick={() => setOpen(o => !o)}>
                            <a className="nav-link nav-link--stack" href="#home">Home</a>
                            <a className="nav-link nav-link--stack" href="#portfolio">Portfolio</a>
                            <a className="nav-link nav-link--stack" href="#about">About</a>
                            <a className="nav-link nav-link--stack" href="#contact">Contact</a>
                        </div>
                    </div>
                </Popup>
            </div>
        </>
  )

}

export default SideMenu
