import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../styles/contact.css"

// @MduLetsie7 used EmailJS for implementing the contact form https://dashboard.emailjs.com/admin

const EmailContactForm = () => {
 const form = useRef();

 const sendEmail = (e) => {
   e.preventDefault(); // prevents the page from reloading when you hit “Send”

   emailjs.sendForm('service_wdm4uvi', 'template_xieg3ci', form.current, '7HUVxfQuPWIxLtRSw')
     .then((result) => {
      alert("Email sent successfully!");
     }, (error) => {
      alert("Email send failed!");
     });
 };

 return (
   <form ref={form} onSubmit={sendEmail}>
    <h1>Feel free to send us a message with any complaints, compliments, or requests</h1>
    <div className='contactPage'>
    <label>Name</label>
     <input className='nameBox' type="text" name="user_name" />
     <label>Email</label>
     <input className='emailBox' type="email" name="user_email" />
     <label>Message</label>
     <textarea name="message" />
     <input type="submit" value="Send" />
    </div>
   </form>
 );
};

export default EmailContactForm;