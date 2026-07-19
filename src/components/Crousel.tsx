import { useCallback, useEffect, useRef, type ReactNode } from "react";

export interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  getKey: (item: T, index: number) => string;
  /** Milliseconds between auto-advances. Set to 0 to disable autoplay. */
  autoplayInterval?: number;
  ariaLabel: string;
}

export function Carousel<T>({
  items,
  renderItem,
  getKey,
  autoplayInterval = 4000,
  ariaLabel,
}: CarouselProps<T>) {
  const trackRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | undefined>(undefined);
  const isHoveringRef = useRef(false);

  const getStep = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const firstItem = track.firstElementChild as HTMLElement | null;
    if (!firstItem) return 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || "0");
    return firstItem.getBoundingClientRect().width + gap;
  }, []);

  const scrollByStep = useCallback(
    (direction: 1 | -1) => {
      const track = trackRef.current;
      if (!track) return;
      const step = getStep();
      const maxScroll = track.scrollWidth - track.clientWidth;

      const atEnd = track.scrollLeft >= maxScroll - 4;
      const atStart = track.scrollLeft <= 4;

      if (direction === 1 && atEnd) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else if (direction === -1 && atStart) {
        track.scrollTo({ left: maxScroll, behavior: "smooth" });
      } else {
        track.scrollBy({ left: step * direction, behavior: "smooth" });
      }
    },
    [getStep]
  );

  useEffect(() => {
    if (!autoplayInterval || items.length < 2) return;

    intervalRef.current = window.setInterval(() => {
      if (!isHoveringRef.current) {
        scrollByStep(1);
      }
    }, autoplayInterval);

    return () => {
      if (intervalRef.current !== undefined) {
        window.clearInterval(intervalRef.current);
      }
    };
  }, [autoplayInterval, items.length, scrollByStep]);

  return (
    <div
      className="carousel"
      onMouseEnter={() => {
        isHoveringRef.current = true;
      }}
      onMouseLeave={() => {
        isHoveringRef.current = false;
      }}
      onTouchStart={() => {
        isHoveringRef.current = true;
      }}
      onTouchEnd={() => {
        isHoveringRef.current = false;
      }}
    >
      <button
        type="button"
        className="arrow arrowPrev" 
        onClick={() => scrollByStep(-1)}
        aria-label={`Previous ${ariaLabel}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <div
        ref={trackRef}
        className="track"
        role="group"
        aria-label={ariaLabel}
      >
        {items.map((item, i) => (
          <div className="item" key={getKey(item, i)}>
            {renderItem(item, i)}
          </div>
        ))}
      </div>

      <button
        type="button"
        className="arrow arrowNext"
        onClick={() => scrollByStep(1)}
        aria-label={`Next ${ariaLabel}`}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}

export default Carousel;
