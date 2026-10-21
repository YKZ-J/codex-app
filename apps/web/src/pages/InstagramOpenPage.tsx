export default function InstagramOpenPage() {
  return (
    <div className={'source-post_content'}>
      <div className={'source-ig-wrap'}>
        <div className={'source-ig-lead'}>
          <p>
            {
              'この度、株式会社黒岩農場の公式Instagramアカウントを開設いたしました。'
            }
          </p>
          <p>
            {
              'そばの生産風景や商品情報、展示会・イベントの様子など、日々の取り組みを発信してまいります。'
            }
          </p>
        </div>
        <div className={'source-ig-points'}>
          <div className={'source-ig-point'}>{'🌾 そば畑の生産風景'}</div>
          <div className={'source-ig-point'}>{'🥡 商品・お弁当の情報'}</div>
          <div className={'source-ig-point'}>{'📣 イベント・展示会情報'}</div>
        </div>
        <a
          className={'source-ig-cta'}
          href={'https://www.instagram.com/kuroiwa.farm/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          {'Instagramをフォローする'}
        </a>
        <p className={'source-ig-handle'}>{'@kuroiwa.farm'}</p>
      </div>
    </div>
  );
}
