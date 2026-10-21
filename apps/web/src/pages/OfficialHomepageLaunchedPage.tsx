import { withBase } from '../paths';
export default function OfficialHomepageLaunchedPage() {
  return (
    <div className={'source-post_content'}>
      <div className={'source-khp-wrap'}>
        <div className={'source-khp-lead'}>
          <p>{'この度、株式会社黒岩農場のホームページを公開いたしました。'}</p>
          <p>
            {
              '1911年から続くそば農家として、栽培から商品づくりまでの取り組みをご紹介します。'
            }
          </p>
          <p>{'今後ともどうぞよろしくお願いいたします。'}</p>
        </div>
        <p className={'source-khp-section-title'}>{'BUSINESS'}</p>
        <p className={'source-khp-section-heading'}>{'私たちの事業'}</p>
        <div className={'source-khp-cards'}>
          <div className={'source-khp-card'}>
            <span className={'source-num'}>{'1'}</span>
            <p className={'source-ctitle'}>{'そばの栽培'}</p>
            <p className={'source-ctext'}>
              {'道北随一の産地で、種まきから収穫まで一貫した自社栽培。'}
            </p>
          </div>
          <div className={'source-khp-card'}>
            <span className={'source-num'}>{'2'}</span>
            <p className={'source-ctitle'}>{'そばの加工'}</p>
            <p className={'source-ctext'}>
              {'丸抜き・製粉・製麺まで自社で行い、鮮度と風味を守ります。'}
            </p>
          </div>
          <div className={'source-khp-card'}>
            <span className={'source-num'}>{'3'}</span>
            <p className={'source-ctitle'}>{'商品・飲食店'}</p>
            <p className={'source-ctext'}>
              {
                '生そば・冷凍そばの販売と、飲食店「くろとしろ」の出店準備を進行中。'
              }
            </p>
          </div>
        </div>
        <div className={'source-khp-links'}>
          <p className={'source-ltitle'}>{'CHECK OUR SITE'}</p>
          <ul>
            <li>
              <a href={withBase('/company/')}>{'会社概要'}</a>
            </li>
            <li>
              <a href={withBase('/business/')}>{'事業紹介'}</a>
            </li>
            <li>
              <a href={withBase('/recruit/')}>{'採用情報'}</a>
            </li>
            <li>
              <a href={withBase('/online-shop/')}>{'オンラインショップ'}</a>
            </li>
            <li>
              <a href={withBase('/news/')}>{'お知らせ'}</a>
            </li>
            <li>
              <a href={withBase('/contact/')}>{'お問い合わせ'}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
