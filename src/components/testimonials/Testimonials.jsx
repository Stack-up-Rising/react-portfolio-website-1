import React from 'react';
import './testimonials.css';
import AVTR1 from '../../assets/avatar1.jpg';
import AVTR2 from '../../assets/avatar2.jpg';
import AVTR3 from '../../assets/avatar3.jpg';
import AVTR4 from '../../assets/avatar4.jpg';

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: '自社 H社長',
    review: '勤務態度は真面目。コミュニケーション能力高めなので、自社内での評価も高い。また、自身の意見をはっきり相手に伝えることが出来るので業務を円滑に進めることが出来る。',
  },
  {
    avatar: AVTR2,
    name: '営業部 Aさん',
    review: 'まず第一に、出向先からの評価が非常に高い。コミュニケーション能力は社内でもトップレベルで顧客との意思疎通が取れているので業務に関しては問題無くこなしてくれている。',
  },
  {
    avatar: AVTR3,
    name: '直属の上司 Mさん',
    review:
      '資料作成や作業準備などの納期を遅らせたことが一度もない。また、前後部署との交渉にも長けており開発をスムーズに行うことが出来た。現場の上長からの評価も高い。',
  },
  {
    avatar: AVTR4,
    name: '同僚 Sさん（インフラ基盤での現場にて一緒になった方）',
    review: '作業等の準備や連携などが非常にスムーズで、滞りなく作業を進めることが出来た。インフラの知識が乏しいながらも勉強して理解してくれようとしてくれたため教え甲斐があった。',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>レビュー</h5>
      <h2>周囲からの声</h2>

      <Swiper
        className="container testimonials__container" // install Swiper modules
        modules={[Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
