"use client";

import React, { useState, useRef } from 'react';

import ProductCardShowcase from '@/components/common/ProductCardShowcase';

const products = [
  {
    id: 1,
    name: "Vibrant Gota Patti Poshak (Yellow)",
    price: 650.00,
    image: "/images/products/women_yellow.jpg",
    sizes: ["XS", "M", "XL", "XXL"],
    badges: ["Dry Clean Only", "Crafted in Jaipur"],
  },
  {
    id: 2,
    name: "Rainbow Leheriya Saree Set",
    price: 399.00,
    image: "/images/products/women_rainbow.jpg",
    sizes: ["S", "Free Size"],
    badges: ["Dry Clean Only", "Crafted in Jaipur"],
  },
  {
    id: 3,
    name: "Bandhani Silk-Net Suit (Pink & Green)",
    price: 520.00,
    image: "/images/products/women_pink_blue.jpg",
    sizes: ["S", "M", "L", "XL"],
    badges: ["Dry Clean Only", "Crafted in Jaipur"],
  },
  {
    id: 4,
    name: "Gota Work Lehenga Set (Fuschia)",
    price: 780.00,
    image: "/images/products/women_pink_green.jpg",
    sizes: ["S", "M", "L", "XL"],
    badges: ["Dry Clean Only", "Crafted in Jaipur"],
  },
];

export default function WomenWear() {
  const [selectedSizes, setSelectedSizes] = useState({});

  const sliderRef = useRef(null);

  const handleSizeSelect = (productId, size) => {
    setSelectedSizes(prev => ({ ...prev, [productId]: size }));
  };

  const scroll = (direction) => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      sliderRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };


  return (
    <section className="relative py-24 bg-[#0a0a0a] overflow-hidden">
      {/* Background Texture & Watermarks */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}>
      </div>
      
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.01] pointer-events-none select-none">
        <div className="text-[25vw] font-bold tracking-tighter text-white">WOMEN</div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center mb-20">
          <h2 className="text-3xl md:text-5xl text-white font-playfair tracking-widest uppercase mb-4">Women's Wear</h2>
          <div className="h-[1px] w-32 bg-gradient-to-r from-transparent via-[#c5a059] to-transparent"></div>
        </div>

        <div className="relative group">
          <div 
            ref={sliderRef}
            className="flex lg:grid lg:grid-cols-2 overflow-x-auto lg:overflow-visible snap-x snap-mandatory gap-6 lg:gap-12 pb-10 lg:pb-0 no-scrollbar"
          >
            {products.map((product) => (
              <div key={product.id} className="min-w-[85vw] sm:min-w-[60vw] lg:min-w-0 snap-center">
                <ProductCardShowcase product={product} onSizeSelect={handleSizeSelect} selectedSizes={selectedSizes[product.id]} />
              </div>
            ))}
          </div>

          {/* Slider Controls - Only Mobile */}
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c5a059] hover:border-[#c5a059]/30 transition-all active:scale-95 lg:hidden -ml-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-[40%] -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c5a059] hover:border-[#c5a059]/30 transition-all active:scale-95 lg:hidden -mr-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>



        {/* See More Button */}
        <div className="mt-20 flex justify-center">
          <button className="group relative px-12 py-4 bg-transparent border border-[#c5a059]/30 text-[#c5a059] text-xs tracking-[0.4em] uppercase font-bold overflow-hidden transition-all duration-500 hover:border-[#c5a059]">
            <span className="relative z-10 transition-colors duration-500 group-hover:text-black">Explore Women's Wear</span>
            <div className="absolute inset-0 bg-[#c5a059] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
          </button>
        </div>
      </div>
    </section>
  );
}
