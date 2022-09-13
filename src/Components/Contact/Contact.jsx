import React from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Contact = () => {
  // email js functionality
  const form = useRef();
  const [done, setDone] = React.useState(false);
  const [value, setValue] = React.useState();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_eejk77l',
        'template_xdszqom',
        form.current,
        'nc_Lw_9AeEsroJ6_L'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          setValue('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="works-left">
        <div className="services-left">
          <span>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: 'var(--purple)', top: '29rem' }}
          ></div>
        </div>
      </div>

      <div className="contact-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="user"
            name="user_name"
            placeholder="Name"
            value={value}
          />
          <input
            type="email"
            className="user"
            name="user_email"
            placeholder="Email"
            value={value}
          />
          <textarea
            className="user"
            name="message"
            placeholder="Message"
            value={value}
          />
          <input type="submit" value="Send" className="button" />
          <span>{done && 'Thanks for contacting me!'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--skyblue)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
