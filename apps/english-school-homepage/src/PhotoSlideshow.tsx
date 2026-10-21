import { useEffect, useState } from 'react';
import { slides } from './content';

export default function PhotoSlideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(
    () =>
      typeof window !== 'undefined' &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  );
  const [isHovered, setIsHovered] = useState(false);
  const [hasFocus, setHasFocus] = useState(false);
  const isInteracting = isHovered || hasFocus;
  const slide = slides[activeIndex];

  useEffect(() => {
    if (!isPlaying || isInteracting) return;
    const timer = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % slides.length);
    }, 5000);
    return () => window.clearInterval(timer);
  }, [isPlaying, isInteracting]);

  if (!slide) return null;

  function selectSlide(index: number) {
    setActiveIndex((index + slides.length) % slides.length);
    setIsPlaying(false);
  }

  return (
    <section
      className="slideshow"
      aria-label="教室のフォトギャラリー"
      aria-roledescription="カルーセル"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setHasFocus(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget))
          setHasFocus(false);
      }}
    >
      <div className="slide-stage">
        <a
          href={slide.src}
          target="_blank"
          rel="noreferrer"
          aria-label={`${slide.alt}を拡大表示（新しいタブ）`}
        >
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            width="850"
            height="637"
            fetchPriority="high"
          />
        </a>
        <button
          type="button"
          className="slide-arrow previous"
          aria-label="前の写真"
          onClick={() => selectSlide(activeIndex - 1)}
        >
          <span aria-hidden="true" />
        </button>
        <button
          type="button"
          className="slide-arrow next"
          aria-label="次の写真"
          onClick={() => selectSlide(activeIndex + 1)}
        >
          <span aria-hidden="true" />
        </button>
      </div>
      <div className="slide-controls">
        <div className="slide-dots" aria-label="写真を選択">
          {slides.map((item, index) => (
            <button
              type="button"
              key={item.src}
              aria-label={`写真${index + 1}を表示`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => selectSlide(index)}
            >
              <span />
            </button>
          ))}
        </div>
        <button
          type="button"
          className="playback-control"
          aria-label={isPlaying ? '自動再生を停止' : '自動再生を開始'}
          onClick={() => setIsPlaying(!isPlaying)}
        >
          {isPlaying ? 'Ⅱ' : '▷'}
        </button>
      </div>
      <span className="sr-only" aria-live={isPlaying ? 'off' : 'polite'}>
        {activeIndex + 1} / {slides.length}：{slide.alt}
      </span>
    </section>
  );
}
