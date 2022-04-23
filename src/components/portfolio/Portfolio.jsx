import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/portfolio1.jpg';
import IMG2 from '../../assets/portfolio2.jpg';
import IMG3 from '../../assets/portfolio3.jpg';
import IMG4 from '../../assets/portfolio4.jpg';
import IMG5 from '../../assets/portfolio5.png';
import IMG6 from '../../assets/portfolio6.jpg';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Chats template & infographics in Figma',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Figma dashboard UI kit for data design web apps',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Maintaining tasks and tracking progress',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Chats template & infographics in Figma',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Chats template & infographics in Figma',
    github: 'https://github.com/Stack-up-Rising',
    demo: 'https://qiita.com/Stack_up_Rising',
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>制作一覧</h5>
      <h2>ポートフォリオ</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>ポートフォリオ一覧</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Gitnub
                </a>
                <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">
                  デモ
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
