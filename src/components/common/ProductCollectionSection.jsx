"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';

import ProductCardShowcase from '@/components/common/ProductCardShowcase';

function getVisibleCount() {
  if (typeof window === 'undefined') return 4;
  if (window.innerWidth >= 1024) return 4;
  if (window.innerWidth >= 640) return 2;
  return 1;
}

export default function ProductCollectionSection({ title, watermark, products, buttonText }) {
  const [current, setCurrent] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [selectedSizes, setSelectedSizes] = useState({});
  const pathname = usePathname();
  const touchStartRef = useRef(null);

  const slideProducts = useMemo(() => {
    return [...products, ...products.slice(0, visibleCount)];
  }, [products, visibleCount]);

  const syncVisibleCount = useCallback(() => {
    const nextVisibleCount = getVisibleCount();

    setVisibleCount((previousVisibleCount) => {
      if (previousVisibleCount === nextVisibleCount) return previousVisibleCount;

      setCurrent(0);
      setIsTransitioning(false);
      window.setTimeout(() => setIsTransitioning(true), 50);
      return nextVisibleCount;
    });
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(syncVisibleCount);
    window.addEventListener('resize', syncVisibleCount);
    window.addEventListener('orientationchange', syncVisibleCount);
    window.addEventListener('pageshow', syncVisibleCount);

    const timeoutId = window.setTimeout(syncVisibleCount, 100);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.clearTimeout(timeoutId);
      window.removeEventListener('resize', syncVisibleCount);
      window.removeEventListener('orientationchange', syncVisibleCount);
      window.removeEventListener('pageshow', syncVisibleCount);
    };
  }, [syncVisibleCount]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(syncVisibleCount);

    return () => window.cancelAnimationFrame(frameId);
  }, [pathname, syncVisibleCount]);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIsTransitioning(true);
      setCurrent(prev => prev + 1);
    }, 3000);

    return () => window.clearInterval(timer);
  }, []);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const goNext = () => {
    setIsTransitioning(true);
    setCurrent(prev => prev + 1);
  };

  const goPrev = () => {
    setIsTransitioning(true);
    setCurrent(prev => {
      if (prev === 0) {
        window.setTimeout(() => {
          setIsTransitioning(true);
          setCurrent(products.length - 1);
        }, 20);
        setIsTransitioning(false);
        return products.length;
      }

      return prev - 1;
    });
  };

  const handleTransitionEnd = () => {
    if (current >= products.length) {
      setIsTransitioning(false);
      setCurrent(0);
      window.setTimeout(() => setIsTransitioning(true), 50);
    }
  };

  const handlePointerDown = (event) => {
    touchStartRef.current = event.clientX;
  };

  const handlePointerUp = (event) => {
    if (touchStartRef.current === null) return;

    const distance = touchStartRef.current - event.clientX;
    touchStartRef.current = null;

    if (Math.abs(distance) < 40) return;
    if (distance > 0) {
      goNext();
    } else {
      goPrev();
    }
  };

  const activeDot = current % products.length;

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-20 md:py-24">
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}
      />

      <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none select-none">
        <div className="text-[25vw] font-bold tracking-tighter text-white">{watermark}</div>
      </div>

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="mb-14 flex flex-col items-center md:mb-20">
          <h2 className="mb-4 text-center text-3xl uppercase tracking-widest text-white font-playfair md:text-5xl">{title}</h2>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent" />
        </div>

        <div className="relative">
          <div
            className="overflow-hidden"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              touchStartRef.current = null;
            }}
          >
            <div
              className={`flex ${isTransitioning ? 'transition-transform duration-700 ease-in-out' : ''}`}
              style={{ transform: `translateX(-${current * (100 / visibleCount)}%)` }}
              onTransitionEnd={handleTransitionEnd}
            >
              {slideProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="shrink-0 basis-full px-2 sm:basis-1/2 sm:px-3 lg:basis-1/4"
                >
                  <ProductCardShowcase
                    product={product}
                    onSizeSelect={handleSizeSelect}
                    selectedSize={selectedSizes[product.id]}
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={goPrev}
            className="absolute left-0 top-1/2 z-20 flex h-11 w-11 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/55 backdrop-blur-md transition-all hover:border-[#c5a059]/40 hover:text-[#c5a059] active:scale-95 md:-translate-x-5"
            aria-label={`Previous ${title}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          </button>

          <button
            type="button"
            onClick={goNext}
            className="absolute right-0 top-1/2 z-20 flex h-11 w-11 -translate-y-1/2 translate-x-2 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/55 backdrop-blur-md transition-all hover:border-[#c5a059]/40 hover:text-[#c5a059] active:scale-95 md:translate-x-5"
            aria-label={`Next ${title}`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6" /></svg>
          </button>
        </div>

        <div className="mt-8 flex justify-center gap-2">
          {products.map((product, index) => (
            <button
              key={product.id}
              type="button"
              onClick={() => {
                setIsTransitioning(true);
                setCurrent(index);
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${activeDot === index ? 'w-8 bg-[#c5a059]' : 'w-3 bg-white/20 hover:bg-white/40'}`}
              aria-label={`Go to ${title} slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-16 flex justify-center md:mt-20">
          <button type="button" className="group relative overflow-hidden border border-[#c5a059]/30 bg-transparent px-8 py-4 text-[10px] font-bold uppercase tracking-[0.32em] text-[#c5a059] transition-all duration-500 hover:border-[#c5a059] sm:px-12 sm:text-xs sm:tracking-[0.4em]">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">{buttonText}</span>
            <div className="absolute inset-0 translate-y-full bg-[#c5a059] transition-transform duration-500 ease-out group-hover:translate-y-0" />
          </button>
        </div>
      </div>
    </section>
  );
}
