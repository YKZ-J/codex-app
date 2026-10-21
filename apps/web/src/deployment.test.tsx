import { render, screen } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import App from './App';

afterEach(() => {
  vi.unstubAllEnvs();
  window.history.replaceState(null, '', '/');
});

it('renders a nested page and navigation under the production base', () => {
  vi.stubEnv('BASE_URL', '/codex-app/');
  window.history.replaceState(null, '', '/codex-app/company/index.html');
  render(<App />);
  expect(
    screen.getByRole('heading', { level: 1, name: '会社情報' }),
  ).toBeVisible();
  expect(screen.getAllByRole('link', { name: '会社情報' })[0]).toHaveAttribute(
    'href',
    '/codex-app/company/',
  );
});
