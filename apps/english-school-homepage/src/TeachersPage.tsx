import { withBase } from './paths';
export default function TeachersPage() {
  return (
    <>
      <div className="inner-page-header">
        <p>Teachers</p>
        <h2>講師の紹介</h2>
      </div>
      <div className="inner-page-body">
        <p className="page-introduction">
          グループレッスンを担当するのは、アメリカ人講師と日本人講師の夫婦です。２人それぞれの強みを生かし、一人ひとりが会話に参加しやすく、安心して学べるクラスをつくっています。
        </p>
        <article className="teacher-profile" aria-labelledby="chad-name">
          <div className="teacher-portrait">
            <img
              src="https://crimg-world.e-shops.jp/cms-dimg/282186/335966/637_807.jpg"
              alt="Chad（チャド）先生"
              width="637"
              height="807"
            />
          </div>
          <div className="teacher-description">
            <h3 id="chad-name">
              Chad <span>（チャド）</span>
            </h3>
            <h4>Chad先生からのメッセージ</h4>
            <p lang="en">
              Born and raised in Honolulu, I spent my first 25 years in Hawaii.
              In July 2011, I came to Japan with my wife and daughters. Video
              games, Japanese food and all-you-can-drink evenings are some of my
              favorites. Dragon Ball Z sparked my interest in Japan when I was
              in middle school, and that enthusiasm grew into a love of anime,
              manga and Japanese culture. Teaching and getting to know people
              bring me joy. Let’s enjoy speaking English together!
            </p>
            <dl className="profile-facts">
              <div>
                <dt>Hometown</dt>
                <dd>Hawaii, USA（アメリカ合衆国ハワイ州）</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  <span lang="en">
                    Hawaii Pacific University, B.A. in Psychology
                  </span>
                  <br />
                  ハワイパシフィック大学 学士号 ― 心理学
                  <br />
                  <span lang="en">
                    Hawaii Pacific University, M.Ed. in Secondary Education
                  </span>
                  <br />
                  ハワイパシフィック大学 修士号 ― 中等教育科
                </dd>
              </div>
            </dl>
          </div>
        </article>
        <article className="teacher-profile" aria-labelledby="miho-name">
          <div className="teacher-portrait">
            <img
              src="https://crimg-world.e-shops.jp/cms-dimg/282186/337726/554_748.jpg"
              alt="Miho（実穂）先生"
              width="554"
              height="748"
              loading="lazy"
            />
          </div>
          <div className="teacher-description">
            <h3 id="miho-name">
              Miho <span>（実穂）</span>
            </h3>
            <h4>みほ先生からのメッセージ</h4>
            <p>
              こんにちは、Mihoです。日本で高校を卒業した後、カリフォルニア州ロングビーチで２年、ハワイ州ホノルルで５年を過ごしました。Ohana英会話では、生徒さんとネイティブ講師をつなぎ、気持ちが伝わるようにサポートしています。アメリカでの暮らしやハワイでの経験も、みなさんと分かち合えたらうれしいです。よろしくお願いします♪
            </p>
            <dl className="profile-facts">
              <div>
                <dt>Hometown</dt>
                <dd>Sapporo, Hokkaido（北海道札幌市）</dd>
              </div>
              <div>
                <dt>Education</dt>
                <dd>
                  <span lang="en">
                    Long Beach City College, A.A. in Liberal Arts
                  </span>
                  <br />
                  ロングビーチシティカレッジ 準学士号 ― 一般教養科
                  <br />
                  <span lang="en">
                    Hawaii Pacific University, B.S. in Business Administration
                  </span>
                  <br />
                  ハワイパシフィック大学 学士号 ― ビジネス学
                </dd>
              </div>
            </dl>
          </div>
        </article>
        <div className="page-next-step">
          <a href={withBase('/p/3/')}>
            レッスン日程＆料金を見る<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
