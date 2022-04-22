import React from 'react';
import './services.css';
import { BiCheck } from 'react-icons/bi';

const Services = () => {
  return (
    <section id="services">
      <h5>独学の成果</h5>
      <h2>学びの中で理解できたもの</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX デザイン</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>HTMLとCSSの役割をしっかりと分ける。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>保守性・メンテナンス性に配慮したコーディングを心掛ける。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>class名・ID名をわかりやすくシンプルに命名する。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>インデントがバラバラにならないようルールを統一する。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>IDは極力使わないようにする。</p>
            </li>
          </ul>
        </article>
        {/* End of UI/UX */}

        <article className="service">
          <div className="service__head">
            <h3>Web開発（主にフロントエンド）</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>JavaScript関数に関しての理解。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>コンポーネント指向の理解。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>propsを用いた、親コンポーネントから子コンポーネントへ値の渡し方。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>useaStateを使用した状態管理。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>useEffectを使用したDOMの描画。</p>
            </li>
          </ul>
        </article>
        {/* End of Web Development */}

        <article className="service">
          <div className="service__head">
            <h3>
              学び以外での理解
              <br />
              （業務にて得た知見）
            </h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>インプット資料を用いてのドキュメント修正。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>作業手順書の作成。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>開発・ドキュメント修正のスケジュール管理。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>人との調整ごとは早めに行動する。</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>失敗談をそのままにせず、糧として次回に活かす思考を持つ。</p>
            </li>
          </ul>
        </article>
        {/* End of Content Creation */}
      </div>
    </section>
  );
};

export default Services;
