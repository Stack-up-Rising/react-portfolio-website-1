/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './about.css';
import ME from '../../assets/me-about.jpg';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { IoIosConstruct } from 'react-icons/io';

const About = () => {
  return (
    <section id="about">
      <h5>私について</h5>
      <h2>自己紹介</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Web系言語の独学年数</h5>
              <small>2年</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>IT業界の勤続年数</h5>
              <small>
                5年以上
                <hr />
                (2022年現在)
              </small>
            </article>
            <article className="about__card">
              <IoIosConstruct className="about__icon" />
              <h5>業務で経験してきたこと</h5>
              <small>
                ・Cisco機器を用いた
                <hr />
                ネットワークの構築
              </small>
              <hr />
              <small>
                ・Linuxを用いた
                <hr />
                インフラ基盤の構築
              </small>
            </article>
          </div>

          <p>
            30歳でSES企業に転職し、現在はWeb系エンジニアへ転職できるよう
            <br />
            独学で言語習得に向けて勉強中です。
            <br />
            志望としてはフロントエンジニアを希望しております。
          </p>

          <a href="#contact" className="btn btn-primary">
            連絡先はこちらより
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
