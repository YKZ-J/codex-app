import { useEffect } from 'react';
import { Header, Footer } from './Layout';
import HomePage from './HomePage';
import { Subpage } from './Subpage';

export default function App() {
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0, rootMargin: '0px 0px -40px 0px' },
    );
    const candidates = Array.from(
      document.querySelectorAll(
        'main > section:not(.hero), .business-row, .source-content section, .source-content article, .source-content form, .source-grid > *, .source-khp-cards > *, .source-cs-privacy-inner > *, .source-os-soon, .subpage-news-list > *, .subpage-contact.page-width, .not-found > *',
      ),
    );
    const targets = candidates.filter(
      (element) =>
        !candidates.some(
          (other) => other !== element && element.contains(other),
        ),
    );
    const content = document.querySelector('.source-content');
    if (content && !targets.some((element) => content.contains(element))) {
      targets.push(...content.children);
    }
    targets.forEach((element) => {
      element.classList.add('reveal');
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      targets.forEach((element) =>
        element.classList.remove('reveal', 'is-visible'),
      );
    };
  }, []);

  const path = window.location.pathname.replace(/\/index\.html$/, '/');
  return (
    <>
      <a href="#main" className="skip-link">
        本文へスキップ
      </a>
      <Header />
      {path === '/' ? <HomePage /> : <Subpage path={path} />}
      <Footer />
    </>
  );
}
