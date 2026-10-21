import { render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import App from './App';

afterEach(() => {
  vi.unstubAllEnvs();
  window.history.replaceState(null, '', '/');
});

it('renders a nested page and navigation under the production base', () => {
  vi.stubEnv('BASE_URL', '/codex-app/english-school-homepage/');
  window.history.replaceState(
    null,
    '',
    '/codex-app/english-school-homepage/p/2/index.html',
  );
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 2, name: '講師の紹介' }),
  ).toBeVisible();
  expect(
    screen.getAllByRole('link', { name: 'Teachers(講師の紹介)' })[0],
  ).toHaveAttribute('href', '/codex-app/english-school-homepage/p/2/');
});
