import { useEffect, useRef, useState } from 'react';
import { assetUrl } from './content';

export function HeroMedia() {
  const [scene, setScene] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(true);
  const video = useRef<HTMLVideoElement>(null);
  const playing = !paused && !reducedMotion;

  useEffect(() => {
    if (!window.matchMedia) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setReducedMotion(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);

  useEffect(() => {
    if (!playing || scene !== 0) return;
    const timer = window.setTimeout(() => setScene(1), 6000);
    return () => window.clearTimeout(timer);
  }, [playing, scene]);

  useEffect(() => {
    const player = video.current;
    if (!player) return;
    if (playing) {
      void player.play().catch(() => setPaused(true));
    } else {
      player.pause();
    }
  }, [playing, scene]);

  return (
    <>
      <img
        className={`hero-image ${playing && scene === 0 ? 'is-drifting' : ''}`}
        src={assetUrl('top-000.png')}
        alt="黒岩農場の畑"
        fetchPriority="high"
      />
      {scene > 0 && !reducedMotion && (
        <video
          key={scene}
          ref={video}
          className="hero-image hero-video"
          muted
          playsInline
          preload="metadata"
          aria-hidden="true"
          onEnded={() => setScene(scene === 1 ? 2 : 0)}
          onError={() => setScene(0)}
        >
          {scene === 2 && (
            <source
              src={assetUrl('tractor_mobile_v9.mp4')}
              type="video/mp4"
              media="(max-width: 767px)"
            />
          )}
          <source
            src={
              scene === 1
                ? 'https://kuroiwafarm.co.jp/wp-content/uploads/2026/07/drone_top2.mp4'
                : assetUrl('tractor_trimmed_faststart.mp4')
            }
            type="video/mp4"
          />
        </video>
      )}
      {!reducedMotion && (
        <button
          type="button"
          className="hero-playback"
          aria-label={
            paused ? 'ヒーローの動きを再生' : 'ヒーローの動きを一時停止'
          }
          onClick={() => setPaused(!paused)}
        >
          <span aria-hidden="true">{paused ? '▶' : 'Ⅱ'}</span>
          {paused ? '再生' : '一時停止'}
        </button>
      )}
    </>
  );
}
