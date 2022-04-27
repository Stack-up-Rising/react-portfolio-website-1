/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './footer.css';
import { IoLogoGithub } from 'react-icons/io';
import { IoLogoTwitter } from 'react-icons/io';
import { IoLogoInstagram } from 'react-icons/io';
import { IoLogoFacebook } from 'react-icons/io';

const Footer = () => {
  return (
    <div>
      <footer>
        <a href="#" className="footer__logo">
          Portfolio Site
        </a>

        <ul className="permalinks">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">自己紹介</a>
          </li>
          <li>
            <a href="#experience">取得スキル</a>
          </li>
          <li>
            <a href="#services">独学の成果</a>
          </li>
          <li>
            <a href="#portfolio">制作一覧</a>
          </li>
          <li>
            <a href="#testimonials">レビュー</a>
          </li>
          <li>
            <a href="#contact">お問い合わせ</a>
          </li>
        </ul>

        <div className="footer__socials">
          <a href="">
            <a href="https://github.com/Stack-up-Rising" target="_blank" rel="noreferrer">
              <IoLogoGithub />
            </a>
            <a href="https://twitter.com/Stack_up_Rising" target="_blank" rel="noreferrer">
              <IoLogoTwitter />
            </a>
            <a href="https://www.instagram.com/kazukifukuyama/" target="_blank" rel="noreferrer">
              <IoLogoInstagram />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100075314286434"
              target="_blank"
              rel="noreferrer"
            >
              <IoLogoFacebook />
            </a>
          </a>
        </div>

        <div className="footer__copylight">
          <small>&copy;Kazuki Fukuyama</small>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
