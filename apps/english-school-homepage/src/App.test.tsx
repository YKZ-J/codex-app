import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  window.history.replaceState(null, '', '/');
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  );
});

afterEach(() => {
  window.history.replaceState(null, '', '/');
  vi.useRealTimers();
  vi.unstubAllGlobals();
});

describe('Ohana英会話ホームページ', () => {
  it('教室紹介・レッスン・イベント・連絡先を表示する', () => {
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 1, name: 'Ohana英会話' }),
    ).toBeVisible();
    const main = within(screen.getByRole('main'));
    for (const name of [
      'ハワイ出身講師と学ぶ英会話教室',
      'Ohana英会話とは',
      'レッスンについて',
      'Ohanaになろう〜ハワイフェスティバル〜',
      'ロコHAWAII',
    ]) {
      expect(main.getByRole('heading', { level: 2, name })).toBeVisible();
    }
    expect(
      screen.getByRole('link', { name: 'ohanaeikaiwa@gmail.com' }),
    ).toHaveAttribute('href', 'mailto:ohanaeikaiwa@gmail.com');
    expect(screen.getByRole('link', { name: '080-6087-8649' })).toHaveAttribute(
      'href',
      'tel:08060878649',
    );
    expect(
      screen.getByRole('link', { name: 'Teachers(講師の紹介)' }),
    ).toHaveAttribute('href', '/p/2/');
  });

  it('写真を送る・戻す・番号を指定する操作ができる', () => {
    render(<App />);
    expect(screen.getByRole('button', { name: '写真1を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    fireEvent.click(screen.getByRole('button', { name: '前の写真' }));
    expect(
      screen.getByRole('img', {
        name: '生徒さんと一緒にダイアモンドヘッドハイキング',
      }),
    ).toBeVisible();
    fireEvent.click(screen.getByRole('button', { name: '次の写真' }));
    expect(screen.getByRole('button', { name: '写真1を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    fireEvent.click(screen.getByRole('button', { name: '写真3を表示' }));
    expect(
      screen.getByRole('img', { name: 'ハワイでの生徒さんとの交流' }),
    ).toBeVisible();
    expect(
      screen.getByRole('button', { name: '自動再生を開始' }),
    ).toBeVisible();
  });

  it('5秒ごとに切り替わり、停止後は写真を維持する', async () => {
    vi.useFakeTimers();
    render(<App />);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000);
    });
    expect(screen.getByRole('button', { name: '写真2を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    fireEvent.click(screen.getByRole('button', { name: '自動再生を停止' }));
    await act(async () => {
      await vi.advanceTimersByTimeAsync(10000);
    });
    expect(screen.getByRole('button', { name: '写真2を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('マウスが離れてもフォーカス中は自動再生を一時停止する', async () => {
    vi.useFakeTimers();
    render(<App />);
    const gallery = screen.getByRole('region', {
      name: '教室のフォトギャラリー',
    });
    fireEvent.mouseEnter(gallery);
    fireEvent.focus(screen.getByRole('button', { name: '次の写真' }));
    fireEvent.mouseLeave(gallery);
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000);
    });
    expect(screen.getByRole('button', { name: '写真1を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
    fireEvent.blur(gallery, { relatedTarget: document.body });
    await act(async () => {
      await vi.advanceTimersByTimeAsync(5000);
    });
    expect(screen.getByRole('button', { name: '写真2を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('モーション軽減が有効な場合は自動再生しない', async () => {
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    );
    vi.useFakeTimers();
    render(<App />);
    expect(
      screen.getByRole('button', { name: '自動再生を開始' }),
    ).toBeVisible();
    await act(async () => {
      await vi.advanceTimersByTimeAsync(10000);
    });
    expect(screen.getByRole('button', { name: '写真1を表示' })).toHaveAttribute(
      'aria-current',
      'true',
    );
  });

  it('メニューを開いてEscapeで閉じることができる', () => {
    render(<App />);
    const toggle = screen.getByRole('button', { name: 'メニュー' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute('aria-expanded', 'true');
    const homeLink = screen.getByRole('link', { name: 'Top page(ホーム)' });
    homeLink.focus();
    fireEvent.keyDown(homeLink, { key: 'Escape' });
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
    expect(toggle).toHaveFocus();
    fireEvent.click(toggle);
    fireEvent.click(homeLink);
    expect(toggle).toHaveAttribute('aria-expanded', 'false');
  });
});

describe('下層ページ', () => {
  it.each(['/p/2/', '/p/2', '/p/2/index.html'])(
    '講師ページに直接アクセスできる：%s',
    (path) => {
      window.history.replaceState(null, '', path);
      render(<App />);
      expect(
        screen.getByRole('heading', { level: 2, name: '講師の紹介' }),
      ).toBeVisible();
      expect(
        screen.getByRole('heading', { level: 3, name: 'Chad （チャド）' }),
      ).toBeVisible();
      expect(
        screen.getByRole('heading', { level: 3, name: 'Miho （実穂）' }),
      ).toBeVisible();
      expect(
        screen.getByRole('img', { name: 'Chad（チャド）先生' }),
      ).toHaveAttribute('src', expect.stringContaining('/335966/637_807.jpg'));
      expect(
        screen.getByText(/Hawaii Pacific University, B.A. in Psychology/),
      ).toBeVisible();
      expect(
        screen.getByRole('link', { name: 'Teachers(講師の紹介)' }),
      ).toHaveAttribute('aria-current', 'page');
      expect(
        screen.getByRole('link', { name: 'Top page(ホーム)' }),
      ).toHaveAttribute('href', '/');
      expect(
        screen.queryByRole('region', { name: '教室のフォトギャラリー' }),
      ).not.toBeInTheDocument();
    },
  );

  it('レッスンページに日程・料金・教室情報を表示する', () => {
    window.history.replaceState(null, '', '/p/3/');
    render(<App />);
    expect(
      screen.getByRole('heading', { level: 2, name: 'レッスン日程＆料金' }),
    ).toBeVisible();
    const table = within(
      screen.getByRole('table', {
        name: 'グループレッスンの教室・曜日・時間・クラス',
      }),
    );
    expect(table.getAllByRole('row')).toHaveLength(13);
    expect(table.getByText('19:30〜20:30')).toBeVisible();
    expect(table.getByText('15:30〜16:20')).toBeVisible();
    expect(table.getByText('基礎英語（月2回のみ特別クラス）')).toBeVisible();
    const monthly = within(
      screen.getByRole('region', { name: '定額制（月額）' }),
    );
    expect(monthly.getByText('5,000')).toBeVisible();
    expect(monthly.getByText('6,000')).toBeVisible();
    const ticket = within(
      screen.getByRole('region', { name: 'チケット制（１回）' }),
    );
    expect(ticket.getByText('1,700')).toBeVisible();
    expect(ticket.getByText('2,000')).toBeVisible();
    expect(screen.getByText('１回 2,700円')).toBeVisible();
    expect(screen.getByText('講師２人での受講は800円追加')).toBeVisible();
    expect(screen.getByText('講師宅以外での受講は300円追加')).toBeVisible();
    expect(
      screen.getAllByRole('link', { name: /をGoogleマップで開く/ }),
    ).toHaveLength(4);
    expect(
      screen.getByRole('link', { name: 'Lessons(レッスン日程＆料金)' }),
    ).toHaveAttribute('aria-current', 'page');
  });

  it('ホームからレッスンページへの導線がアプリ内を指す', () => {
    render(<App />);
    expect(
      screen.getByRole('link', { name: '「Lessons／レッスン」' }),
    ).toHaveAttribute('href', '/p/3/');
    expect(
      screen.getByRole('link', { name: 'Lessons(レッスン日程＆料金)' }),
    ).toHaveAttribute('href', '/p/3/');
    expect(
      screen.getByRole('link', { name: 'Top page(ホーム)' }),
    ).toHaveAttribute('aria-current', 'page');
  });
});
