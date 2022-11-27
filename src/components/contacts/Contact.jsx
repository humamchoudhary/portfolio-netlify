import React, { useRef } from 'react';
import './contact.css'
import { AiOutlineMail } from "react-icons/ai"
import { RiMessengerLine } from "react-icons/ri"
import { FaWhatsapp } from "react-icons/fa"
import emailjs from "emailjs-com"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_c8aj7qt', 'template_x6307kn', form.current, '3m5zvAEoGBZRSR7sJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section id="contact">
      <h5 className="text-light">Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        {/* ========== Option =============== */}
        <div className="contact__options">

          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5 className='text-light'>humamchoudhary@gmail.com</h5>
            <a href="mailto:humamchoudhary@gmail.com">Send a message</a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon' />
            <h4>Messenger</h4>
            <h5 className='text-light'>Humam ch</h5>
            <a href="https://m.me/humam.ch.75" target="_blank">Send a message</a>
          </article>

          <article className="contact__option">
            <FaWhatsapp className='contact__option-icon' />
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+12345678</h5>
            <a href="https://api.whatsapp.com/send?phone=923185422628" target="_blank">Send a message</a>
          </article>


        </div>
        {/* ========== Form =============== */}
        <form ref={form} onSubmit={sendEmail}>

          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email where we can respond' required />
          <textarea name="msg" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact