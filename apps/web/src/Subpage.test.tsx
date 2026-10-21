import { fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, describe, expect, it } from 'vitest';
import App from './App';
import metadata from './pageMetadata.json';

afterEach(() => window.history.replaceState(null, '', '/'));

describe('公式サイトと同じURLの下層ページ', () => {
  for (const page of metadata) {
    it(`${page.path} に本文とページ見出しを表示する`, () => {
      window.history.replaceState(null, '', page.path);
      render(<App />);
      const main = within(screen.getByRole('main'));
      expect(
        main.getByRole('heading', { level: 1, name: page.title }),
      ).toBeVisible();
      expect(main.getAllByRole('heading', { level: 1 })).toHaveLength(1);
      expect(
        screen.getByRole('navigation', { name: 'パンくずリスト' }),
      ).toBeVisible();
      expect(
        within(
          screen.getByRole('navigation', { name: 'パンくずリスト' }),
        ).getByRole('link', { name: 'ホーム' }),
      ).toHaveAttribute('href', '/');
    });
  }

  it('職種別の給与・勤務地・応募フォームの必須条件を維持する', () => {
    window.history.replaceState(null, '', '/staff-noodle/');
    render(<App />);
    expect(screen.getByText('時給1,200円以上')).toBeVisible();
    expect(screen.getByText(/K1ビル1階（転勤なし）/)).toBeVisible();
    const form = screen.getByRole('form', { name: '応募フォーム' });
    expect(form).toHaveAttribute(
      'action',
      'https://kuroiwafarm.co.jp/staff-noodle/#wpcf7-f1233-p1207-o1',
    );
    expect(
      within(form).getByRole('textbox', { name: /メールアドレス/ }),
    ).toBeRequired();
    expect(
      within(form).getByRole('combobox', { name: /ご希望の職種/ }),
    ).toBeRequired();
  });

  it('問い合わせフォームでブラウザーの入力検証を行い、実際の送信先を維持する', () => {
    window.history.replaceState(null, '', '/contact/');
    render(<App />);
    const form = screen.getByRole('form', { name: 'お問い合わせフォーム' });
    expect(form).toHaveAttribute('method', 'post');
    expect(form).toHaveAttribute(
      'action',
      'https://kuroiwafarm.co.jp/contact/#wpcf7-f23-p21-o1',
    );
    const email = within(form).getByRole('textbox', { name: /メールアドレス/ });
    fireEvent.change(email, { target: { value: 'invalid' } });
    expect(email).toBeInvalid();
    expect(
      within(form).getByRole('textbox', { name: /会社名/ }),
    ).not.toBeRequired();
    expect(
      within(form).getByRole('textbox', { name: /電話番号/ }),
    ).toBeRequired();
    expect(
      within(form).getByRole('button', { name: '送信する' }),
    ).toBeVisible();
  });

  it('お知らせ一覧から全4記事のローカルページへ移動できる', () => {
    window.history.replaceState(null, '', '/news/');
    render(<App />);
    const main = within(screen.getByRole('main'));
    expect(
      main.getByRole('link', { name: /公式ホームページを公開しました/ }),
    ).toHaveAttribute('href', '/official-homepage-launched/');
    expect(main.getAllByRole('time')).toHaveLength(4);
  });

  it('ショップの準備中表示と現在ページの表示を維持する', () => {
    window.history.replaceState(null, '', '/online-shop/');
    render(<App />);
    expect(
      screen.getByRole('heading', { name: '只今準備中です。' }),
    ).toBeVisible();
    const nav = within(
      screen.getByRole('navigation', { name: 'メインナビゲーション' }),
    );
    expect(
      nav.getByRole('link', { name: /オンラインショップ/ }),
    ).toHaveAttribute('aria-current', 'page');
  });

  it('未知のURLではホームに誘導する', () => {
    window.history.replaceState(null, '', '/missing/');
    render(<App />);
    expect(
      screen.getByRole('heading', { name: 'ページが見つかりません' }),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: /ホームへ戻る/ })).toHaveAttribute(
      'href',
      '/',
    );
  });
});
