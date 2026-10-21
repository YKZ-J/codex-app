import { withoutBase } from './paths';
import { withBase } from './paths';
import { useRef, useState } from 'react';
import { images, navigation } from './content';
import HomePage from './HomePage';
import TeachersPage from './TeachersPage';
import LessonsPage from './LessonsPage';

function SchoolNavigation({ currentPath }: { currentPath: string }) {
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
        {navigation.map((item) => (
          <a
            key={item.label}
            href={withBase(item.href)}
            aria-current={
              item.href.replace(/\/+$/, '') === currentPath ? 'page' : undefined
            }
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
  const currentPath = (
    typeof window === 'undefined' ? '/' : withoutBase(window.location.pathname)
  )
    .replace(/\/index\.html$/, '/')
    .replace(/\/+$/, '');
  const page =
    currentPath === '/p/2'
      ? 'teachers'
      : currentPath === '/p/3'
        ? 'lessons'
        : 'home';
  return (
    <>
      <a className="skip-link" href="#main">
        本文へスキップ
      </a>
      <div className="top-strip" aria-hidden="true" />
      <div id="top" className="school-page">
        <header className="school-header">
          <div className="school-brand">
            <img
              src={images.logo}
              alt="Ohana英会話のカラフルなロゴ"
              width="738"
              height="738"
            />
            <h1>
              <a href={withBase('/')}>Ohana英会話</a>
            </h1>
          </div>
          <SchoolNavigation key={currentPath} currentPath={currentPath} />
        </header>
        <div className="school-layout">
          <main id="main" className="school-main">
            {page === 'home' ? (
              <HomePage />
            ) : page === 'teachers' ? (
              <TeachersPage />
            ) : (
              <LessonsPage />
            )}
          </main>
        </div>
        <footer
          className="school-footer"
          style={{ backgroundImage: `url(${images.header})` }}
        >
          <a href="mailto:ohanaeikaiwa@gmail.com">ohanaeikaiwa@gmail.com</a>
          <a href="tel:08060878649">080-6087-8649</a>
        </footer>
      </div>
    </>
  );
}
