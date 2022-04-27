import React, { useRef } from 'react';
import './contact.css';
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { SiCisco } from 'react-icons/si';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cuffwbg', 'template_21oyp5i', form.current, 'mFpL2NHDKZu1Ib4tt');

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2>お問い合わせ</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>dummyaddress@gmail.com</h5>
            <a href="mailto:kazu.wish.star@gmail.com" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Kazuki Fukuyama</h5>
            <a
              href="https://www.facebook.com/messages/t/100003811784018/"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__option">
            <SiCisco className="contact__option-icon" />
            <h4>Webex</h4>
            <h5>Kazuki Fukuyama</h5>
            <a href="https://meet114.webex.com/meet/pr1583244925" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="フルネーム" required />
          <input type="email" name="email" placeholder="メールアドレス" required />
          <textarea name="message" rows="7" placeholder="メッセージ" required></textarea>
          <button type="submit" className="btn-primary">
            送信
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
