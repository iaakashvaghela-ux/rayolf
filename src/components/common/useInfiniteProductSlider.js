"use client";

import { useCallback, useEffect, useRef } from 'react';

export default function useInfiniteProductSlider({ speed = 45 } = {}) {
  const sliderRef = useRef(null);
  const frameRef = useRef(null);

  const normalizeScroll = useCallback(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const segment = slider.scrollWidth / 3;
    if (!segment) return;

    if (slider.scrollLeft >= segment * 2) {
      slider.scrollLeft -= segment;
    } else if (slider.scrollLeft <= 0) {
      slider.scrollLeft += segment;
    }
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return undefined;

    let previousTime;

    const setMiddleSegment = () => {
      slider.scrollLeft = slider.scrollWidth / 3;
    };

    const animate = (time) => {
      if (previousTime === undefined) previousTime = time;

      const delta = time - previousTime;
      previousTime = time;

      if (slider.scrollWidth > slider.clientWidth) {
        slider.scrollLeft += (speed * delta) / 1000;
        normalizeScroll();
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    const timeoutId = window.setTimeout(setMiddleSegment, 0);
    window.addEventListener('resize', setMiddleSegment);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', setMiddleSegment);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [normalizeScroll, speed]);

  return { sliderRef };
}
