import { act, fireEvent, render, screen, within } from '@testing-library/react';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import App from './App';

beforeEach(() => {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches: false })),
  );
});

afterEach(() => {
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
    ).toHaveAttribute('href', 'https://ohanaeikaiwa.crayon1.com/p/2/');
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
