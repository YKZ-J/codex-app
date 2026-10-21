import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, beforeEach, expect, it, vi } from 'vitest';
import App from './App';

let preference: EventTarget & { matches: boolean };

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  preference = Object.assign(new EventTarget(), { matches: false });
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => preference),
  );
  vi.stubGlobal(
    'IntersectionObserver',
    class {
      observe() {}
      unobserve() {}
      disconnect() {}
    },
  );
});

afterEach(() => vi.unstubAllGlobals());

it('reveals offscreen content when a keyboard user focuses its link', () => {
  render(<App />);
  const lessons = screen.getByRole('region', { name: 'レッスンについて' });
  expect(lessons).toHaveClass('reveal-pending');
  fireEvent.focus(screen.getByRole('link', { name: '「Lessons／レッスン」' }));
  expect(lessons).not.toHaveClass('reveal-pending');
});

it('keeps content visible when reduced motion is enabled', () => {
  preference.matches = true;
  render(<App />);
  expect(
    screen.getByRole('region', { name: 'Ohana英会話とは' }),
  ).not.toHaveClass('reveal-pending');
});

it('reveals pending content when the motion preference changes', () => {
  render(<App />);
  const about = screen.getByRole('region', { name: 'Ohana英会話とは' });
  expect(about).toHaveClass('reveal-pending');
  act(() => {
    preference.matches = true;
    preference.dispatchEvent(new Event('change'));
  });
  expect(about).not.toHaveClass('reveal-pending');
});
