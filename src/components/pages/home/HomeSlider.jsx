"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    {
        id: 1,
        image: '/images/hero/hero1.png',
        title: 'RAYOLF',
        subtitle: 'Premium Attire.',
        accent: 'Distinct Style',
    },
    {
        id: 2,
        image: '/images/hero/hero2.png',
        title: 'RAYOLF',
        subtitle: 'Luxury Couture.',
        accent: 'Elegance Redefined',
    },
    {
        id: 3,
        image: '/images/hero/hero3.png',
        title: 'RAYOLF',
        subtitle: 'Royal Collection.',
        accent: 'Modern Heritage',
    },
];

export default function HomeSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(timer);
    }, []);

    return (
       <div className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen overflow-hidden bg-[#0f0f0f]">
            {slides.map((slide, index) => (
                <div
                    key={slide.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current
                        ? 'opacity-100 pointer-events-auto z-10'
                        : 'opacity-0 pointer-events-none z-0'
                        }`}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={slide.image}
                            alt={slide.title}
                            fill
                            className={` object-cover
                            object-center
                            md:object-top
                            lg:object-center
                            transition-transform duration-[10s] ease-linear
                            ${index === current ? 'scale-105' : 'scale-100'}`}
                            priority={index === 0}
                        />

                        {/* Gradient Overlay for better text legibility */}
                        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/70" />

                        {/* Content Overlay */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                            <div className="max-w-5xl hero-reveal">
                                <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-wider text-white font-light leading-tight">
                                    <span className="font-semibold block sm:inline">{slide.title}:</span>{' '}
                                    <span className="block sm:inline">{slide.subtitle}</span>{' '}
                                    <span className="italic text-luxury-gold font-playfair lowercase first-letter:uppercase block md:inline mt-2 md:mt-0">
                                        {slide.accent}
                                    </span>
                                </h1>

                                <div className="mt-8 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 opacity-0 animate-[reveal_1.5s_0.5s_ease-out_forwards] z-20 relative">
                                    <button className="luxury-button w-full sm:w-auto !border-white !text-white hover:bg-white hover:text-black px-8 md:px-10 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.3em]">
                                        Discover Now
                                    </button>
                                    <button className="luxury-button w-full sm:w-auto !border-white !text-white hover:bg-luxury-gold hover:text-white px-8 md:px-10 py-3 md:py-4 text-[10px] md:text-xs tracking-[0.3em]">
                                        Collections
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Indicators - More compact on mobile */}
            <div className="absolute bottom-2 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center space-x-2 md:space-x-4 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className="group relative py-3 md:py-4 px-1 md:px-2"
                    >
                        <div className={`h-[1.5px] transition-all duration-500 ease-out ${index === current ? 'w-10 md:w-16 bg-luxury-gold' : 'w-4 md:w-8 bg-white/30 group-hover:bg-white/60'
                            }`} />
                        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] md:text-[15px] tracking-tighter transition-opacity duration-300 ${index === current ? 'opacity-100 text-[#c5a059]' : 'opacity-0'
                            }`}>
                            0{index + 1}
                        </span>
                    </button>
                ))}
            </div>

            {/* Side Elements - Hidden on smaller tablets too */}
            <div className="absolute left-10 top-1/2 -rotate-90 origin-left hidden xl:block">
                <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase">Luxury Ethnic Wear</span>
            </div>
            <div className="absolute right-10 top-1/2 rotate-90 origin-right hidden xl:block">
                <span className="text-[10px] tracking-[0.5em] text-white/40 uppercase">Est. 2024</span>
            </div>
        </div>
    );
}
