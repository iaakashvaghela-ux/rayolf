import React from 'react';
import Image from 'next/image';

export default function ProductCardShowcase({ product, onSizeSelect, selectedSizes }) {
    return (
        <div key={product.id} className="group relative bg-[#111111]/60 backdrop-blur-xl border border-white/5 rounded-2xl overflow-hidden hover:border-[#c5a059]/30 transition-all duration-700 flex flex-col sm:flex-row">
            {/* Product Image */}
            <div className="w-full sm:w-[45%] aspect-[4/5] relative overflow-hidden bg-[#151515] border-r border-white/5">
                <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
            </div>

            {/* Product Details */}
            <div className="flex-1 p-6 md:p-10 flex flex-col">
                <h3 className="text-xl md:text-2xl text-white font-playfair leading-tight mb-8 group-hover:text-[#c5a059] transition-colors duration-300">
                    {product.name}
                </h3>

                {/* Sizing */}
                <div className="space-y-4 mb-10">
                    <span className="text-[10px] tracking-[0.2em] text-white/30 uppercase font-medium">Select Size</span>
                    <div className="flex flex-wrap gap-2">
                        {product.sizes.map((size) => (
                            <button
                                key={size}
                                onClick={() => onSizeSelect(product.id, size)}
                                className={`w-10 h-10 flex items-center justify-center border text-[11px] tracking-widest transition-all duration-500 rounded-lg ${selectedSizes === size
                                        ? 'border-[#c5a059] bg-[#c5a059] text-black font-bold'
                                        : 'border-white/10 text-white/40 hover:border-white/30 hover:text-white'
                                    }`}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Pricing & CTA */}
                <div className="mt-auto space-y-8">
                    <div className="flex items-center gap-3">
                        <div className="flex-1 bg-gradient-to-r from-[#c5a059]/10 to-[#c5a059]/5 border border-[#c5a059]/20 rounded-xl px-5 py-4 flex items-center justify-between group/btn cursor-pointer hover:from-[#c5a059] hover:to-[#c5a059] transition-all duration-500 overflow-hidden relative">
                            <span className="text-[#c5a059] font-bold text-lg group-hover/btn:text-black transition-colors duration-300 z-10">${product.price.toFixed(2)}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#c5a059] group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300 z-10">
                                <circle cx="9" cy="21" r="1"></circle>
                                <circle cx="20" cy="21" r="1"></circle>
                                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                            </svg>
                        </div>

                        <button className="w-[60px] h-[60px] border border-white/5 bg-white/5 rounded-xl flex items-center justify-center text-white/30 hover:text-[#c5a059] hover:border-[#c5a059]/30 hover:bg-[#c5a059]/5 transition-all duration-500 group/heart">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover/heart:scale-110 transition-transform">
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>

                    <div className="flex flex-col gap-6">
                        <button className="text-white/30 hover:text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-semibold text-left w-fit transition-all relative group/link">
                            View Details
                            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-[#c5a059] transition-all duration-500 group-hover/link:w-full"></span>
                        </button>

                        {/* Origin Badges */}
                        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/5">
                            {product.badges.map((badge) => (
                                <div key={badge} className="flex items-center gap-2.5 text-[9px] text-white/20 uppercase tracking-[0.2em] font-medium">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#c5a059]/40 shadow-[0_0_8px_rgba(197,160,89,0.3)]"></div>
                                    {badge}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
