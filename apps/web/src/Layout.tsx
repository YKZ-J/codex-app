import { withBase } from './paths';
import { useEffect, useRef, useState } from 'react';
import { navigation } from './content';

export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? '↗' : '→'}</span>;
}

function Wordmark() {
  return (
    <a className="wordmark" href={withBase('/')} aria-label="黒岩農場 ホーム">
      <img
        src={withBase('/images/kuroiwa-logo.png')}
        alt="株式会社黒岩農場"
        width="1734"
        height="372"
      />
    </a>
  );
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOutside = (event: PointerEvent) => {
      if (
        event.target instanceof Node &&
        !header.current?.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };
    const initialWidth = window.innerWidth;
    const closeOnResize = () => {
      if (window.innerWidth === initialWidth) return;
      if (header.current?.contains(document.activeElement)) {
        menuButton.current?.focus();
      }
      setIsMenuOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    window.addEventListener('resize', closeOnResize);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      window.removeEventListener('resize', closeOnResize);
    };
  }, [isMenuOpen]);

  return (
    <header
      ref={header}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setIsMenuOpen(false);
      }}
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
          <a
            key={item.label}
            href={withBase(item.href)}
            aria-current={
              withBase(item.href) === window.location.pathname
                ? 'page'
                : undefined
            }
          >
            {item.label}
            {item.label === 'オンラインショップ' && (
              <small className="nav-status">準備中</small>
            )}
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
      <nav
        id="expanded-navigation"
        className={`expanded-nav ${isMenuOpen ? 'is-open' : ''}`}
        aria-hidden={!isMenuOpen}
        inert={!isMenuOpen}
        aria-label="展開メニュー"
      >
        <p className="eyebrow">KUROIWA FARM</p>
        {navigation.map((item, index) => (
          <a
            key={item.label}
            style={{ transitionDelay: isMenuOpen ? `${index * 35}ms` : '0ms' }}
            href={withBase(item.href)}
            aria-current={
              withBase(item.href) === window.location.pathname
                ? 'page'
                : undefined
            }
            onClick={() => setIsMenuOpen(false)}
          >
            <span className="menu-number">0{index + 1}</span>
            {item.label}
            {item.label === 'オンラインショップ' && (
              <small className="nav-status">準備中</small>
            )}
            <Arrow />
          </a>
        ))}
      </nav>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top page-width">
        <div>
          <Wordmark />
          <p className="footer-company">
            株式会社黒岩農場
            <br />
            北海道・美深町 / 音威子府村
          </p>
        </div>
        <div className="follow-us">
          <span>FOLLOW US</span>
          <a
            href={'https://www.instagram.com/kuroiwa.farm/'}
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
            <a href={withBase(item.href)} key={item.label}>
              {item.label}
              {item.label === 'オンラインショップ' && (
                <small className="nav-status">準備中</small>
              )}
            </a>
          ))}
        </nav>
        <div className="footer-legal">
          <div>
            <a href={withBase('/privacy/')}>プライバシーポリシー</a>
            <a href={withBase('/sitemap/')}>サイトマップ</a>
          </div>
          <small>© 株式会社黒岩農場</small>
        </div>
      </div>
    </footer>
  );
}
