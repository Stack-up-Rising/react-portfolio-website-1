/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import './nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import { MdOutlineComputer } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';

const Nav = () => {
  return (
    <nav>
      <a href="#" className="active">
        <AiOutlineHome />
      </a>
      <a href="#about">
        <AiOutlineUser />
      </a>
      <a href="#services">
        <RiServiceLine />
      </a>
      <a href="#experience">
        <BiBook />
      </a>
      <a href="#portfolio">
        <MdOutlineComputer />
      </a>
      <a href="#testimonials">
        <BsFillPersonFill />
      </a>
      <a href="#contact">
        <BiMessageSquareDetail />
      </a>
    </nav>
  );
};

export default Nav;
