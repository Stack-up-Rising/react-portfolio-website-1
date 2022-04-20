import React from 'react';
import CV from '../../assets/CV.pdf';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        経歴書 ダウンロード
      </a>
      <a href="#contact" className="btn btn-primary">
        連絡先はこちらより
      </a>
    </div>
  );
};

export default CTA;
