import { Header, Footer } from './Layout';
import HomePage from './HomePage';
import { Subpage } from './Subpage';

export default function App() {
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
