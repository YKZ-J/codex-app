export default function SitemapPage() {
  return (
    <div className={'source-post_content'}>
      <div id={'kf-sitemap'}>
        <div className={'source-wrap'}>
          <div className={'source-home-row'}>
            <a className={'source-col-title'} href={'/'}>
              {'ホーム'}
            </a>
          </div>
          <div className={'source-grid'}>
            <div className={'source-col'}>
              <div className={'source-col-head'}>
                <a className={'source-col-title'} href={'/company/'}>
                  {'会社情報'}
                </a>
              </div>
              <ul className={'source-sub'}>
                <li>
                  <a href={'/company/#greeting'}>{'代表挨拶'}</a>
                </li>
                <li>
                  <a href={'/company/#overview'}>{'会社概要'}</a>
                </li>
                <li>
                  <a href={'/company/#history'}>{'沿革'}</a>
                </li>
                <li>
                  <a href={'/company/#access'}>{'アクセス'}</a>
                </li>
              </ul>
            </div>
            <div className={'source-col'}>
              <div className={'source-col-head'}>
                <a className={'source-col-title'} href={'/business/'}>
                  {'事業紹介'}
                </a>
              </div>
              <ul className={'source-sub'}>
                <li>
                  <a href={'/business/#business-01'}>{'そば農場の運営'}</a>
                </li>
                <li>
                  <a href={'/business/#business-02'}>{'ドローンの農薬防除'}</a>
                </li>
                <li>
                  <a href={'/business/#business-03'}>{'そばの加工'}</a>
                </li>
                <li>
                  <a href={'/business/#business-04'}>{'自社商品'}</a>
                </li>
                <li>
                  <a href={'/business/#business-05'}>{'お弁当'}</a>
                </li>
                <li>
                  <a href={'/business/#business-06'}>{'飲食店'}</a>
                </li>
              </ul>
            </div>
            <div className={'source-col'}>
              <div className={'source-col-head'}>
                <a className={'source-col-title'} href={'/recruit/'}>
                  {'採用情報'}
                </a>
              </div>
              <ul className={'source-sub'}>
                <li>
                  <a href={'/staff-farm/'}>{'農場スタッフ'}</a>
                </li>
                <li>
                  <a href={'/staff-noodle/'}>{'製麺スタッフ'}</a>
                </li>
                <li>
                  <a href={'/staff-bento/'}>{'お弁当調理スタッフ'}</a>
                </li>
                <li>
                  <a href={'/staff-restaurant/'}>{'飲食店スタッフ'}</a>
                </li>
              </ul>
            </div>
            <div className={'source-col'}>
              <p className={'source-col-title'}>{'公式SNS'}</p>
              <ul className={'source-plain'}>
                <li>
                  <a
                    href={'https://www.instagram.com/kuroiwa.farm'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {'Instagram'}
                  </a>
                </li>
              </ul>
            </div>
            <div className={'source-col'}>
              <p className={'source-col-title'}>{'その他'}</p>
              <ul className={'source-plain'}>
                <li>
                  <a href={'/online-shop/'}>{'オンラインショップ'}</a>
                </li>
                <li>
                  <a href={'/news/'}>{'お知らせ'}</a>
                </li>
                <li>
                  <a href={'/contact/'}>{'お問い合わせ'}</a>
                </li>
                <li>
                  <a href={'/privacy/'}>{'プライバシーポリシー'}</a>
                </li>
                <li>
                  <a href={'/sitemap/'}>{'サイトマップ'}</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
