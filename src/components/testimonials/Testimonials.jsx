import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

const data = [
  {
    avatar: AVTR1,
    name: '自社 H社長',
    review: '勤務態度は真面目。コミュニケーション能力高めなので、自社内での評価も高い。',
  },
  {
    avatar: AVTR2,
    name: '営業部 Aさん',
    review: '勤務態度は真面目で、顧客からの評判がよい。',
  },
  {
    avatar: AVTR3,
    name: '直属の上司 Mさん',
    review:
      '資料の納期を遅らせたことが一度もない。また、前後部署との交渉にも長けており開発をスムーズに行うことが出来た。',
  },
  {
    avatar: AVTR4,
    name: '同僚 Sさん',
    review: '作業等の準備や連携などが非常にスムーズで、滞りなく作業を進めることが出来た。',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>レビュー</h5>
      <h2>周囲からの声</h2>

      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={AVTR1} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Testimonials;
