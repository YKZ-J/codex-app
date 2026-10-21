import { act, fireEvent, render, screen } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import { HeroMedia } from './HeroMedia';

afterEach(() => {
  vi.useRealTimers();
  vi.unstubAllGlobals();
  vi.restoreAllMocks();
});

function mockMotionPreference(reduce: boolean) {
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({
      matches: reduce,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  );
}

describe('ヒーローの動き', () => {
  it('一時停止中は写真を維持し、再生すると動画に切り替わる', async () => {
    vi.useFakeTimers();
    mockMotionPreference(false);
    const play = vi
      .spyOn(HTMLMediaElement.prototype, 'play')
      .mockResolvedValue();
    const pause = vi
      .spyOn(HTMLMediaElement.prototype, 'pause')
      .mockImplementation(() => {});
    const { container } = render(<HeroMedia />);
    fireEvent.click(
      screen.getByRole('button', { name: 'ヒーローの動きを一時停止' }),
    );
    await act(() => vi.advanceTimersByTime(7000));
    expect(container.querySelector('video')).toBeNull();
    fireEvent.click(
      screen.getByRole('button', { name: 'ヒーローの動きを再生' }),
    );
    await act(() => vi.advanceTimersByTime(6000));
    expect(container.querySelector('video')).toHaveAttribute('playsinline');
    expect(play).toHaveBeenCalled();
    fireEvent.click(
      screen.getByRole('button', { name: 'ヒーローの動きを一時停止' }),
    );
    expect(pause).toHaveBeenCalled();
  });

  it('動きを抑える設定では静止画を表示する', () => {
    mockMotionPreference(true);
    const { container } = render(<HeroMedia />);
    expect(screen.getByRole('img', { name: '黒岩農場の畑' })).toBeVisible();
    expect(container.querySelector('video')).toBeNull();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
