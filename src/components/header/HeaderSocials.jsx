import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsFacebook } from 'react-icons/bs';

const HeaderSocials = () => {
  return (
    <div>
      <div className="header__socials">
        <a href="https://github.com/Stack-up-Rising" target="_blank" rel="noreferrer">
          <BsGithub />
        </a>
        <a href="https://twitter.com/Stack_up_Rising" target="_blank" rel="noreferrer">
          <BsTwitter />
        </a>
        <a href="https://www.instagram.com/kazukifukuyama/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100075314286434"
          target="_blank"
          rel="noreferrer"
        >
          <BsFacebook />
        </a>
      </div>
    </div>
  );
};

export default HeaderSocials;
