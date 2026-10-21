import { useRef, useState } from 'react';
import {
  assetUrl,
  businesses,
  navigation,
  news,
  officialSite,
} from './content';

function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Wordmark() {
  return (
    <a className="wordmark" href="#home" aria-label="黒岩農場 ホーム">
      <span className="wordmark-jp">黒岩農場</span>
      <span className="wordmark-en">KUROIWA FARM</span>
    </a>
  );
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="site-header"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isMenuOpen) {
          setIsMenuOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <Wordmark />
      <nav aria-label="メインナビゲーション" className="desktop-nav">
        {navigation.slice(1).map((item) => (
          <a key={item.label} href={item.href}>
            {item.label}
          </a>
        ))}
      </nav>
      <button
        ref={menuButton}
        className="menu-toggle"
        type="button"
        aria-expanded={isMenuOpen}
        aria-controls="expanded-navigation"
        aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニューを開く'}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <span>{isMenuOpen ? 'CLOSE' : 'MENU'}</span>
        <span
          className={`menu-lines ${isMenuOpen ? 'is-open' : ''}`}
          aria-hidden="true"
        >
          <i />
          <i />
        </span>
      </button>
      {isMenuOpen && (
        <nav
          id="expanded-navigation"
          className="expanded-nav"
          aria-label="展開メニュー"
        >
          <p className="eyebrow">KUROIWA FARM</p>
          {navigation.map((item, index) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="menu-number">0{index + 1}</span>
              {item.label}
              <Arrow />
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default function App() {
  return (
    <>
      <a href="#main" className="skip-link">
        本文へスキップ
      </a>
      <Header />
      <main id="main">
        <section id="home" className="hero" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src={assetUrl('top-000.png')}
            alt="黒岩農場の畑"
            fetchPriority="high"
          />
          <div className="hero-shade" />
          <div className="hero-copy">
            <p className="hero-kicker">開拓の精神</p>
            <h1 id="hero-title">
              新しい時代に、
              <br className="mobile-break" />
              新しい農業を。
            </h1>
            <p className="hero-english">
              PIONEERING SPIRIT
              <br />A NEW ERA, A NEW AGRICULTURE.
            </p>
          </div>
          <span className="hero-location">HOKKAIDO, JAPAN — SINCE 1911</span>
          <a className="scroll-link" href="#about">
            <span>SCROLL</span>
            <span className="scroll-line" />
          </a>
        </section>

        <section id="about" className="introduction page-width">
          <div className="intro-statement">
            <p>
              明治44年の定植以来、
              <br />
              大地を耕し、
              <br />
              地域農業を支えてきました。
            </p>
            <p>
              受け継ぐ伝統と技術の進化により、
              <br />
              さらなる農業の可能性を切り拓きます。
            </p>
          </div>
          <div className="about-grid">
            <div>
              <p className="eyebrow">ROOTED in HOKKAIDO</p>
              <h2>
                北海道の大地で、
                <br />
                そばを育て続ける。
              </h2>
            </div>
            <div className="about-description">
              <p>
                100年以上、そばを育て、そばと向き合ってきました。
                <br />
                北海道の豊かな大地から、そばの新しい可能性を。生産から製粉・製麺、そして食卓まで、一貫したそばづくりに取り組んでいます。
              </p>
              <a className="text-link" href={`${officialSite}/company/`}>
                私たちについて
                <Arrow />
              </a>
            </div>
          </div>
          <div className="principles">
            {[
              ['SINCE 1911', '明治44年定植の歴史'],
              ['AGRICULTURE × TECHNOLOGY', '農業×テクノロジー'],
              ['SEED to TABLE', '生産から食卓へ'],
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
          {businesses.map((business, index) => (
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
                  <span className="business-number">{business.number}</span>
                  <p className="eyebrow">{business.english}</p>
                </div>
                <h2>{business.title}</h2>
                <p className="business-description">{business.description}</p>
                <a
                  className="circle-link"
                  href={`${officialSite}/business/`}
                  aria-label={`${business.title}について詳しく見る`}
                >
                  <Arrow />
                </a>
              </div>
            </article>
          ))}
        </section>

        <section
          id="news"
          className="news-section page-width"
          aria-labelledby="news-title"
        >
          <div className="section-heading">
            <div>
              <p className="eyebrow">お知らせ</p>
              <h2 id="news-title">NEWS</h2>
            </div>
            <a className="text-link" href={`${officialSite}/news/`}>
              すべてのお知らせ
              <Arrow />
            </a>
          </div>
          <div className="news-list">
            {news.map((item) => (
              <a className="news-item" href={item.href} key={item.dateTime}>
                <time dateTime={item.dateTime}>{item.date}</time>
                <span className="news-tag">お知らせ</span>
                <h3>{item.title}</h3>
                <Arrow />
              </a>
            ))}
          </div>
        </section>

        <a className="shop-banner" href={`${officialSite}/online-shop/`}>
          <div
            className="shop-image"
            style={{ backgroundImage: `url(${assetUrl('b0004.png')})` }}
          />
          <div className="shop-content">
            <p>北海道の畑から、あなたの食卓へ。</p>
            <h2>ONLINE SHOP</h2>
            <span>
              オンラインショップ
              <Arrow diagonal />
            </span>
          </div>
        </a>
      </main>
      <footer className="site-footer">
        <div className="footer-top page-width">
          <Wordmark />
          <div className="follow-us">
            <span>FOLLOW US</span>
            <a
              href={`${officialSite}/`}
              aria-label="黒岩農場の公式サイトでSNS情報を見る"
            >
              <svg
                viewBox="0 0 24 24"
                width="23"
                height="23"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r=".7" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
        <div className="footer-bottom page-width">
          <nav aria-label="フッターナビゲーション" className="footer-nav">
            {navigation.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </nav>
          <div className="footer-legal">
            <div>
              <a href={`${officialSite}/privacy-policy/`}>
                プライバシーポリシー
              </a>
              <a href={`${officialSite}/sitemap/`}>サイトマップ</a>
            </div>
            <small>© 株式会社黒岩農場</small>
          </div>
        </div>
      </footer>
    </>
  );
}
