export default function RecruitPage() {
  return (
    <div className={'source-post_content'}>
      <div className={'source-recruit-page'}>
        <p className={'source-rc-sr-only'}>
          {'畑を耕す人から、お客様に届ける人まで。株式会社黒岩農場 採用情報'}
        </p>
        <section className={'source-rc-intro'}>
          <div className={'source-rc-wrap'}>
            <div className={'source-rc-intro-tag'}>{'FOUR STAGES'}</div>
            <h2>{'あなたが輝く４つの舞台'}</h2>
            <p>
              {
                '種をまく畑から、そばを打つ工場、お弁当をつくる厨房、お客様の前に立つ店舗まで。黒岩農場では最適な仕事に出会えます。是非あなたに合う現場を見つけてください。'
              }
            </p>
            <div className={'source-rc-field-grid'}>
              <a className={'source-rc-field-card'} href={'/staff-farm/'}>
                <div className={'source-rc-field-photo'}>
                  <img
                    alt={'農場スタッフ'}
                    src={
                      'https://kuroiwafarm.co.jp/wp-content/uploads/2026/07/LINE_ALBUM_%E3%81%82%E3%81%90%E3%82%8A%E3%83%8A%E3%83%93%E6%8E%B2%E8%BC%89-%E5%80%99%E8%A3%9C%E7%94%BB%E5%83%8F%E3%83%BB%E5%8B%95%E7%94%BB_260718_8.jpg'
                    }
                    loading="lazy"
                  />
                  <div className={'source-rc-field-badge'}>{'01'}</div>
                </div>
                <div className={'source-rc-field-body'}>
                  <h3 className={'source-rc-field-title'}>{'農場スタッフ'}</h3>
                  <p className={'source-rc-field-desc'}>
                    {'ドローン防除にも挑戦できる、畑のプロフェッショナル。'}
                  </p>
                  <span className={'source-rc-field-more'}>{'詳しく見る'}</span>
                </div>
              </a>
              <a className={'source-rc-field-card'} href={'/staff-noodle/'}>
                <div className={'source-rc-field-photo'}>
                  <img
                    alt={'製麺スタッフ'}
                    src={
                      'https://kuroiwafarm.co.jp/wp-content/uploads/2026/10/noodle-factory-staff.png'
                    }
                    loading="lazy"
                  />
                  <div className={'source-rc-field-badge'}>{'02'}</div>
                </div>
                <div className={'source-rc-field-body'}>
                  <h3 className={'source-rc-field-title'}>{'製麺スタッフ'}</h3>
                  <p className={'source-rc-field-desc'}>
                    {'自社栽培のそばを、工場で丁寧に打ち上げる仕事。'}
                  </p>
                  <span className={'source-rc-field-more'}>{'詳しく見る'}</span>
                </div>
              </a>
              <a className={'source-rc-field-card'} href={'/staff-bento/'}>
                <div className={'source-rc-field-photo'}>
                  <img
                    alt={'お弁当調理スタッフ'}
                    src={
                      'https://kuroiwafarm.co.jp/wp-content/uploads/2026/10/bento-factory-staff.png.png'
                    }
                    loading="lazy"
                  />
                  <div className={'source-rc-field-badge'}>{'03'}</div>
                </div>
                <div className={'source-rc-field-body'}>
                  <h3 className={'source-rc-field-title'}>
                    {'お弁当調理スタッフ'}
                  </h3>
                  <p className={'source-rc-field-desc'}>
                    {'旬の食材を使ったお弁当を、仕込みから配達まで。'}
                  </p>
                  <span className={'source-rc-field-more'}>{'詳しく見る'}</span>
                </div>
              </a>
              <a className={'source-rc-field-card'} href={'/staff-restaurant/'}>
                <div className={'source-rc-field-photo'}>
                  <img
                    alt={'飲食店スタッフ'}
                    src={
                      'https://kuroiwafarm.co.jp/wp-content/uploads/2026/07/Restaurant.png'
                    }
                    loading="lazy"
                  />
                  <div className={'source-rc-field-badge'}>{'04'}</div>
                </div>
                <div className={'source-rc-field-body'}>
                  <h3 className={'source-rc-field-title'}>
                    {'飲食店スタッフ'}
                  </h3>
                  <p className={'source-rc-field-desc'}>
                    {'農場直営の店舗にて、お客様に一番近い接客を。'}
                  </p>
                  <span className={'source-rc-field-more'}>{'詳しく見る'}</span>
                </div>
              </a>
            </div>
          </div>
        </section>
        <section className={'source-rc-stage'} id={'stage-01'}>
          <div className={'source-rc-stage-inner'}>
            <div className={'source-rc-stage-marker'}>
              <div className={'source-rc-stage-num'}>{'01'}</div>
            </div>
            <div className={'source-rc-stage-content'}>
              <h2>{'農場スタッフ'}</h2>
              <div className={'source-rc-stage-sub'}>
                {'Agricultural Staff'}
              </div>
              <p>
                {
                  'そばの栽培から、ドローンによる防除・生育管理まで。北海道の広大な畑を舞台に、伝統的な農業と最新技術の両方に触れられる仕事です。未経験からドローン操作を学べる環境があります。'
                }
              </p>
              <div className={'source-rc-stage-photo-wrap'}>
                <img
                  className={'source-rc-stage-photo'}
                  alt={'農場スタッフ'}
                  src={
                    'https://kuroiwafarm.co.jp/wp-content/uploads/2026/07/LINE_ALBUM_%E3%81%82%E3%81%90%E3%82%8A%E3%83%8A%E3%83%93%E6%8E%B2%E8%BC%89-%E5%80%99%E8%A3%9C%E7%94%BB%E5%83%8F%E3%83%BB%E5%8B%95%E7%94%BB_260718_8.jpg'
                  }
                  loading="lazy"
                />
                <span className={'source-rc-img-note'}>
                  {'※画像はイメージです。'}
                </span>
              </div>
              <div className={'source-rc-req'}>
                <dl>
                  <dt>{'雇用形態'}</dt>
                  <dd>{'正社員'}</dd>
                  <dt>{'給与'}</dt>
                  <dd>{'月給220,000円〜'}</dd>
                  <dt>{'勤務地'}</dt>
                  <dd>{'北海道中川郡美深町、音威子府村'}</dd>
                  <dt>{'勤務時間'}</dt>
                  <dd>{'8:00〜17:00（休憩60分・実働8時間）'}</dd>
                  <dt>{'応募資格'}</dt>
                  <dd>{'未経験者歓迎／普通自動車免許（AT可）'}</dd>
                </dl>
              </div>
              <div className={'source-rc-cta-group'}>
                <a
                  className={'source-rc-cta-btn source-rc-cta-btn--outline'}
                  href={'/staff-farm/'}
                >
                  {'詳細はこちら'}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={'source-rc-stage'} id={'stage-02'}>
          <div className={'source-rc-stage-inner'}>
            <div className={'source-rc-stage-marker'}>
              <div className={'source-rc-stage-num'}>{'02'}</div>
            </div>
            <div className={'source-rc-stage-content'}>
              <h2>{'製麺スタッフ'}</h2>
              <div className={'source-rc-stage-sub'}>
                {'SOBA PROCESSING STAFF'}
              </div>
              <p>
                {
                  '自社で栽培したそばを、工場で製麺します。原料の受け入れから加工、検品、出荷準備まで。品質へのこだわりを直接手で確かめられる仕事です。'
                }
              </p>
              <div className={'source-rc-stage-photo-wrap'}>
                <img
                  className={'source-rc-stage-photo'}
                  alt={'製麺スタッフ'}
                  src={
                    'https://kuroiwafarm.co.jp/wp-content/uploads/2026/10/noodle-factory-staff.png'
                  }
                  loading="lazy"
                />
                <span className={'source-rc-img-note'}>
                  {'※画像はイメージです。'}
                </span>
              </div>
              <div className={'source-rc-req'}>
                <dl>
                  <dt>{'雇用形態'}</dt>
                  <dd>{'アルバイト・パート'}</dd>
                  <dt>{'給与'}</dt>
                  <dd>{'時給1,200円〜'}</dd>
                  <dt>{'勤務地'}</dt>
                  <dd>{'北海道札幌市中央区南16条西18丁目2-20 K1ビル1階'}</dd>
                  <dt>{'勤務時間'}</dt>
                  <dd>
                    {'9:00〜18:00'}
                    <br />
                    {'（希望シフト制1日3時間程度〜／週2日〜OK）'}
                  </dd>
                  <dt>{'応募資格'}</dt>
                  <dd>
                    {'未経験歓迎・学歴不問'}
                    <br />
                    {'そば打ち・製麺、食品製造の経験があれば尚可'}
                  </dd>
                </dl>
              </div>
              <div className={'source-rc-cta-group'}>
                <a
                  className={'source-rc-cta-btn source-rc-cta-btn--outline'}
                  href={'/staff-noodle/'}
                >
                  {'詳細はこちら'}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={'source-rc-stage'} id={'stage-03'}>
          <div className={'source-rc-stage-inner'}>
            <div className={'source-rc-stage-marker'}>
              <div className={'source-rc-stage-num'}>{'03'}</div>
            </div>
            <div className={'source-rc-stage-content'}>
              <h2>{'お弁当調理スタッフ'}</h2>
              <div className={'source-rc-stage-sub'}>
                {'BENTO COOKING STAFF'}
              </div>
              <p>
                {
                  '自社製麺のそばや旬の食材を使ったお弁当を、仕込みから盛り付け、配達まで担当。地域のお客様の食卓に、毎日できたてを届ける仕事です。'
                }
              </p>
              <div className={'source-rc-stage-photo-wrap'}>
                <img
                  className={'source-rc-stage-photo'}
                  alt={'お弁当調理スタッフ'}
                  src={
                    'https://kuroiwafarm.co.jp/wp-content/uploads/2026/10/bento-factory-staff.png.png'
                  }
                  loading="lazy"
                />
                <span className={'source-rc-img-note'}>
                  {'※画像はイメージです。'}
                </span>
              </div>
              <div className={'source-rc-req'}>
                <dl>
                  <dt>{'雇用形態'}</dt>
                  <dd>{'正社員・アルバイト'}</dd>
                  <dt>{'給与'}</dt>
                  <dd>
                    <div className={'source-rc-salary-row'}>
                      <span className={'source-rc-salary-role'}>
                        {'正社員'}
                      </span>
                      <span>{'月給230,000円〜（店長候補は300,000円〜）'}</span>
                    </div>
                    <div className={'source-rc-salary-row'}>
                      <span className={'source-rc-salary-role'}>
                        {'アルバイト'}
                      </span>
                      <span>{'時給1,200円〜'}</span>
                    </div>
                  </dd>
                  <dt>{'勤務地'}</dt>
                  <dd>
                    {'北海道札幌市西区八軒6条西4丁目2-7 サツドラ八軒6条店内'}
                  </dd>
                  <dt>{'勤務時間'}</dt>
                  <dd>
                    {'8:00〜22:00（実働8h・シフト制）'}
                    <br />
                    {'アルバイトは1日3h・週2日〜もOK'}
                  </dd>
                  <dt>{'応募資格'}</dt>
                  <dd>
                    {'未経験歓迎・経験者優遇'}
                    <br />
                    {'店長候補のみ普通自動車免許（AT限定可）必須'}
                  </dd>
                </dl>
              </div>
              <div className={'source-rc-cta-group'}>
                <a
                  className={'source-rc-cta-btn source-rc-cta-btn--outline'}
                  href={'/staff-bento/'}
                >
                  {'詳細はこちら'}
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className={'source-rc-stage'} id={'stage-04'}>
          <div className={'source-rc-stage-inner'}>
            <div className={'source-rc-stage-marker'}>
              <div className={'source-rc-stage-num'}>{'04'}</div>
            </div>
            <div className={'source-rc-stage-content'}>
              <h2>{'飲食店スタッフ'}</h2>
              <div className={'source-rc-stage-sub'}>{'RESTAURANT STAFF'}</div>
              <p>
                {
                  '農場直営の店舗にて、調理補助・接客・ホールを担当。自社そばや自社食材の魅力を、お客様に一番近い場所で伝える仕事です。'
                }
              </p>
              <div className={'source-rc-stage-photo-wrap'}>
                <img
                  className={'source-rc-stage-photo'}
                  alt={'飲食店スタッフ'}
                  src={
                    'https://kuroiwafarm.co.jp/wp-content/uploads/2026/07/Restaurant.png'
                  }
                  loading="lazy"
                />
                <span className={'source-rc-img-note'}>
                  {'※画像はイメージです。'}
                </span>
              </div>
              <div className={'source-rc-req'}>
                <dl>
                  <dt>{'雇用形態'}</dt>
                  <dd>{'正社員・パート・アルバイト'}</dd>
                  <dt>{'給与'}</dt>
                  <dd>
                    <div className={'source-rc-salary-row'}>
                      <span className={'source-rc-salary-role'}>
                        {'正社員'}
                      </span>
                      <span>{'月給230,000円〜（店長候補は300,000円〜）'}</span>
                    </div>
                    <div className={'source-rc-salary-row'}>
                      <span className={'source-rc-salary-role'}>
                        {'アルバイト'}
                      </span>
                      <span>{'時給1,200円〜'}</span>
                    </div>
                  </dd>
                  <dt>{'勤務地'}</dt>
                  <dd>{'北海道札幌市中央区'}</dd>
                  <dt>{'勤務時間'}</dt>
                  <dd>
                    {'早朝シフト・夜シフトあり（詳細はお問い合わせください）'}
                  </dd>
                  <dt>{'応募資格'}</dt>
                  <dd>
                    {'未経験者歓迎'}
                    <br />
                    {'接客・調理経験があれば尚可'}
                  </dd>
                </dl>
              </div>
              <div className={'source-rc-cta-group'}>
                <a
                  className={'source-rc-cta-btn source-rc-cta-btn--outline'}
                  href={'/staff-restaurant/'}
                >
                  {'詳細はこちら'}
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
