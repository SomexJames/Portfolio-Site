import React, { useState } from "react";
import emailjs from "emailjs-com";
import Popup from "reactjs-popup";
import { FaTimes } from "react-icons/fa";
import "./ContactContent.css";


const ContactContent = () => {

    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);


    function sendEmail(e) {
        e.preventDefault();
        
        emailjs.sendForm('service_aneq4sv', 'template_5elfl9w', e.target, '1p8sVwwtL8Mkiv5pw')
        .then((res) => {
            console.log(res.text);
        }, (err) => {
            console.log(err);
        });
        
        e.target.reset();

        setOpen(o => !o);
    }

    return(
        <div className="contact_content">
            <form onSubmit={sendEmail}>
                <div className="cc_row_1">
                    <input type="text" className="name_input" placeholder="Name" name="name"/>
                    <input type="email" className="email_input" placeholder="Email" name="email"/>
                </div>
                <div className="cc_row_2">
                    <textarea className="msg_input" placeholder="Message" name="message"></textarea>
                </div>
                <div className="cc_row_3">
                    <input type="submit" className="submit_button" value="Send" />
                </div>
                <Popup className="submit-popup" open={open} closeOnDocumentClick onClose={closeModal}>
                    <a className="submit__close" onClick={closeModal}><FaTimes /></a>
                    <p>Thank you for your message,</p>
                    <p>I will get back to you as soon as possible!</p>
                </Popup>
            </form>
        </div>
    )
}

export default ContactContent;