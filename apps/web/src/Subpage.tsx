import metadata from './pageMetadata.json';
import { pageComponents } from './pages';
import { news } from './content';

export function Subpage({ path }: { path: string }) {
  const normalizedPath =
    path === '/privacy-policy/' ? '/privacy/' : `${path.replace(/\/$/, '')}/`;
  const page = metadata.find((item) => item.path === normalizedPath);
  const entry = Object.entries(pageComponents).find(
    ([key]) => key === normalizedPath,
  );
  const Content = entry?.[1];
  if (!page || !Content) {
    return (
      <main id="main" className="page-width not-found">
        <h1>ページが見つかりません</h1>
        <a className="text-link" href="/">
          ホームへ戻る →
        </a>
      </main>
    );
  }
  return (
    <main
      id="main"
      className={`subpage subpage-${normalizedPath.split('/')[1]}`}
    >
      <title>{page.title} | 株式会社黒岩農場</title>
      <meta name="description" content={page.description} />
      <div className="subpage-heading">
        {page.images.length > 0 && (
          <div className="subpage-heading-images" aria-hidden="true">
            {page.images.map((src) => (
              <img key={src} src={src} alt="" fetchPriority="high" />
            ))}
          </div>
        )}
        <div className="page-width">
          <p className="eyebrow">KUROIWA FARM</p>
          <h1>{page.title}</h1>
        </div>
      </div>
      <nav className="page-width breadcrumbs" aria-label="パンくずリスト">
        <a href="/">ホーム</a>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{page.title}</span>
      </nav>
      {normalizedPath === '/business/' && (
        <nav className="page-width section-navigation" aria-label="事業一覧">
          {[
            'そば農場の運営',
            'ドローンの農薬防除',
            'そばの加工',
            '自社商品',
            'お弁当',
            '飲食店',
          ].map((label, index) => (
            <a key={label} href={`#business-0${index + 1}`}>
              {label} ↓
            </a>
          ))}
        </nav>
      )}
      {normalizedPath === '/company/' && (
        <nav
          className="page-width section-navigation"
          aria-label="会社情報の目次"
        >
          {[
            ['greeting', '代表挨拶'],
            ['overview', '会社概要'],
            ['history', '沿革'],
            ['access', 'アクセス'],
          ].map(([id, label]) => (
            <a href={`#${id}`} key={id}>
              {label} ↓
            </a>
          ))}
        </nav>
      )}
      <div className="page-width source-content">
        <Content />
      </div>
      {normalizedPath === '/news/' && (
        <div className="page-width subpage-news-list">
          {news.map((item) => (
            <a className="news-item" href={item.href} key={item.dateTime}>
              <time dateTime={item.dateTime}>{item.date}</time>
              <span className="news-tag">お知らせ</span>
              <h2>{item.title}</h2>
              <span aria-hidden="true">→</span>
            </a>
          ))}
        </div>
      )}
      {news.some((item) => item.href === normalizedPath) && (
        <div className="page-width article-back">
          <a className="text-link" href="/news/">
            ← お知らせ一覧へ戻る
          </a>
        </div>
      )}
      {normalizedPath === '/business/' && (
        <div className="subpage-contact page-width">
          <h2>お問い合わせ</h2>
          <a className="button" href="/contact/">
            お問い合わせ →
          </a>
        </div>
      )}
    </main>
  );
}
