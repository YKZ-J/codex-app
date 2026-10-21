import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('黒岩農場のトップページ', () => {
  it('主要事業、準備中の取り組み、商品と採用導線を表示する', () => {
    render(<App />);
    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('heading', {
        level: 1,
        name: '北海道の大地から、そばの未来を拓く。',
      }),
    ).toBeVisible();
    expect(main.getByRole('img', { name: '黒岩農場の畑' })).toHaveAttribute(
      'src',
      expect.stringContaining('top-000.png'),
    );
    expect(main.getAllByRole('article')).toHaveLength(5);
    for (const title of [
      'そばの栽培',
      'そばの加工・製粉・製麺',
      '商品開発・販売',
      'ドローン農薬防除',
      'お弁当事業',
      '飲食店事業',
    ]) {
      expect(
        main.getByRole('heading', { level: 3, name: title }),
      ).toBeVisible();
    }
    expect(
      main.getByRole('heading', { level: 2, name: 'お知らせ' }),
    ).toBeVisible();
    expect(main.getAllByText('準備中')).toHaveLength(2);
    expect(main.getByText(/オンラインショップは準備中です/)).toBeVisible();
    expect(main.getByRole('link', { name: /採用情報を見る/ })).toHaveAttribute(
      'href',
      '/recruit/',
    );
    expect(
      main.getByRole('link', { name: /商品について問い合わせる/ }),
    ).toHaveAttribute('href', '/contact/');
    expect(main.getByRole('link', { name: /事業を知る/ })).toHaveAttribute(
      'href',
      '#business',
    );
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

  it('メニューの事業紹介リンクを選択すると閉じる', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'メニューを開く' }));
    const menu = within(
      screen.getByRole('navigation', { name: '展開メニュー' }),
    );
    const link = menu.getByRole('link', { name: /事業紹介/ });
    expect(link).toHaveAttribute('href', '/business/');
    link.addEventListener('click', (event) => event.preventDefault(), {
      once: true,
    });
    fireEvent.click(link);
    expect(
      screen.queryByRole('navigation', { name: '展開メニュー' }),
    ).not.toBeInTheDocument();
  });
  it('閉じたメニューを操作対象から外し、メニュー外の操作で閉じる', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'メニューを開く' });
    const panel = document.getElementById('expanded-navigation');
    expect(panel).toHaveAttribute('inert');
    fireEvent.click(button);
    expect(panel).not.toHaveAttribute('inert');
    fireEvent.pointerDown(screen.getByRole('main'));
    expect(button).toHaveAttribute('aria-expanded', 'false');
    expect(panel).toHaveAttribute('inert');
  });

  it('フォーカスがヘッダーから離れるとメニューを閉じる', () => {
    render(<App />);
    const button = screen.getByRole('button', { name: 'メニューを開く' });
    fireEvent.click(button);
    fireEvent.blur(button, { relatedTarget: screen.getByRole('main') });
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});
