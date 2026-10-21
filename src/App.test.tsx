import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('トップページ', () => {
  it('メイン領域に見出しと紹介文を表示する', () => {
    render(<App />);

    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'ようこそ、ホームページへ',
      }),
    ).toBeVisible();
    expect(
      screen.getByText('ここから、新しいホームページをつくっていきます。'),
    ).toBeVisible();
  });
});
