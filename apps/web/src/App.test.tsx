import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('黒岩農場のトップページ', () => {
  it('メインビジュアル、6つの事業、お知らせを表示する', () => {
    render(<App />);
    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('heading', {
        level: 1,
        name: '新しい時代に、新しい農業を。',
      }),
    ).toBeVisible();
    expect(main.getByRole('img', { name: '黒岩農場の畑' })).toHaveAttribute(
      'src',
      expect.stringContaining('top-000.png'),
    );
    expect(main.getAllByRole('article')).toHaveLength(6);
    for (const title of [
      '農業',
      'ドローン農薬防除',
      '加工',
      '商品',
      'お弁当',
      '飲食店',
      'NEWS',
    ]) {
      expect(
        main.getByRole('heading', { level: 2, name: title }),
      ).toBeVisible();
    }
    expect(main.getByText('公式ホームページを公開しました')).toBeVisible();
  });

  it('メニューを開閉し、Escapeでボタンにフォーカスを戻す', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'メニューを開く' });
    expect(button).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(button);
    const menu = screen.getByRole('navigation', { name: '展開メニュー' });
    expect(button).toHaveAttribute('aria-expanded', 'true');
    const home = within(menu).getByRole('link', { name: /ホーム/ });
    home.focus();
    fireEvent.keyDown(home, { key: 'Escape' });
    expect(
      screen.queryByRole('navigation', { name: '展開メニュー' }),
    ).not.toBeInTheDocument();
    expect(button).toHaveFocus();
  });

  it('メニューのページ内リンクを選択すると閉じる', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const menu = within(
      screen.getByRole('navigation', { name: '展開メニュー' }),
    );
    const link = menu.getByRole('link', { name: /事業紹介/ });
    expect(link).toHaveAttribute('href', '#business');
    fireEvent.click(link);
    expect(
      screen.queryByRole('navigation', { name: '展開メニュー' }),
    ).not.toBeInTheDocument();
  });
});
