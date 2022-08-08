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
            <button type="button" style={style} className="sidemenu__button" onClick={() => setOpen(o => !o)}>
                <GiHamburgerMenu />
            </button>
            <div className="sidemenu">
                <Popup className="sidemenu-popup" open={open} closeOnDocumentClick onClose={closeModal}>
                    <div className="modal">
                        <a className="sidemenu__close" onClick={closeModal}>
                            <FaTimes />
                        </a>
                        <div className='sideMenu__content' onClick={() => setOpen(o => !o)}>
                            <a href="#home">Home</a>
                            <a href="#portfolio">Portfolio</a>
                            <a href="#about">About</a>
                            <a href="#contact">Contact</a>
                        </div>
                    </div>
                </Popup>
            </div>
        </>
  )

}

export default SideMenu