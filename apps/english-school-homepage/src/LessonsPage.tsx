import { classrooms, groupSchedule } from './lessonContent';

export default function LessonsPage() {
  return (
    <>
      <div className="inner-page-header">
        <p>Lessons</p>
        <h2>レッスン日程＆料金</h2>
      </div>
      <div className="inner-page-body">
        <div className="page-introduction">
          <p>
            ネイティブ講師と日本人講師による少人数グループレッスンと、１対１のプライベートレッスンをご用意しています。教室での受講に加え、カフェへの出張やオンラインにも対応します。
          </p>
          <p className="lesson-note">
            大人の方向けの教室ですが、お子様のグループ・プライベートレッスンについてもご相談いただけます。
          </p>
        </div>
        <nav
          className="page-section-links"
          aria-label="レッスンページ内メニュー"
        >
          <a href="#group">グループレッスン</a>
          <a href="#private">プライベートレッスン</a>
          <a href="#classrooms">教室・アクセス</a>
        </nav>
        <section
          className="lesson-page-section"
          id="group"
          aria-labelledby="group-title"
        >
          <h3 id="group-title">グループレッスン</h3>
          <p>
            少人数のクラスを２人の講師が担当。本場のアメリカ英語に触れながら、日本語での解説やサポートも受けられるので、初心者の方も安心です。
          </p>
          <div className="lesson-block">
            <h4>曜日・時間</h4>
            <p>
              １レッスン６０分（入れ替え含む）
              <br />
              （初）＝初級クラス ／（中）＝中級クラス
            </p>
            <div
              className="schedule-scroll"
              role="region"
              aria-label="グループレッスンの時間割"
              tabIndex={0}
            >
              <table className="schedule-table">
                <caption className="sr-only">
                  グループレッスンの教室・曜日・時間・クラス
                </caption>
                <thead>
                  <tr>
                    <th scope="col">教室</th>
                    <th scope="col">曜日</th>
                    <th scope="col">時間</th>
                    <th scope="col">クラス</th>
                  </tr>
                </thead>
                {groupSchedule.map((group) => (
                  <tbody key={`${group.location}-${group.day}`}>
                    {group.classes.map(([time, label], index) => (
                      <tr key={`${group.location}-${group.day}-${time}`}>
                        {index === 0 && (
                          <>
                            <th scope="rowgroup" rowSpan={group.classes.length}>
                              {group.location}
                            </th>
                            <td rowSpan={group.classes.length}>{group.day}</td>
                          </>
                        )}
                        <td className="schedule-time">{time}</td>
                        <td>{label}</td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
            <p className="lesson-note">
              満席の場合がありますので、受講前にお問い合わせください。
            </p>
          </div>
          <div className="lesson-block">
            <h4>料金</h4>
            <div className="price-grid">
              <section className="price-card" aria-labelledby="monthly-title">
                <h5 id="monthly-title">定額制（月額）</h5>
                <p>上限なく、すべての対象クラスを受講できます。</p>
                <dl>
                  <div>
                    <dt>八軒教室</dt>
                    <dd>
                      5,000<span>円</span>
                    </dd>
                  </div>
                  <div>
                    <dt>札幌駅北口教室</dt>
                    <dd>
                      6,000<span>円</span>
                    </dd>
                  </div>
                </dl>
              </section>
              <section className="price-card" aria-labelledby="ticket-title">
                <h5 id="ticket-title">チケット制（１回）</h5>
                <p>お休みしても無駄にならない、１回ごとのプラン。</p>
                <dl>
                  <div>
                    <dt>八軒教室</dt>
                    <dd>
                      1,700<span>円</span>
                    </dd>
                  </div>
                  <div>
                    <dt>札幌駅北口教室</dt>
                    <dd>
                      2,000<span>円</span>
                    </dd>
                  </div>
                </dl>
              </section>
            </div>
            <ul className="lesson-notes">
              <li>定額制の対象曜日・時間は、上記の時間割をご確認ください。</li>
              <li>休会月は1,000円となります。</li>
            </ul>
          </div>
          <div className="lesson-block">
            <h4>その他</h4>
            <ul className="lesson-notes">
              <li>記載以外の時間をご希望の場合はご相談ください。</li>
              <li>曜日・時間は変更になる場合があります。</li>
              <li>
                会館の休館時は自宅教室に変更することがあります。事前にお問い合わせください。
              </li>
              <li>
                札幌駅北口教室ではエルプラザの2〜4階の部屋を利用します。当日の部屋は1階ロビーでご確認ください。
              </li>
            </ul>
          </div>
        </section>
        <section
          className="lesson-page-section"
          id="private"
          aria-labelledby="private-title"
        >
          <h3 id="private-title">プライベートレッスン</h3>
          <p>
            久しぶりに英語を学ぶ初心者の方から、話す機会を増やしたい上級者の方まで、一人ひとりに合わせて進める１対１のレッスンです。フリートーク、英検対策、日常英会話など、ご希望に応じた内容を選べます。
          </p>
          <p>
            英語で学ぶアメリカ人講師（中上級者向け）と、日本語の説明を受けられる日本人講師（初心者向け）からお選びいただけます。
          </p>
          <dl className="private-details">
            <div>
              <dt>曜日・時間</dt>
              <dd>
                ご希望の曜日・時間をご相談のうえ決定します。
                <br />
                オンラインも対応。１レッスン６０分。
              </dd>
            </div>
            <div>
              <dt>料金</dt>
              <dd>
                <strong>１回 2,700円</strong>
                <br />
                オンラインも同額です。
                <ul className="lesson-notes">
                  <li>講師２人での受講は800円追加</li>
                  <li>講師宅以外での受講は300円追加</li>
                </ul>
              </dd>
            </div>
            <div>
              <dt>その他</dt>
              <dd>
                グループレッスン受講中の方は、オンラインのプライベートレッスンを３回5,000円で追加できます。
              </dd>
            </div>
          </dl>
        </section>
        <section
          className="lesson-page-section"
          id="classrooms"
          aria-labelledby="classrooms-title"
        >
          <h3 id="classrooms-title">教室・アクセス</h3>
          <div className="classroom-grid">
            {classrooms.map((room) => (
              <article className="classroom-card" key={room.name}>
                <h4>{room.name}</h4>
                <p>{room.address}</p>
                <ul>
                  {room.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
                <a
                  href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(room.address)}`}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${room.name}をGoogleマップで開く（新しいタブ）`}
                >
                  Googleマップで見る<span aria-hidden="true">↗</span>
                </a>
              </article>
            ))}
          </div>
        </section>
        <div className="page-next-step">
          <a href="mailto:ohanaeikaiwa@gmail.com">
            無料体験レッスンも随時受付中です！<span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </>
  );
}
