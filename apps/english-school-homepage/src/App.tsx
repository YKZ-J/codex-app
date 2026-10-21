import { useRef, useState } from 'react';
import { images, navigation, schoolSite, socialLinks } from './content';
import PhotoSlideshow from './PhotoSlideshow';

function SchoolNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  return (
    <aside
      className="school-sidebar"
      onKeyDown={(event) => {
        if (event.key === 'Escape' && isOpen) {
          setIsOpen(false);
          button.current?.focus();
        }
      }}
    >
      <button
        ref={button}
        type="button"
        className="mobile-menu"
        aria-expanded={isOpen}
        aria-controls="school-navigation"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>メニュー</span>
        <span aria-hidden="true">{isOpen ? '×' : '☰'}</span>
      </button>
      <nav
        id="school-navigation"
        aria-label="メインメニュー"
        className={isOpen ? 'school-navigation is-open' : 'school-navigation'}
      >
        {navigation.map((item, index) => (
          <a
            key={item.label}
            href={item.href}
            aria-current={index === 0 ? 'page' : undefined}
            onClick={() => setIsOpen(false)}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </aside>
  );
}

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <div className="top-strip" aria-hidden="true" />
      <div id="top" className="school-page">
        <header
          className="school-header"
          style={{ backgroundImage: `url(${images.header})` }}
        >
          <h1>
            <a href="#top">Ohana英会話</a>
          </h1>
        </header>
        <div className="school-layout">
          <SchoolNavigation />
          <main id="main" className="school-main">
            <PhotoSlideshow />
            <section className="welcome-panel" aria-labelledby="welcome-title">
              <img
                src={images.logo}
                alt="Ohana英会話のカラフルなロゴ"
                width="738"
                height="738"
              />
              <div>
                <h2 id="welcome-title" className="accent-heading">
                  ハワイ出身講師と学ぶ英会話教室
                </h2>
                <p>
                  Welcome to Ohana English School!!
                  <br />
                  ようこそOhana英会話へ！！
                  <br />
                  英語を始めたいけれど、きっかけが見つからなかった方。
                  <br />
                  私たちと一緒に、一歩を踏み出してみませんか？
                  <br />
                  講師も生徒も『Ohana（家族）』のようにつながる、
                  <br />
                  あたたかい雰囲気の英会話教室です。
                </p>
              </div>
            </section>
            <div className="dotted-divider" />
            <section className="about-section" aria-labelledby="about-title">
              <h2 id="about-title">Ohana英会話とは</h2>
              <div className="blue-panel">
                <p>
                  大切にしているのは「話す力」と「聞く力」。
                  <br />
                  自分から参加するレッスンで、
                  <br />
                  毎日に役立つ英語を楽しく学びます。
                  <br />
                  講師はハワイ出身の、明るく楽しい夫婦です。
                  <br />
                  初めての方も気軽に通っていただけるよう、
                  <br />
                  定額制のプランをご用意しています。
                </p>
                <p>
                  札幌駅北口教室：札幌駅から徒歩2分
                  <br />
                  八軒会館教室：JR琴似駅から徒歩3分
                  <br />
                  <span className="renovation-note">
                    ※改装中は八軒中央会館でレッスンを行っています
                  </span>
                  <br />
                  八軒自宅教室：JR八軒駅から徒歩7分
                </p>
                <p>
                  プライベートレッスンは、
                  <br />
                  カフェやオンラインでも受講できます。
                </p>
              </div>
            </section>
            <div className="dotted-divider" />
            <section
              className="lessons-section"
              aria-labelledby="lessons-title"
            >
              <h2 id="lessons-title" className="accent-heading">
                レッスンについて
              </h2>
              <p>
                自分のペースで通えるチケット制と、
                <br />
                1ヶ月通い放題の定額制プランがあります。
                <br />
                ご自宅から参加できるオンラインレッスンや、
                <br />
                英検対策・旅行前の単発レッスンにも対応。
                <br />
                気になっていることがあれば、ぜひご相談ください。
                <br />
                <a className="trial-link" href="mailto:ohanaeikaiwa@gmail.com">
                  無料体験レッスンも随時受付中です！
                </a>
              </p>
              <p className="lesson-detail">
                ♪日程や料金は
                <a href={`${schoolSite}/p/3/`}>「Lessons／レッスン」</a>
                でご確認ください。
              </p>
            </section>
            <div className="dotted-divider" />
            <ul className="social-list">
              <li>
                <a href={socialLinks.instagram}>
                  <span className="social-icon instagram" aria-hidden="true">
                    ◎
                  </span>
                  <span>←Instagramはこちら</span>
                  <span aria-hidden="true">›</span>
                </a>
              </li>
              <li>
                <a href={socialLinks.facebook}>
                  <span className="social-icon facebook" aria-hidden="true">
                    f
                  </span>
                  <span>←Facebookはこちら</span>
                  <span aria-hidden="true">›</span>
                </a>
              </li>
              <li>
                <a href={socialLinks.directory}>
                  <span>
                    オトコロドットコム外国語教室ジャンルに掲載されました→
                  </span>
                  <span aria-hidden="true">›</span>
                </a>
              </li>
            </ul>
            <section className="event-section" aria-labelledby="festival-title">
              <h2 id="festival-title" className="event-heading">
                <a href={socialLinks.festival}>
                  Ohanaになろう〜ハワイフェスティバル〜
                </a>
              </h2>
              <p>
                札幌でハワイを身近に感じるイベント「Ohanaになろう」。2012年から続くお祭りに、フラやタヒチアンダンス、ウクレレのステージ、ハワイにまつわるショップが集まります。
              </p>
              <p>
                ★次回開催★
                <br />
                Ohanaになろう vol.15
                <br />
                〜ハワイフェスティバル〜
              </p>
              <p>
                ●日時
                <br />
                <time dateTime="2027-03-27">2027年3月27日(土)11時〜</time>
                <br />
                <time dateTime="2027-03-28">28日(日)10時〜</time>
              </p>
              <p>
                ●場所
                <br />
                さっぽろ創世スクエア
                <br />
                札幌市民交流プラザ1階
                <br />
                （スカーツコート・モール）
              </p>
              <p>
                イベントの様子やお知らせは、
                <br />
                <a className="underlined-link" href={socialLinks.festival}>
                  Ohanaになろう公式Instagram
                </a>
                をご覧ください♪
              </p>
            </section>
            <section
              className="event-section loco-event"
              aria-labelledby="loco-title"
            >
              <h2 id="loco-title" className="event-heading">
                ロコHAWAII
              </h2>
              <p>
                Ohana英会話の拠点、札幌市西区で楽しむハワイイベント。フラやウクレレ、ショップ、フードがそろいます。Ohana英会話のブースでは、マラサダやスパムむすび、ハワイコーヒーなどをご用意します。
              </p>
              <p>入場無料。どなたでもお気軽にどうぞ！</p>
              <p>★第4回 ロコHAWAII★</p>
              <p>
                ●日時
                <br />
                <time dateTime="2026-07-25">2026年7月25日(土)</time>・
                <time dateTime="2026-07-26">26日(日)</time>
              </p>
              <p>
                ●場所
                <br />
                シーナシーナ琴似 1階
                <br />
                （JR琴似駅直結）
              </p>
            </section>
          </main>
        </div>
        <footer className="school-footer">
          <a href="mailto:ohanaeikaiwa@gmail.com">ohanaeikaiwa@gmail.com</a>
          <a href="tel:08060878649">080-6087-8649</a>
        </footer>
      </div>
    </>
  );
}
