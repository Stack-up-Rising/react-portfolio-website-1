import React from 'react';
import './header.css';
import ME from '../../assets/me.png';
import HeaderSocials from './HeaderSocials';
import CTA from './CTA';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>はじめまして。本サイトは</h5>
        <h1>Kazuki Fukuyama</h1>
        <h5>のポートフォリオサイトです。</h5>
        <h5 className="text-light">Web系エンジニア志望です。</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
