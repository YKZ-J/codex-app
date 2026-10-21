import { withBase } from './paths';
import { HeroMedia } from './HeroMedia';
import { assetUrl, businesses, news } from './content';
import { Arrow } from './Layout';

export default function HomePage() {
  return (
    <>
      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <HeroMedia />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="hero-kicker">開拓の精神</p>
            <h1 id="hero-title">
              北海道の大地から、
              <br />
              そばの未来を拓く。
            </h1>
            <p className="hero-description">
              1911年から続く農業の歴史と、新たな技術への挑戦。
              <br className="desktop-break" />
              そばの栽培から加工・製麺・商品づくりまで、
              <br className="desktop-break" />
              一貫したものづくりを追求しています。
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#business">
                事業を知る <Arrow />
              </a>
              <a className="button button-outline" href={withBase('/contact/')}>
                お問い合わせ <Arrow />
              </a>
            </div>
          </div>
          <span className="hero-location">HOKKAIDO, JAPAN — SINCE 1911</span>
          <a className="scroll-link" href="#about">
            <span>SCROLL</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section id="about" className="introduction page-width">
          <div className="about-grid">
            <div>
              <p className="eyebrow">ROOTED in HOKKAIDO</p>
              <h2>
                北海道の大地で、
                <br />
                そばと向き合う。
              </h2>
            </div>
            <div className="about-description">
              <p>
                新しい時代に、新しい農業を。
                <br />
                北海道の豊かな大地から、そばの新しい可能性を。生産から製粉・製麺、そして食卓まで、一貫したそばづくりに取り組んでいます。
              </p>
              <a className="text-link" href={withBase('/company/')}>
                私たちについて
                <Arrow />
              </a>
            </div>
          </div>
          <div className="principles">
            {[
              ['SINCE 1911', '明治44年定植の歴史'],
              ['SEED TO TABLE', '生産から食卓まで'],
              ['AGRICULTURE × TECHNOLOGY', '農業とテクノロジーの融合'],
            ].map(([english, japanese]) => (
              <div key={english}>
                <span>{english}</span>
                <p>{japanese}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="business"
          className="business-section"
          aria-label="事業紹介"
        >
          <div className="page-width section-heading">
            <div>
              <p className="eyebrow">OUR BUSINESS</p>
              <h2>畑から食卓へ</h2>
            </div>
            <p>
              育てる。磨く。届ける。
              <br />
              一つにつながる、私たちのものづくり。
            </p>
          </div>
          {[businesses[0], businesses[2], businesses[3]].map(
            (business, index) => (
              <article
                className={`business-row ${index % 2 === 1 ? 'is-reversed' : ''}`}
                key={business.number}
              >
                <div className="business-image-wrap">
                  <img
                    src={assetUrl(business.image)}
                    alt={business.alt}
                    loading="lazy"
                    width="1000"
                    height="750"
                  />
                </div>
                <div className="business-copy">
                  <div className="business-heading">
                    <span className="business-number">{`0${index + 1}`}</span>
                    <p className="eyebrow">{business.english}</p>
                  </div>
                  <h3>
                    {
                      [
                        'そばの栽培',
                        'そばの加工・製粉・製麺',
                        '商品開発・販売',
                      ][index]
                    }
                  </h3>
                  <p className="business-description">{business.description}</p>
                  <a
                    className="text-link"
                    href={withBase('/business/')}
                    aria-label={`${business.title}について詳しく見る`}
                  >
                    詳しく見る <Arrow />
                  </a>
                </div>
              </article>
            ),
          )}
        </section>

        <section
          className="services-section page-width"
          aria-labelledby="technology-title"
        >
          <div className="service-grid">
            <img
              src={assetUrl('b02.png')}
              alt="農業用ドローンによる農薬防除"
              width="1000"
              height="750"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">AGRICULTURE × TECHNOLOGY</p>
              <h2 id="technology-title">
                農業の可能性を、
                <br />
                空から広げる。
              </h2>
              <h3>ドローン農薬防除</h3>
              <p>{businesses[1].description}</p>
              <a className="text-link" href={withBase('/business/')}>
                農業技術・サービスを見る <Arrow />
              </a>
            </div>
          </div>
          <div className="new-projects">
            <div>
              <p className="eyebrow">NEXT CHAPTER</p>
              <h2>新たな取り組み</h2>
            </div>
            {businesses.slice(4).map((business) => (
              <article key={business.number}>
                <span className="status">準備中</span>
                <h3>{business.title}事業</h3>
                <p>{business.description}</p>
                <a className="text-link" href={withBase('/business/')}>
                  {business.title}事業について <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>
        <section
          id="products"
          className="products-section"
          aria-labelledby="products-title"
        >
          <div className="page-width service-grid">
            <img
              src={assetUrl('b0004.png')}
              alt="そばの盛り付けと商品パッケージ"
              width="1000"
              height="750"
              loading="lazy"
            />
            <div>
              <p className="eyebrow">OUR PRODUCTS</p>
              <h2 id="products-title">
                畑の恵みを、
                <br />
                日々の食卓へ。
              </h2>
              <div className="product-types">
                <div>
                  <h3>生そば</h3>
                  <p>そばの香りと風味を大切に。</p>
                </div>
                <div>
                  <h3>冷凍そば</h3>
                  <p>暮らしに合わせて楽しむそば。</p>
                </div>
              </div>
              <p className="shop-notice">
                オンラインショップは準備中です。
                <br />
                商品についてはお問い合わせください。
              </p>
              <a className="text-link" href={withBase('/contact/')}>
                商品について問い合わせる <Arrow />
              </a>
              <a className="shop-status-link" href={withBase('/online-shop/')}>
                オンラインショップ（準備中） <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section
          className="recruit-section page-width"
          aria-labelledby="recruit-title"
        >
          <div className="service-grid">
            <div>
              <p className="eyebrow">RECRUIT</p>
              <h2 id="recruit-title">
                農業の未来を、
                <br />
                ともにつくる。
              </h2>
              <p>
                畑で育て、製麺所で仕上げ、食卓へ届ける。
                <br />
                黒岩農場の仕事と、働く環境をご紹介します。
              </p>
              <a className="button" href={withBase('/recruit/')}>
                採用情報を見る <Arrow />
              </a>
            </div>
            <img
              src={assetUrl('b01.png')}
              alt="畑で作業する大型トラクター"
              width="1000"
              height="750"
              loading="lazy"
            />
          </div>
        </section>
        <section
          id="news"
          className="news-section page-width"
          aria-labelledby="news-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">NEWS</p>
              <h2 id="news-title">お知らせ</h2>
            </div>
            <a className="text-link" href={withBase('/news/')}>
              すべてのお知らせ
              <Arrow />
            </a>
          </div>
          <div className="news-list">
            {news.map((item) => (
              <a
                className="news-item"
                href={withBase(item.href)}
                key={item.dateTime}
              >
                <time dateTime={item.dateTime}>{item.date}</time>
                <span className="news-tag">お知らせ</span>
                <h3>{item.title}</h3>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <section className="contact-band">
          <div className="page-width">
            <div>
              <p className="eyebrow">CONTACT</p>
              <h2>黒岩農場へのお問い合わせ</h2>
              <p>事業・商品・採用について、お気軽にご相談ください。</p>
            </div>
            <a className="button button-light" href={withBase('/contact/')}>
              お問い合わせ <Arrow />
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
