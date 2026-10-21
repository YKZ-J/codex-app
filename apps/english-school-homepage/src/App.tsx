import { withBase, withoutBase } from './paths';
import { useEffect, useRef, useState } from 'react';
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
  const main = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!main.current || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (preference.matches) return;

    const targets = Array.from(
      main.current.querySelectorAll(
        '.welcome-panel, .about-section, .lessons-section, .social-list > li, .event-section, .inner-page-header, .page-introduction, .teacher-profile, .lesson-page-section > h3, .lesson-block, .private-details, .classroom-card, .page-next-step',
      ),
    );
    const showAll = () => {
      targets.forEach((target) => target.classList.remove('reveal-pending'));
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove('reveal-pending');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -24px 0px' },
    );

    targets.forEach((target) => {
      target.classList.add('scroll-reveal', 'reveal-pending');
      observer.observe(target);
    });
    preference.addEventListener('change', showAll);
    return () => {
      observer.disconnect();
      preference.removeEventListener('change', showAll);
      targets.forEach((target) =>
        target.classList.remove('scroll-reveal', 'reveal-pending'),
      );
    };
  }, []);

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
          <main
            ref={main}
            id="main"
            className="school-main"
            onFocusCapture={(event) => {
              event.target
                .closest('.reveal-pending')
                ?.classList.remove('reveal-pending');
            }}
          >
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
